import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

import { animationPreset } from './animation/animationPreset'
import { basePreset } from './Base/basePreset'
import { buttonPreset } from './Button/buttonPreset'
import { cardPreset } from './Card/cardPreset'
import { colorsPreset } from './colorPreset/colorsPreset'
import { dropdownPreset } from './Dropdown/dropdownPreset'
import { groupPreset } from './Group/groupPreset'
import { inputPreset } from './Input/inputPreset'
import { linkPreset } from './Link/linkPreset'
import { maskPreset } from './Mask/maskPreset'
import { menuPreset } from './Menu/menuPreset'
import { modalPreset } from './Modal/modalPreset'
import { navbarPreset } from './Navbar/navbarPreset'
import { ratingPreset } from './Rating/ratingPreset'
import { themesPreset } from './themes/themesPreset'
import { viewSwitchlPreset } from './ViewSwitch/viewSwitchPreset'

export const uiPreset: Partial<Config> = {
  plugins: [typographyPlugin],
  presets: [
    themesPreset,
    animationPreset,
    basePreset,
    buttonPreset,
    cardPreset,
    colorsPreset,
    dropdownPreset,
    inputPreset,
    groupPreset,
    linkPreset,
    maskPreset,
    menuPreset,
    modalPreset,
    navbarPreset,
    ratingPreset,
    viewSwitchlPreset,
  ],
}
