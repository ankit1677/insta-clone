
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';


const Stack=createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
}

export const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Homescreen" screenOptions={screenOptions}>
            
            <Stack.Screen name="Homescreen" component={Homescreen} options={{title: 'Home'}} />
            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
            
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

