import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export type SpaceCraftItemProps = {
    launcher:{
        id: string;
    }
}

const LauncherItem = (props: SpaceCraftItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.launcher.id}</Text>
        </View>
    );
};

export default LauncherItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#334756",
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowOpacity: 0.5,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset:{
            height: 5,
            width: 5
        },
        marginTop: 20,
        padding: 10

    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#F0A500",

    }
});
