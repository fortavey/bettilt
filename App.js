import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
// import appsFlyer from 'react-native-appsflyer'

function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    // appsFlyer.initSdk(
    //   {
    //     devKey: 'MnDptWDkuBSssUGKSRUfzj',
    //     isDebug: false,
    //     appId: '1596740431',
    //   },
    //   (result) => {
    //     console.log(result)
    //   },
    //   (error) => {
    //     console.error(error)
    //   }
    // )
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
