import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from "./components/splash-screen/splash-screen";
import {MainScreen} from "./components/main-screen/main-screen";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Main" component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
