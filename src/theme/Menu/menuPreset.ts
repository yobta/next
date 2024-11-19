import type { Config } from 'tailwindcss'

import { menuPlugin } from './menuPlugin'

export const menuPreset: Partial<Config> = {
  plugins: [menuPlugin],
  theme: {
    extend: {},
  },
}
