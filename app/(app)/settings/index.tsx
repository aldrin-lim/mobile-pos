import Text from "components/Text";
import { useEffect } from "react";
import { View, YStack } from "tamagui";
import globalStyles from "theme/globalStyles";
import Toast from "react-native-toast-message";
import PrimaryButton from "components/PrimaryButton";
import { useAuth0 } from "react-native-auth0";
import useLocalStore from "store";

const Settings = () => {
  const { getCredentials } = useAuth0();
  const store = useLocalStore((state) => state);
  const { collection: { collections, addCollection } } = store
  console.log('collection', collections)
  const syncData = async () => {
   
    return
    const token = await getCredentials().then((res) => res?.accessToken);
    if (token) {
      try {
      } catch (e) {
        console.log(e);
        Toast.show({
          type: "error",
          text1: "Sync Error",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Sync Error",
      });
    }
  };



  const getCollections = async () => {
  }


  return (
    <View flex={1}>
      <YStack alignSelf="stretch" gap={"$4"} padding={"$4"}>
        <PrimaryButton onPress={() => {}}>Clear Data</PrimaryButton>
        <PrimaryButton onPress={syncData}>Sync</PrimaryButton>
        <PrimaryButton onPress={getCollections}>Get Collections</PrimaryButton>
      </YStack>
    </View>
  );
};

export default Settings;
