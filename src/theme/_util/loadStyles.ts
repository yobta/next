import { parse } from 'postcss'
import { objectify } from 'postcss-js'

import { getAbsPath, readCss } from './fs'

/**
 * Represents a CSS-in-JS object where each selector maps to its CSS properties.
 * It supports nested rules such as media queries.
 */
type CSSInJS = {
  [selector: string]: CSSInJS | null | string | string[]
}

/**
 * Transforms a CSS file with @apply directives into a CSS-in-JS object.
 *
 * @param {string} cssFilePath - The pathname to the CSS file.
 * @returns {Promise<CSSInJS>} - The resulting CSS-in-JS object.
 */

export const loadStyles = async (cssFilePath: string): Promise<CSSInJS> => {
  const absPath = getAbsPath(cssFilePath)
  const cssContent = await readCss(absPath)
  const processed = parse(cssContent)
  const jssObject: CSSInJS = objectify(processed)

  return jssObject
}
