import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Onboarding from './src/screens/Onboarding';
import TestScreen from './src/screens/TestScreen';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false, animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
