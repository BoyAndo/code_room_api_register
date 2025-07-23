// src/debug-loader.ts

import Module from "module";

// Interceptar y mostrar todos los require()
const originalRequire = Module.prototype.require;
Module.prototype.require = function (this: any, path: string) {
  console.log("🔍 Cargando módulo:", path);
  return originalRequire.apply(this, arguments as any);
};

// Inicia tu servidor como siempre
import "./server";
