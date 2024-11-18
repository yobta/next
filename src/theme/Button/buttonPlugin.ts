import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const buttonPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Button/Button.components.css')

  addComponents(styles)
})
