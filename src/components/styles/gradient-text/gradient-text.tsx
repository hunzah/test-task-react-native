import MaskedView from "@react-native-community/masked-view";
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

type GradientText = {
    colors: string[];
    [x: string]: any;
}
export const GradientText = ({colors, ...rest}: GradientText) => {
    return (
        <MaskedView maskElement={<Text {...rest} />}>
            <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <Text {...rest} style={[rest.style, {opacity: 0}]} />
            </LinearGradient>
        </MaskedView>
    );
};