import type { Config } from 'tailwindcss'

import { cardPlugin } from './cardPlugin'

export const cardPreset: Partial<Config> = {
  plugins: [cardPlugin],
  theme: {
    extend: {},
  },
}
