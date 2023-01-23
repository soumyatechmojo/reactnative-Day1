import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import data from './Data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


//data
// internal data(static data) 
// API's - fetch/axios - useEffect
// local resource data.json



const FlatListDemo= () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListDemo