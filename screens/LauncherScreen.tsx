import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, {useEffect, useState} from "react";
import axios from "axios";
import CentresItem from "../components/CentresItem";
import SpaceCraftItem from "../components/SpaceCraftItem";
import LauncherItem from "../components/LauncherItem";

export default function LauncherScreen() {
    const [launchers,setLaunchers] = useState([]);

    const getSpaceCrafts = () => {
        axios.get('https://isro.vercel.app/api/launchers')
            .then((response) => {
                // handle success

                setLaunchers(response.data.launchers);

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
        getSpaceCrafts();
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={launchers}
                renderItem={({item})=> <LauncherItem launcher={item}/>}
                keyExtractor={item=>item.id}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});
