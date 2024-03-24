import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BottomTabsNavigator /> */}
      {/* <SideMenuNavigator /> */}

      <Stack.Navigator>
        <Stack.Screen name="Root" component={ SideMenuNavigator } options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
