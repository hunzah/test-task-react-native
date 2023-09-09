import React from 'react';
import {StyleSheet, Text, TextStyle} from "react-native";

type Prop = {
    children: string
    style?: TextStyle
}
export const TextRegular: React.FC<Prop> = ({children, style}) => {
    return <Text style={[styles.regular, style]}>{children}</Text>;
};

export const TextBold: React.FC<Prop> = ({children, style}) => {
    return <Text style={[styles.bold, style]}>{children}</Text>;
};


export const TextTini: React.FC<Prop> = ({children, style}) => {
    return <Text style={[styles.tini, style]}>{children}</Text>;
};



const styles = StyleSheet.create({
    regular: {
        fontFamily: 'Dosis-Regular',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 0.36,
        color: 'black',
    },
    bold: {
        fontFamily: 'Dosis-Bold',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '600',
        lineHeight:22,
        letterSpacing: 0,
        color: 'black',
    },
    tini: {
        fontFamily: 'Dosis-Tini',
        fontStyle: 'normal',
        fontSize: 90,
        fontWeight: '300',
        letterSpacing: 1.8,
        color: 'black',
    },
});

