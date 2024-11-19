import type { Config } from 'tailwindcss'

import { basePlugin } from './basePlugin'

export const basePreset: Partial<Config> = {
  plugins: [basePlugin],
  theme: {
    extend: {
      borderRadius: {
        inherit: 'inherit',
      },
      minHeight: {
        vieport: 'calc(var(--dvh, 1dvh) * 100)',
      },
    },
  },
}
