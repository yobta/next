import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles'

export const basePlugin = plugin(async ({ addBase }) => {
  const styles = await loadStyles('//Base/Base.base.css')

  addBase(styles)
})
