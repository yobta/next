import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const dropdownPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Dropdown/Dropdown.components.css')

  addComponents(styles)
})
