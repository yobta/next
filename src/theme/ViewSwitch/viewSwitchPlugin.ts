import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const viewSwitchPlugin = plugin(async ({ addBase }) => {
  const styles = await loadStyles('/ViewSwitch/ViewSwitch.components.css')

  addBase(styles)
})
