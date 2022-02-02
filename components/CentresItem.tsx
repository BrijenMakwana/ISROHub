import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export type CentresItemProps = {
    centre:{
        id: string;
        name: string;
        Place: string;
        State: string;
    }
}

const CentresItem = (props: CentresItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.centre.name}</Text>
            <Text style={styles.place}>
                {props.centre.Place}
            </Text>
            <Text style={styles.state}>
                {props.centre.State}
            </Text>
        </View>
    );
};

export default CentresItem;

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

    },
    place:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
        marginTop: 10
    },
    state:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        marginTop: 10

    }
});
