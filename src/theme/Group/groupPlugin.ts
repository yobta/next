import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const groupPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('//Group/Group.components.css')

  addComponents(styles)
})
