import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from "./src/pages/splash-screen/splash-screen";
import {MainScreen} from "./src/pages/main-screen/main-screen";
import {Gallery} from "./src/pages/gallery/gallery";
import {Images} from "./src/pages/images/images";
import {ImageView} from "./src/pages/image-view/image-view";


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
                <Stack.Screen name="Gallery" component={Gallery}/>
                <Stack.Screen name="Images" component={Images}/>
                <Stack.Screen name="ImageView" component={ImageView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export type RootStackParamList = {
    Splash: undefined;
    Main: undefined;
    Gallery: undefined;
    Images: undefined;
    ImageView: undefined;
};
