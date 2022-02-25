import React, {useEffect, useState} from 'react';
import {View, Alert, StyleSheet, TextInput, Text} from 'react-native';
import Button from '#/components/ui/Button';
import {updateTask as updateTaskInDatabase, getTask} from '#/utils/db';

function EditTask({navigation, route}) {
  const {taskId} = route.params;
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchDatabase() {
        const taskFromDatabase = await getTask(taskId);
        if (taskFromDatabase === null) {
          setError('Task not found');
          return;
        }
        setTask(taskFromDatabase);
        setTitle(taskFromDatabase.title);
      }
      if (taskId) {
        fetchDatabase();
      }
    },
    [taskId]
  );

  function handleTaskTitleChange(text) {
    setTitle(text);
  }

  async function editTask() {
    try {
      await updateTaskInDatabase(taskId, title);
      Alert.alert(
        'Success',
        'Task edited successfully',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Home')
          }
        ],
        {cancelable: false}
      );
      setError(null);
      setTask({
        id: taskId,
        title
      });
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <View style={styles.container}>
      {task && (
        <View style={styles.form}>
          <Text style={styles.title}>{task.title}</Text>
          <TextInput onChangeText={handleTaskTitleChange} style={styles.textInput} value={title} />
          <Button title="Edit task" onPress={editTask} />
        </View>
      )}
      {error !== null && (
        <View>
          <Text>{error}</Text>
        </View>
      )}
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
    borderColor: '#EAB83E',
    borderWidth: 1
  },
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default EditTask;
