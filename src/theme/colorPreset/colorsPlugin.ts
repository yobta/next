import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const colorsPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('//colorPreset/colors.components.css')

  addComponents(styles)
})
