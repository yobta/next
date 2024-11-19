import type { Config } from 'tailwindcss'

import { inputPlugin } from './inputPlugin'

export const inputPreset: Partial<Config> = {
  plugins: [inputPlugin],
  theme: {
    extend: {
      borderRadius: {
        input: 'var(--rounded-input, var(--rounded-btn, .5rem))',
        'input-lg': 'var(--rounded-input-lg, var(--rounded-btn-lg, .75rem))',
        'input-sm': 'var(--rounded-input-sm, var(--rounded-btn-sm, .375rem))',
        'input-xs': 'var(--rounded-input-xs, var(--rounded-btn-xs, .25rem))',
      },
    },
  },
}
