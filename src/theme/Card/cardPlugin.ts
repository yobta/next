import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const cardPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('//Card/Card.components.css')

  addComponents(styles)
})
