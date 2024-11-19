import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const getParentDir = (): string => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  return resolve(__dirname, '..')
}

export const getAbsPath = (path: string): string => `${getParentDir()}${path}`

export const readCss = async (cssFilePath: string): Promise<string> => {
  const data = await fs.promises.readFile(cssFilePath, 'utf8')
  return data
}

// export const getAbsPath = (path: string): string => `${Deno.cwd()}${path}`;

// export const readCss = async (cssFilePath: string): Promise<string> => {
//   const decoder = new TextDecoder("utf-8");
//   const data = await Deno.readFile(cssFilePath);
//   const css = decoder.decode(data);
//   return css;
// };
