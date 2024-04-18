import React from 'react';
import { Text, StyleSheet, useColorScheme } from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import SecondayButton from 'components/SecondayButton';
import { Image, View } from 'tamagui';

const Home = () => {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();
  const colorScheme = useColorScheme()

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container} padding={"$4"}>
      {/* {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>} */}

      <Image style={{width: 300}} resizeMode='contain' source={require('assets/images/login-banner.png')}  />
      <SecondayButton
        onPress={loggedIn ? onLogout : onLogin}
        width={300}
      >
        {loggedIn ? 'Log Out' : 'Log In'}
      </SecondayButton>
    </View>
  );
};

const App = () => {
  return (
      <Home />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;