import React, {useEffect} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {initDatabase} from '#/utils/db';

function HomeScreen({navigation}) {
  useEffect(function () {
    initDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Text style={styles.title}>SQLite</Text>
        <Button title="View all tasks" onPress={() => navigation.navigate('ViewAllTasks')} />
        <Button title="Create task" onPress={() => navigation.navigate('CreateTask')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  buttons: {flex: 1},
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default HomeScreen;
