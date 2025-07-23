import asyncio, requests, time, whisper, os
from playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeout


async def custom_playwright(url:str) -> str:
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(url)

        await page.screenshot(path="snapshot.png")
        print("Snapshot guardado.")

        await asyncio.sleep(2)  # Pausa breve

        # Detección de reCAPTCHA
        captcha_frame = None
        for frame in page.frames:
            if "https://www.google.com/recaptcha/api2/anchor" in frame.url:
                captcha_frame = frame
                break

        if captcha_frame:
            print("CAPTCHA detectado. Intentando interactuar...")

            try:
                checkbox = await captcha_frame.wait_for_selector("#recaptcha-anchor", timeout=10000)
                await checkbox.click()
                print("Click realizado en CAPTCHA.")

                await page.wait_for_timeout(3000)

                desafio_frame = None
                for frame in page.frames:
                    if "https://www.google.com/recaptcha/api2/bframe" in frame.url:
                        desafio_frame = frame
                        break

                if desafio_frame:
                    print("Desafío de imágenes detectado. Intentando cambiar a audio...")
                    try:
                        audio_button = await desafio_frame.wait_for_selector("#recaptcha-audio-button", timeout=10000)
                        await audio_button.click()
                        print("Botón de audio clickeado.")

                        await asyncio.sleep(2)

                        # Rebuscar el frame de audio (a veces se recarga)
                        for frame in page.frames:
                            if "https://www.google.com/recaptcha/api2/bframe" in frame.url:
                                desafio_frame = frame
                                break

                        print("Iframe del desafío de audio detectado.")

                        # Paso 1: Click en botón con audífonos
                        try:
                            audio_button = await desafio_frame.wait_for_selector("#recaptcha-audio-button", timeout=10000)
                            await audio_button.click()
                            print("Botón de audífonos clickeado.")
                            await asyncio.sleep(2)
                        except Exception as e:
                            print("No se pudo hacer clic en el botón de audífonos:", e)

                        # Paso 2: Descargar el audio
                        try:
                            download_link = await desafio_frame.wait_for_selector(".rc-audiochallenge-tdownload-link", timeout=10000)
                            audio_url = await download_link.get_attribute("href")

                            if audio_url:
                                print(f"URL de audio encontrada: {audio_url}")
                                response = requests.get(audio_url)
                                with open("captcha_audio.mp3", "wb") as f:
                                    f.write(response.content)
                                print("Audio descargado correctamente como captcha_audio.mp3.")

                                await asyncio.sleep(10)

                                audio_path = "captcha_audio.mp3"
                                if os.path.exists(audio_path):
                                    print("El archivo de audio existe, se procederá a transcribir.")
                                    model = whisper.load_model("small")
                                    result = model.transcribe(audio_path, fp16=False)
                                    print("Texto transcrito del audio:", result["text"])
                                else:
                                    print("Error: El archivo captcha_audio.mp3 no fue encontrado.")

                                try:
                                    print("Buscando input para respuesta de audio...")
                                    input_box = await desafio_frame.wait_for_selector('input#audio-response', timeout=5000)
                                    await input_box.fill(result["text"])
                                    print("Respuesta escrita en el input.")

                                    await asyncio.sleep(2)

                                    verify_button = await desafio_frame.wait_for_selector('#recaptcha-verify-button', timeout=5000)
                                    await verify_button.click()
                                    print("Botón 'Verificar' presionado.")

                                    await asyncio.sleep(3)

                                except Exception as e:
                                    print(f"Error al interactuar con el input o botón de verificación: {e}")
                            else:
                                print("No se encontró la URL del audio.")
                        except Exception as e:
                            print("Error al intentar extraer o descargar el audio:", e)
                    except PlaywrightTimeout:
                        print("No se encontró el botón de audio o falló el clic.")
                else:
                    print("No apareció el desafío visual.")
            except PlaywrightTimeout:
                print("No se pudo hacer clic en el CAPTCHA.")
        else:
            print("No se detectó CAPTCHA. Continuando...")

        # Extraer texto de la página final
        try:
            await page.wait_for_load_state("load", timeout=10000)
            texto = await page.inner_text("body")
            print("Contenido visible de la página:\n")
            return texto

            with open("pagina_final.txt", "w", encoding="utf-8") as f:
                f.write(texto)
            print("Contenido guardado en pagina_final.txt")

            await asyncio.sleep(10)
        except PlaywrightTimeout:
            print("La página tardó demasiado en cargar o falló.")

        await browser.close()

    
