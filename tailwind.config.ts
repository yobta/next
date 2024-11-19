import type { Config } from 'tailwindcss'

import { uiPreset } from './src/theme/uiPreset'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'media',
  presets: [uiPreset],
} satisfies Config
