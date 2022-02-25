import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#c2fff9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 16
  }
});

export default function TaskItem({task}) {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewTask', {taskId: task.id})}
        >
          <Text>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditTask', {taskId: task.id})}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DeleteTask', {taskId: task.id})}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
