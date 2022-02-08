import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, {useEffect, useState} from "react";
import axios from "axios";
import CentresItem from "../components/CentresItem";
import SpaceCraftItem from "../components/SpaceCraftItem";
import LauncherItem from "../components/LauncherItem";
import CustomerSatelliteItem from "../components/CustomerSatelliteItem";

export default function CustomerSatelliteScreen() {
    const [satellites,setSatellites] = useState([]);

    //get all satellites
    const getSatellites = () => {
        axios.get('https://isro.vercel.app/api/customer_satellites')
            .then((response) => {
                // handle success

                setSatellites(response.data.customer_satellites);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(()=>{
        getSatellites();
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            {/* list of satellites */}
            <FlatList
                data={satellites}
                renderItem={({item})=> <CustomerSatelliteItem satellite={item}/>}
                keyExtractor={item=>item.id}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
