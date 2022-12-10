import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Route from './router/Router';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Route />;
};

export default App;
