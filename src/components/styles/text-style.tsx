import React from 'react';
import {StyleSheet, Text, TextStyle} from "react-native";
import {styles} from "./styles";

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





