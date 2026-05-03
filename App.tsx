import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import HomeScreen from "./src/screens/HomeScreen/index";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";
import {LogBox} from "react-native";
import store from "./src/redux/store";
import {Provider} from "react-redux";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: "home",
      Details: "details/:id",
      Cart: "cart",
    },
  },
};

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
