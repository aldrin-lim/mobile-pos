import { Redirect, Stack, useRouter } from "expo-router";
import { useAuth0 } from "react-native-auth0";
import { Pressable, ScrollViewProps, StyleSheet } from "react-native";
import { View, Text, Image, XStack, Button, YStack } from "tamagui";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import Colors from "constants/Colors";
import { X } from "@tamagui/lucide-icons";
import { LogOut, Cog, Book, Home } from "@tamagui/lucide-icons";
import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import appConfig from "config/appConfig";
import usePullData from "hooks/usePullData";
import { sync } from "db/sync";
import { RootSiblingParent } from 'react-native-root-siblings';
import {  Spinner } from "tamagui";

export default () => {
  const router = useRouter();
  const { authorize, clearSession, user, error, isLoading, getCredentials } =
    useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {
    getCredentials().then((credentials) => {
      setToken(credentials?.accessToken ?? "");
    });
  }, []);

  console.log('isLoading', isLoading)



  if (isLoading) {
    return (
      <View style={styles.container}>
        <Spinner scale="$1" size="large" />
      </View>
    );
  }

  const loggedIn = user !== undefined && user !== null;

  if (!loggedIn) {
    return <Redirect href="/(auth)/signin" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTintColor: "white",
          drawerLabelStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
          },
          drawerActiveBackgroundColor: Colors.dark.primary,
          drawerActiveTintColor: "white",
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Orders",
            title: "",
            headerLeft: () => (
              <XStack justifyContent="center" alignItems="center" gap={"$1"}>
                <DrawerToggleButton tintColor="white" />
                <Pressable>
                  <Image
                    width={100}
                    height={40}
                    resizeMode="contain"
                    source={require("assets/images/home-logo.png")}
                  />
                </Pressable>
              </XStack>
            ),
            drawerIcon: ({ focused }) => (
              <Home size={24} color="white" marginRight="$-4" />
            ),
          }}
        />
        <Drawer.Screen
          name="shift/start"
          options={{
            drawerLabel: "Collections",
            title: "Collections",
            drawerIcon: ({ focused }) => (
              <Book size={24} color="white" marginRight="$-4" />
            ),
          }}
        />
        <Drawer.Screen
          name="settings/index"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({ focused }) => (
              <Cog size={24} color="white" marginRight="$-4" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { user, clearSession } = useAuth0();
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: Colors.dark.background }}
    >
      <View>
        <XStack
          justifyContent="space-between"
          padding={"$4"}
          backgroundColor={"#202225"}
          paddingVertical="$2"
          paddingRight={0}
        >
          <Image
            width={100}
            height={40}
            resizeMode="contain"
            source={require("assets/images/home-logo.png")}
          />
          <Button
            onPress={() => {
              props.navigation.closeDrawer();
            }}
          >
            <X size={24} color="white" />
          </Button>
        </XStack>
        <YStack
          justifyContent="space-between"
          gap={"$2"}
          borderBottomColor={"black"}
          borderBottomWidth={1}
          paddingVertical={"$4"}
        >
          <YStack paddingHorizontal={"$4"} gap={"$2"}>
            <YStack>
              <Text fontSize={"$9"} style={{ color: "white" }}>
                {user?.name}
              </Text>
              <Text style={{ color: "white" }}>{user?.email}</Text>
            </YStack>
            <Button
              size="$3"
              variant="outlined"
              color={Colors.dark.primary}
              borderColor={Colors.dark.primary}
            >
              End Shift
            </Button>
          </YStack>
        </YStack>
        <View padding={"$2"}>
          <YStack justifyContent="space-between" flex={1}>
            <YStack>
              <DrawerItemList {...props} />
            </YStack>
            <YStack marginTop="auto">
              <DrawerItem
                style={{
                  marginTop: "auto",
                }}
                label={() => <Text style={{ color: "white" }}>Logout</Text>}
                onPress={async () => {
                  // props.navigation.closeDrawer();
                  await clearSession();
                }}
                icon={() => (
                  <LogOut size={24} color="white" marginRight="$-4" />
                )}
              />
            </YStack>
          </YStack>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
