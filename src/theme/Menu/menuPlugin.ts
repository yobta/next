import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const menuPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('//Menu/Menu.components.css')

  addComponents(styles)
})
