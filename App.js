import React from 'react';
import {View} from 'react-native';
import HomePage from './pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DestinationsPage from './pages/DestinationsPage';
import BottomBar from './components/BottomBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Destinations" component={DestinationsPage} />
        <Stack.Screen name="BottomBar" component={BottomBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
