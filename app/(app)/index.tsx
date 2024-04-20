import { Stack } from "expo-router";
import { Card, H1, Image, ScrollView, View, XStack, YStack } from "tamagui";
import { SafeAreaView, StyleSheet } from "react-native";
import globalStyles from "theme/globalStyles";
import SecondayButton from "components/SecondayButton";
import { useAuth0 } from "react-native-auth0";
import Text from "components/Text";
import ProductCard from "components/ProductCard/indext";
import { useState } from "react";
import { Dimensions } from "react-native";
import testData from "testData";


const App = () => {
  const { authorize, clearSession, user, error, isLoading } = useAuth0();
  const {} = useAuth0();

  const windowHeight = Dimensions.get("window").height;

  return (
    <ScrollView overScrollMode="never" >
      <YStack >
        {/* <Text fontSize={"$1"} color="white">
          App Main
        </Text>
        <SecondayButton onPress={onLogout}>Log out</SecondayButton> */}
        <Text color={'white'} size={'$10'}>Products</Text>
        <ScrollView maxHeight={windowHeight - 160} overScrollMode="never">
          <XStack
            $sm={{ flexDirection: "row" }}
            paddingHorizontal="$4"
            flexWrap="wrap"
            justifyContent="space-between"
            gap={"$4"}
          >
            {testData.products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </XStack>
        </ScrollView>
      </YStack>
    </ScrollView>
  );
};

type TruncatedTextProps = {
  text: string;
};

export default App;
