import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import  {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginPage from "./components/screens/LoginPage.js";
import  Main from "./components/Main.js"

export default function App() {

  const stack = createNativeStackNavigator();
  const tabs = createBottomTabNavigator()
  return (
    <NavigationContainer>

    <stack.Navigator>
      <stack.Screen name="LoginPage" component={LoginPage} options={{headerShown : false}} />
      <stack.Screen name="Main" component={Main} options={{headerShown : false}} />
    </stack.Navigator>

    </NavigationContainer>
  );
}
