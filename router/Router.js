import React from 'react';
import HomePage from '../pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationsPage from '../pages/DestinationsPage';
import InformationsPage from '../pages/InformationsPage';
import OthersPage from '../pages/OthersPage';
import AboutPage from '../pages/AboutPage';
import FavDestinationsPage from '../pages/FavDestinationsPage';
import DetailDestinationPage from '../pages/DetailDestinationPage';
import SplashScreen from '../pages/SplashScreen';
import NewsDetailPage from '../pages/NewsDetailPage';
import DestinationsMapPage from '../pages/DestinationsMapPage';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Destinations" component={DestinationsPage} />
        <Stack.Screen name="Informations" component={InformationsPage} />
        <Stack.Screen name="Others" component={OthersPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen
          name="FavoriteDestinations"
          component={FavDestinationsPage}
        />
        <Stack.Screen
          name="DetailDestinationPage"
          component={DetailDestinationPage}
        />
        <Stack.Screen name="NewsDetailPage" component={NewsDetailPage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="DestinationsMapPage"
          component={DestinationsMapPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
