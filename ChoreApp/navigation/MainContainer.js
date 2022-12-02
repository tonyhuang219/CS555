import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Dimensions, Text, Button, ToastAndroid } from "react-native";


// Screens
import Task from './screens/Tasks';
import TaskAdd from './screens/taskAdd';
import signup from './screens/signup';
import SettingsScreen from './screens/SettingsScreen';
import CalendarScreen from './screens/CalendarScreen';
import AchievementScreen from './screens/AchievementScreen';
import login from './screens/login';
import childlogin from './screens/childlogin';
import ChildCode from './screens/ChildCode';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const CalendarName = "Calendar";
const TaskAddName = "Add Task";
const AchievementName = "Achievement";
const parentLogin = "Login demo";
const childLogin = "Child Login demo";

const Tab = createBottomTabNavigator();

const TaskStack = createStackNavigator();

const TaskNavigator = () => {
  return(
    <TaskStack.Navigator screenOptions={{headerShown:false}}>
      <TaskStack.Screen name="Task" component= {Task}/>
      <TaskStack.Screen name="TaskAdd" component= {TaskAdd}/>
    </TaskStack.Navigator>
  )
}

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUserType } from '../backend/firebase';

let type = "parent";
  //delete this
  const auth = getAuth();
  onAuthStateChanged(auth, ( user) => {
    async function main(){
      type= await getUserType(user.uid);
    }
    main();
  })
  //delete 


export function AuthStack(){
  //should be determined by login
    return (<NavigationContainer>
      <Tab.Navigator
        initialRouteName={parentLogin}

        tabBarOptions={{
          activeTintColor: '#42bcf5',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={detailsName} component={signup} />
        <Tab.Screen name={parentLogin} component={login} />
        <Tab.Screen name={childLogin} component={childlogin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export function ChildContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        
        tabBarOptions={{
          activeTintColor: '#42bcf5',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={TaskNavigator} />
        <Tab.Screen name={CalendarName} component={CalendarScreen} />
        <Tab.Screen name={AchievementName} component={AchievementScreen} />
        <Tab.Screen name={parentLogin} component={login} />
        <Tab.Screen name={childLogin} component={childlogin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (rn === CalendarName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (rn === AchievementName) {
              iconName = focused ? 'Trophy' : 'md-trophy-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#42bcf5',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={TaskNavigator} />
        <Tab.Screen name={detailsName} component={ChildCode} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={CalendarName} component={CalendarScreen} />
        <Tab.Screen name={AchievementName} component={AchievementScreen} />
        <Tab.Screen name={parentLogin} component={login} />
        <Tab.Screen name={childLogin} component={childlogin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
