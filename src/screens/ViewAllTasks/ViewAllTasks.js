import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {getTasks as getTasksFromDatabase} from '#/utils/db';
import TaskItem from './TaskItem';

function renderTaskItem({item}) {
  return <TaskItem task={item} />;
}

function ViewAllTasks() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchDatabase() {
      try {
        const taskFromDatabase = await getTasksFromDatabase();
        setTasks(taskFromDatabase);
      } catch (e) {
        setError(`An error occurred getting the tasks: ${e.message}`);
      }
    }
    fetchDatabase();
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={tasks} renderItem={renderTaskItem} keyExtractor={(item) => item.id} />;
}

export default ViewAllTasks;
