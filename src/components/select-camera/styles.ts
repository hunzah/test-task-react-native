import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    root: {
        position: 'relative',
    },

    select: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 327,
        height: 60,
        paddingRight: 12,
        paddingLeft: 16,
        borderRadius: 10,
        backgroundColor: 'rgba(236,228,222,0.71)',
        marginTop: 7,
    },
    rotatedIcon: {
        transform: [{rotate: '180deg'}],
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: 300,
        height: 400,
        borderRadius: 10,
        backgroundColor: '#DCCEBE',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#DCCEBE',
        borderRadius: 10,
        padding: 16,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
});