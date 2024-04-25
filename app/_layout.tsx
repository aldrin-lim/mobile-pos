import { ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";
import { Auth0Provider } from "react-native-auth0";

import "../tamagui-web.css";

import { config } from "../tamagui.config";
import { useEffect } from "react";

import darkTheme from "theme/darkTheme";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import { RootSiblingParent } from "react-native-root-siblings";

import { hugeiconsLicense } from "@hugeicons/react-native-pro";
import PrimaryButton from "components/PrimaryButton";
import Toast from "react-native-toast-message";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

hugeiconsLicense(
  "1e5c20d45105bd54d05da68bc2ccf1d0RT0xNzEyMjgxNjM4MDAwLFM9cHJvLFY9MSxQPUd1bXJvYWQsU1Q9QkY0MEE0RjcsRVQ9Q0FFMjUzOTI="
);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "/",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [poppinsLoaded, poppinsError] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  useEffect(() => {
    if (poppinsLoaded || poppinsError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [poppinsLoaded, poppinsError]);

  if (!poppinsLoaded && !poppinsError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Auth0Provider
      domain={"dev-xaod5c1kipyephrr.us.auth0.com"}
      clientId={"O44COcrXK02mAnuMX3LVEQdQwWwDbpt0"}
    >
      <TamaguiProvider config={config} defaultTheme={"dark"}>
        <ThemeProvider value={darkTheme}>
          {/* <RootSiblingParent> */}
            <Stack>
              <Stack.Screen name="(app)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
            <Toast  />
          {/* </RootSiblingParent> */}
        </ThemeProvider>
      </TamaguiProvider>
    </Auth0Provider>
  );
}
