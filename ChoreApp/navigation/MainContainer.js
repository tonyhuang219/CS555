import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import TaskAdd from './screens/taskAdd';
import signup from './screens/signup';
import SettingsScreen from './screens/SettingsScreen';
import CalendarScreen from './screens/CalendarScreen';
import AchievementScreen from './screens/AchievementScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const CalendarName = "Calendar";
const AchievementName = "Achievement"

const Tab = createBottomTabNavigator();

function MainContainer() {
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

        <Tab.Screen name={homeName} component={TaskAdd} />
        <Tab.Screen name={detailsName} component={signup} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={CalendarName} component={CalendarScreen} />
        <Tab.Screen name={AchievementName} component={AchievementScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;