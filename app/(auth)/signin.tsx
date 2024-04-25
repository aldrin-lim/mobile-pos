import SecondayButton from "components/SecondayButton";
import { useAuth0 } from "react-native-auth0";
import { Image, SizableText, Spinner } from "tamagui";
import { StyleSheet, View } from 'react-native'
import Colors from "constants/Colors";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Auth0Error } from "types/Auth0.types";
import Text from "components/Text";

const Signin = () => {
  const {authorize, clearSession, user, error, isLoading } = useAuth0();

  const onLogin = async () => {
   
    try {
      await authorize({
        audience: 'https://dev-xaod5c1kipyephrr.us.auth0.com/api/v2/',
        connection: 'Username-Password-Authentication',
      });
      console.log('Logged in');
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    } finally {
    }
  };

  const isLoggedIn = user !== undefined && user !== null;


  if (isLoading) {
    return ( 
      <View style={styles.container}>
        <Spinner scale="$1" size="large" />
      </View>
    );
  }

  if (isLoggedIn) {
    return (
      <Redirect href="/(app)" />
    )
  }
  


  return (
    <View  style={styles.container} >

      <Image style={{width: 300}} resizeMode='contain' source={require('assets/images/login-banner.png')}  />
      <SecondayButton
        fontFamily={'$body'}
        onPress={isLoggedIn ? onLogout : onLogin}
        width={300}
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </SecondayButton>
     
      {error && <Text>{auth0ErrorMessage((error as unknown as Auth0Error)?.code)}</Text>} 
    </View>
  );
};

const auth0ErrorMessage = (error: string) => {
  if (error && error.toLowerCase().includes('user_cancelled')) {
    return '';
  }

  return error
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background
  },
})

export default Signin;