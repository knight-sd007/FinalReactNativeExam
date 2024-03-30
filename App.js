import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Menu,
  About,
  Contact,
  Service,
  Question2,
  Question3,
} from "./src/Pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Service' component={Service} />
        <Stack.Screen name='Question2' component={Question2} />
        <Stack.Screen name='Question3' component={Question3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
