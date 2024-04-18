import { config as configBase } from '@tamagui/config/v3'
import { createTamagui, createTheme, createTokens } from 'tamagui'
import { color, radius, size, space, themes, zIndex, } from '@tamagui/themes'
import Colors from './constants/Colors'


declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
})


export type Conf = typeof config
export const config = createTamagui({
  ...configBase,
  tokens,
  themes: {
    ...themes,
    dark: {
      ...Colors.dark
    }
  },
})
export default config
