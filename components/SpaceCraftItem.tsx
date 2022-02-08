import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export type SpaceCraftItemProps = {
    spaceCraft:{
        id: string;
        name: string;
    }
}

const SpaceCraftItem = (props: SpaceCraftItemProps) => {
    return (
        <View style={styles.container}>
            {/* name */}
            <Text style={styles.name}>
                {props.spaceCraft.name}
            </Text>
        </View>
    );
};

export default SpaceCraftItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowOpacity: 0.5,
        elevation: 10,
        shadowColor: "#512B58",
        shadowOffset:{
            height: 5,
            width: 5
        },
        marginVertical: 15,
        padding: 10

    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#2C003E",

    }
});
