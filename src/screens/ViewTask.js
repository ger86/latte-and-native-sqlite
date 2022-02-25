import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getTask} from '#/utils/db';

function ViewTask({route}) {
  const {taskId} = route.params;
  const [task, setTask] = useState(null);
  const [error, setError] = useState();

  useEffect(
    function () {
      async function fetchDatabase() {
        const taskFromDatabase = await getTask(taskId);
        if (taskFromDatabase === null) {
          setError('Task not found');
          return;
        }
        setTask(taskFromDatabase);
      }
      fetchDatabase();
    },
    [taskId]
  );

  return (
    <View style={styles.container}>
      {task && (
        <View style={styles.form}>
          <Text style={styles.label}>Title: {task.title}</Text>
        </View>
      )}
      {error && <View>{error}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  form: {flex: 1},
  label: {marginBottom: 5},
  textInput: {
    padding: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    borderColor: '#007FFF',
    borderWidth: 1
  }
});

export default ViewTask;
