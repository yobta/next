import type { Config } from 'tailwindcss'

import { ratingPlugin } from './ratingPlugin'

export const ratingPreset: Partial<Config> = {
  plugins: [ratingPlugin],
  theme: {
    extend: {},
  },
}
