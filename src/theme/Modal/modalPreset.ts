import type { Config } from 'tailwindcss'

import { modalPlugin } from './modalPlugin'

export const modalPreset: Partial<Config> = {
  plugins: [modalPlugin],
  theme: {
    extend: {
      zIndex: {
        modal: 'var(--ui-z-modal, 1000)',
      },
    },
  },
}
