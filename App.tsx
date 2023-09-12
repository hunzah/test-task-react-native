import {Text} from 'react-native';
import {useFonts} from "expo-font";
import {Navigation} from "./navigation";
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


    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
