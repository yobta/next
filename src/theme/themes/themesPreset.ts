import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

import { yobtaDarkTheme, yobtaLightTheme } from './yobtaThemes'

export const themesPreset: Partial<Config> = {
  daisyui: {
    base: false, // applies background color and foreground color for root element by default
    darkTheme: 'dark-yobta', // name of one of the included themes for dark mode
    logs: true,
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    styled: true, // include daisyUI colors and design decisions for all components
    themes: [yobtaLightTheme, yobtaDarkTheme], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    utils: true, // adds responsive and modifier utility classes
  },
  plugins: [daisyui],

  theme: {
    extend: {},
  },
}
