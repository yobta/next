import type { Config } from 'tailwindcss'

import { buttonPlugin } from './buttonPlugin'

export const buttonPreset: Partial<Config> = {
  plugins: [buttonPlugin],
  theme: {
    extend: {
      borderRadius: {
        btn: 'var(--rounded-btn, .5rem)',
        'btn-lg': 'var(--rounded-btn-lg, .75rem)',
        'btn-sm': 'var(--rounded-btn-sm, .375rem)',
        'btn-xs': 'var(--rounded-btn-xs, .25rem)',
      },
      fontSize: {
        btn: 'var(--font-size-btn, 1rem)',
        'btn-lg': 'var(--font-size-btn-lg, 1.125rem)',
        'btn-sm': 'var(--font-size-btn-sm, .875rem)',
        'btn-xs': 'var(--font-size-btn-xs, .75rem)',
      },
      fontWeight: {
        'weight-btn': 'var(--font-weight-btn, 500)',
        'weight-btn-lg': 'var(--font-weight-btn-lg, 600)',
        'weight-btn-sm': 'var(--font-weight-btn-sm, 500)',
        'weight-btn-xs': 'var(--font-weight-btn-xs, 500)',
      },
      gap: {
        btn: 'var(--gap-btn, .25rem)',
        'btn-lg': 'var(--gap-btn-lg, .5rem)',
        'btn-sm': 'var(--gap-btn-sm, .25rem)',
        'btn-xs': 'var(--gap-btn-xs, .125rem)',
      },
      height: {
        btn: 'var(--height-btn, 3rem)',
        'btn-lg': 'var(--height-btn-lg, 3.5rem)',
        'btn-sm': 'var(--height-btn-sm, 2.5rem)',
        'btn-xs': 'var(--height-btn-xs, 2rem)',
      },
      padding: {
        btn: 'var(--padding-btn, 1rem)',
        'btn-lg': 'var(--padding-btn-lg, 1.25rem)',
        'btn-sm': 'var(--padding-btn-sm, .75rem)',
        'btn-xs': 'var(--padding-btn-xs, .5rem)',
      },
    },
  },
}
