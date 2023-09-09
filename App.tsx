import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";
import {Navigation} from "./Navigation";
import {store} from "./src/store/store";
import {Provider} from "react-redux";

export default function App() {
    const [isFontLoaded] = useFonts({
        'Dosis-Tini': require('./src/assets/fonts/dosis-latin-300-normal.ttf'),
        'Dosis-Regular': require('./src/assets/fonts/dosis-latin-400-normal.ttf'),
        'Dosis-Bold': require('./src/assets/fonts/dosis-latin-600-normal.ttf'),
    });

    if (!isFontLoaded) {
        return <Text>Loading...</Text>;
    }
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
