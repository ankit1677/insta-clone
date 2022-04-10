
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen'
import NewPostScreen from './screens/NewPostScreen'


const Stack=createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
            <Stack.Screen name="Homescreen" component={Homescreen} options={{title: 'Home'}} />
            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack