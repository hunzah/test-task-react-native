import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";
import {Navigation} from "./Navigation";
import {store} from "./src/store/store";
import {Provider} from "react-redux";

export default function App() {
    const [isFontLoaded] = useFonts({
        'Dosis-Regular': require('@fontsource/dosis/400.css'),
        'Dosis-Bold': require('@fontsource/dosis/600.css'),
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
