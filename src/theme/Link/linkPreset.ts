import type { Config } from 'tailwindcss'

import { linkPlugin } from './linkPlugin'

export const linkPreset: Partial<Config> = {
  plugins: [linkPlugin],
  theme: {
    extend: {
      colors: {
        link: 'oklch(var(--ui-link-oklch) / <alpha-value>)',
        'link-active': 'oklch(var(--ui-link-active-oklch) / <alpha-value>)',
        'link-hover': 'oklch(var(--ui-link-hover-oklch) / <alpha-value>)',
        'link-visited': 'oklch(var(--ui-link-visited-oklch) / <alpha-value>)',
      },
    },
  },
}
