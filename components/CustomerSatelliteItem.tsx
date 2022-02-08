import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export type CustomerSatelliteItemProps = {
    satellite:{
        id	: string;
        country	: string;
        launch_date	: string;
        mass: string;
        launcher: string;
    }
}

const CustomerSatelliteItem = (props: CustomerSatelliteItemProps) => {

    const { id,country,launch_date,mass,launcher} = props.satellite;

    return (
        <View style={styles.container}>
            {/*id*/}
            <Text style={styles.heading}>
                Id:{'\u00A0'}
                <Text style={styles.data}>{id}</Text>
            </Text>
            {/*country*/}
            <Text style={styles.heading}>
                Country:{'\u00A0'}
                <Text style={styles.data}>{country}</Text>
            </Text>
            {/*launch date*/}
            <Text style={styles.heading}>
                Launch Date:{'\u00A0'}
                <Text style={styles.data}>{launch_date}</Text>
            </Text>
            {/*mass*/}
            <Text style={styles.heading}>
                Mass:{'\u00A0'}
                <Text style={styles.data}>{mass}</Text>
            </Text>
            {/*launcher*/}
            <Text style={styles.heading}>
                Launcher:{'\u00A0'}
                <Text style={styles.data}>{launcher}</Text>
            </Text>
        </View>
    );
};

export default CustomerSatelliteItem;

const styles = StyleSheet.create({
    container: {
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
        padding: 20

    },
    heading:{
        marginTop: 5,
        fontSize: 17,
        color: "#FE346E"
    },
    data: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#2C003E",
    }

});
