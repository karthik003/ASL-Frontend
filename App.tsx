import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ImageDisplayScreen from './ImagDisplayScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hand Signs" component={ImageDisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
