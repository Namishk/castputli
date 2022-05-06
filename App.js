import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import  {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginPage from "./screens/LoginPage.js";

export default function App() {

  const stack = createNativeStackNavigator();
  const tabs = createBottomTabNavigator()
  return (
    <NavigationContainer>

    <stack.Navigator>
      <stack.Screen name="LoginPage" component={LoginPage} options={{headerShown : false}} />
    </stack.Navigator>

    </NavigationContainer>
  );
}
