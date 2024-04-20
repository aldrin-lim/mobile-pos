import { config as configBase } from '@tamagui/config/v3'
import { createFont, createTamagui, createTheme, createTokens } from 'tamagui'
import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
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

const PoppinsFont = createFont({
  family: "Poppins_400Regular",
  size: {
    // xs: 12,
    // sm: 14,
    // base: 16,
    // lg: 18,
    // xl: 20,
    // '2xl': 24,
    // '3xl': 30,
    // '4xl': 36,
    // '5xl': 48,
    // '6xl': 60,
    // '7xl': 72,
    // '8xl': 96,
    // '9xl': 128,
    ...configBase.fonts.body.size
  },
  weight: {
    4: "400",
    5: "500",
    7: "700",
    true: "400",
  },
  face: {
    // pass in weights as keys
    100: { normal: "Poppins_100Thin", italic: "Poppins_100Thin_Italic" },
    200: { normal: "Poppins_200ExtraLight", italic: "Poppins_200ExtraLight_Italic" },
    300: { normal: "Poppins_300Light", italic: "Poppins_300Light_Italic" },
    400: { normal: "Poppins_400Regular", italic: "Poppins_400Regular_Italic" },
    500: { normal: "Poppins_500Medium", italic: "Poppins_500Medium_Italic" },
    700: { normal: "Poppins_700Bold", italic: "Poppins_700Bold_Italic" },
  },
});


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
  fonts: {
    body: PoppinsFont
  }
})
export default config
