import {FlatList, ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, {useEffect, useState} from "react";
import axios from "axios";
import CentresItem from "../components/CentresItem";

export default function CentreScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const [centres,setCentres] = useState([]);

  //  get all centres
  const getCentres = () => {
    axios.get('https://isro.vercel.app/api/centres')
        .then((response) => {
          // handle success

          setCentres(response.data.centres);
          console.log(centres);
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
      getCentres();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
        {/* list of centres */}
        <FlatList
            data={centres}
            renderItem={({item})=> <CentresItem centre={item}/>}
            keyExtractor={item=>item.id}
        />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image:{
    flex: 1,

  },
});
