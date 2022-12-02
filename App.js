import React from 'react';
import HomePage from './pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationsPage from './pages/DestinationsPage';
import InformationsPage from './pages/InformationsPage';
import OthersPage from './pages/OthersPage';
import AboutPage from './pages/AboutPage';
import FavDestinationsPage from './pages/FavDestinationsPage';
import DetailDestinationPage from './pages/DetailDestinationPage';
import Route from './router/Router';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Route />;
};

export default App;
