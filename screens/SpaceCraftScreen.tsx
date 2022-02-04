import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, {useEffect, useState} from "react";
import axios from "axios";
import CentresItem from "../components/CentresItem";
import SpaceCraftItem from "../components/SpaceCraftItem";

export default function SpaceCraftScreen() {
  const [spaceCrafts,setSpaceCrafts] = useState([]);

  const getSpaceCrafts = () => {
    axios.get('https://isro.vercel.app/api/spacecrafts')
        .then((response) => {
          // handle success

          setSpaceCrafts(response.data.spacecrafts);

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
          data={spaceCrafts}
          renderItem={({item})=> <SpaceCraftItem spaceCraft={item}/>}
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
