import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
    </Stack>
  );
};
