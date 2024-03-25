import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Product: { id: number, name: string };
  Products: undefined;
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    })
  }, [])
  

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      },
      headerStatusBarHeight: Platform.OS === 'android' ? top : -5,
    }}>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Settings" component={ SettingsScreen } />
    </Stack.Navigator>
  );
}
