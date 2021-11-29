import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
} from "./CustomNavigation";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Screen1" component={FirstScreenNavigator} />
          <Tab.Screen name="Screen2" component={SecondScreenNavigator} />
          <Tab.Screen name="Screen3" component={ThirdScreenNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
