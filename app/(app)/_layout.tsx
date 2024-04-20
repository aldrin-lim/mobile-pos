import { Redirect, Stack, useRouter } from "expo-router";
import { useAuth0 } from "react-native-auth0";
import { StyleSheet } from "react-native";
import { View, Text } from "tamagui";

export default () => {
  const router = useRouter();
  const { authorize, clearSession, user, error, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  const loggedIn = user !== undefined && user !== null;

  if (!loggedIn) {
    return <Redirect href="/(auth)/signin" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
