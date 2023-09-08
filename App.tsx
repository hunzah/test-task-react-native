import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";
import {Navigation} from "./Navigation";

export default function App() {
    const [isFontLoaded] = useFonts({
        'Dosis-Regular': require('./assets/fonts/ttf/dosis-latin-400-normal.ttf'),
        'Dosis-Bold': require('./assets/fonts/ttf/dosis-latin-600-normal.ttf'),
    });

    if (!isFontLoaded) {
        return <Text>Loading...</Text>;
    }
    const Stack = createNativeStackNavigator();

    return (
        <Navigation/>
    );
}
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontFamily: 'Dosis-Regular',
//         fontSize: 18,
//         fontWeight: '600'
//     }
// });