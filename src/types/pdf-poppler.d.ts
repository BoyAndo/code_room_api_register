// src/types/pdf-poppler.d.ts
declare module "pdf-poppler" {
  interface ConvertOptions {
    format?: string;
    out_dir: string;
    out_prefix: string;
    page?: number;
    scale?: number;
  }

  export function convert(
    pdfPath: string,
    options: ConvertOptions
  ): Promise<void>;
}
