import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
            {/* centre name */}
            <Text style={styles.name}>
                {props.centre.name}
            </Text>
            {/* place */}
            <Text style={styles.place}>
                {props.centre.Place}
            </Text>
            {/* state name */}
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

    },
    place:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#512B58",
        marginTop: 10
    },
    state:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FE346E",
        marginTop: 10

    }
});
