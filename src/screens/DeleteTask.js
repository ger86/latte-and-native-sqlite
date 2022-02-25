import React, {useEffect, useState} from 'react';
import {Text, View, Alert, StyleSheet} from 'react-native';
import Button from '#/components/ui/Button';
import {deleteTask as deleteTaskFromDatabase, getTask} from '#/utils/db';

function DeleteTask({navigation, route}) {
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

  async function deleteTask() {
    await deleteTaskFromDatabase(taskId);
    Alert.alert(
      'Success',
      'Task deleted successfully',
      [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Home')
        }
      ],
      {cancelable: false}
    );
  }

  return (
    <View style={styles.container}>
      {task && (
        <View style={styles.form}>
          <Text style={styles.label}>Confirm delete task: {task.title}</Text>
          <Button title="Delete task" onPress={deleteTask} />
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

export default DeleteTask;
