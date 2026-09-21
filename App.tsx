import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import api from './src/services/api';
import Filmes from './src/filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
    }
    loadFilmes()
  }, []);

  // useEffect(() => {
  //   api.get('filmes').then((response) => {
  //     setFilmes(response.data);
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Filmes data={item}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
