import SecondayButton from "components/SecondayButton";
import { useAuth0 } from "react-native-auth0";
import { Image, View } from "tamagui";
import { StyleSheet } from 'react-native'
import Colors from "constants/Colors";

const Signin = () => {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();

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
    <View theme="dark" padding={"$4"}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.dark.background
  },
})

export default Signin;