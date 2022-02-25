import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateTask from './screens/CreateTask';
import EditTask from './screens/EditTask';
import ViewTask from './screens/ViewTask';
import ViewAllTasks from './screens/ViewAllTasks';
import DeleteTask from './screens/DeleteTask';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#EAB83E'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home'
          }}
        />
        <Stack.Screen
          name="ViewTask"
          component={ViewTask}
          options={{
            title: 'View task'
          }}
        />
        <Stack.Screen
          name="ViewAllTasks"
          component={ViewAllTasks}
          options={{
            title: 'View tasks'
          }}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTask}
          options={{
            title: 'Edit task'
          }}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTask}
          options={{
            title: 'Create task'
          }}
        />
        <Stack.Screen
          name="DeleteTask"
          component={DeleteTask}
          options={{
            title: 'Delete task'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
