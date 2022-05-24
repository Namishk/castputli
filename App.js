import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { ActivityIndicator, View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./screens/LoginPage";
import Menu from "./screens/Menu";
import Games from "./screens/Games";
import AR from "./screens/AR";
import Competition from "./screens/Competition";
import Quiz from './screens/Quiz';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => { navigation.navigate("LoginPage") }}>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

function S1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => { navigation.navigate("main") }}>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }} collapsable={false}>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
          <Stack.Screen name="Games" component={Games} options={{ headerShown: false }} />
          <Stack.Screen name="Competition" component={Competition} options={{ headerShown: false }} />
          <Stack.Screen name="AR" component={AR} options={{ headerShown: false }} />
          <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>

    </NavigationContainer>
  );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" options={{headerShown : false}} component={HomeScreen} />
  //       <Stack.Screen name="LoginPage" options={{headerShown : false}} component={S1} />
  //       <Stack.Screen name="main" options={{headerShown : false}} component={Main} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // <View><Text>okiii</Text></View>
  // );

}

export default App;