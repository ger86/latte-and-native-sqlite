import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({onPress, title}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#EAB83E',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
});
