import type { Config } from 'tailwindcss'

import { groupPlugin } from './groupPlugin'

export const groupPreset: Partial<Config> = {
  plugins: [groupPlugin],
  theme: {
    extend: {
      borderRadius: {
        group: 'var(--rounded-group)',
      },
      fontSize: {
        'group-subtitle': 'var(--fz-group-subtitle, .8125rem)',
        'group-title': 'var(--fz-group-title, .8125rem)',
      },
      gap: {},
      lineHeight: {
        'group-subtitle': 'var(--lh-group-subtitle, 1.225rem)',
        'group-title': 'var(--lh-group-title, 1.225rem)',
      },
      spacing: {
        'group-gap': 'var(--group-gap)',
      },
    },
  },
}
