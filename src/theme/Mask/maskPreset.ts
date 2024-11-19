import type { Config } from 'tailwindcss'

import { maskPlugin } from './maskPlugin'

export const maskPreset: Partial<Config> = {
  plugins: [maskPlugin],
  theme: {
    extend: {},
  },
}
