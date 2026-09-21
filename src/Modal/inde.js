import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Detalhes() {
  return (
    <View style={styles.modalContainer}>

      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar}>
          <Text style={{color: '#fff', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
})