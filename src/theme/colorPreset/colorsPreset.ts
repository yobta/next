import type { Config } from 'tailwindcss'

import { colorsPlugin } from './colorsPlugin'

export const colorsPreset: Partial<Config> = {
  plugins: [colorsPlugin],
  theme: {
    extend: {
      backgroundColor: {},
      colors: {
        ink: 'oklch(var(--bc) / <alpha-value>)',
        paper: 'oklch(var(--b1) / <alpha-value>)',
        'paper-2': 'oklch(var(--b2) / <alpha-value>)',
        'paper-3': 'oklch(var(--b3) / <alpha-value>)',
      },
    },
  },
}
