import React from 'react';
import HomePage from './pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationsPage from './pages/DestinationsPage';
import InformationsPage from './pages/InformationsPage';
import OthersPage from './pages/OthersPage';
import AboutPage from './pages/AboutPage';
import FavDestinationsPage from './pages/FavDestinationsPage';

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
        <Stack.Screen name="Informations" component={InformationsPage} />
        <Stack.Screen name="Others" component={OthersPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="FavDestinations" component={FavDestinationsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
