import { StyleSheet, Platform } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === 'android' ? 45 : 0
  },
});

export default globalStyles

