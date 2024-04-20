import { Redirect, Stack, useRouter } from "expo-router";
import { useAuth0 } from "react-native-auth0";
import { Pressable, StyleSheet } from "react-native";
import { View, Text, Image, XStack } from "tamagui";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from "@react-navigation/drawer";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerTintColor: 'white',
      
      }}>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Home',
            title: '',
            headerLeft: () => (
              <XStack justifyContent="center" alignItems="center" gap={'$1'}>
                <DrawerToggleButton tintColor="white" />
                <Pressable>
                  <Image width={100} height={40} resizeMode="contain" source={require('assets/images/home-logo.png')}  />
                </Pressable>
                {/* <Image style={{width: 20}} resizeMode='contain' source={require('assets/images/home-logo.png')}  /> */}
              </XStack>
            )
            // headerRight: () => (
            //   <Image style={{width: 50}} resizeMode='contain' source={require('assets/images/home-logo.png')}  />
            // ),
            // drawerIcon: () => (
            //   // <Image style={{width: 100}} resizeMode='contain' source={require('assets/images/home-logo.png')}  />
            // )
          }}
        />
        <Drawer.Screen
          name="shift/start" 
          options={{
            drawerLabel: 'Start Shift',
            title: 'Start Shift',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
