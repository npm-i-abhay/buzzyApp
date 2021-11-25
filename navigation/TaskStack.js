import React, { useState, useEffect,useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskboardScreen from '../screens/TaskboardScreen '
import TaskCreatingScreen from "../screens/TaskCreatingScreen"
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { Configurations } from '../PropConfig/Props'
import DashboardScreen from '../screens/DashboardScreen';
import AgendaScreen from '../screens/AgendaScreen';
import CourseInfoScreen from '../screens/CourseInfoScreen';
import GroupHomeScreen from '../screens/GroupHomeScreen';
import AllChats from '../screens/AllChatsScreen';
import SingleChatThread from '../screens/SingleChatThreadScreen';
import AllGroupsScreen from '../screens/AllGroupsScreen';
import ScheduleMeetingScreen from '../screens/ScheduleMeetingScreen' 
import MembersScheduleScreen from '../screens/MembersScheduleScreen';
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList, DrawerItem,DrawerActions } from '@react-navigation/drawer';
import LogoutScreen from '../screens/LogoutScreen';
import AccountScreen from '../screens/AccountScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import JoinGroupScreen from '../screens/JoinGroupScreen';
import ScheduleMeetingStepOneScreen from '../screens/ScheduleMeetingStepOne';
import ScheduleMeetingStepTwoScreen from '../screens/ScheduleMeetingStepTwo';
import ScheduleMeetingStepThreeScreen from '../screens/ScheduleMeetingStepThree';
import ScheduleMeetingStepFourScreen from '../screens/ScheduleMeetingStepFour';
import ScheduleMeetingStepFiveScreen from '../screens/ScheduleMeetingStepFive';
import { useNavigation } from '@react-navigation/native';
import {Entypo} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Taskboard() {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        drawerPosition: "right",
      }}>
      <Drawer.Screen name='Back' component={TaskboardScreen} />
      <Drawer.Screen name='Course' component={CourseInfoScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
function Dashboard() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name='Back' component={DashboardScreen} />
      <Drawer.Screen name='Course' component={CourseInfoScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

function AllGroups() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        drawerPosition: "right",
      }}>
      <Drawer.Screen name='Back' component={AllGroupsScreen} />
      <Drawer.Screen name='Course' component={CourseInfoScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}


export default function TaskboardStack() {
  const navigation = useNavigation();
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);

  })
  if (load === true) {
    return (
      <View style={styles.container}>
        <LottieView
          ref={(ref) => {
            anim = ref
          }}
          style={{
            width: 350,
            height: 350,
            backgroundColor: '#fff',
          }}
          source={require('../assets/welcome.json')}
          autoPlay={true}
        />
        <Text style={styles.title}><Text style={styles.title1}>Welcom to BuzzyBee</Text>
        </Text>
      </View>
    )
  }
  
  return (
    <Stack.Navigator initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: Configurations.colors.secCol, },
        headerTitleAlign: 'center',
        headerTintColor: '#fff', headerTitleStyle: {
          fontSize: 30
        },
        
        headerRight: () => (
         
          <TouchableOpacity onPress={() => alert('Swide left')}>
            <Entypo name="menu" size={30} color="lightgrey"/>
          </TouchableOpacity>
        ),
      }}
    >
      {/* dashboard flow */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="AllGroups" component={AllGroups} />
      <Stack.Screen name="GroupHome" component={GroupHomeScreen} />
      <Stack.Screen name="SingleChatThread" component={SingleChatThread} />
      <Stack.Screen name="AllChats" component={AllChats} />
      {/* <Stack.Screen name="MembersSchedule" component={MembersScheduleScreen} /> */}
      {/* dashboard flow ends */}
      {/* Taskmamagement schedules */}
      <Stack.Screen name='Taskboard' component={Taskboard} />
      <Stack.Screen name="TaskCreating" component={TaskCreatingScreen} />


      {/* Course Info */}
      <Stack.Screen name="CourseInfo" component={CourseInfoScreen} />


      {/* Taskmamagement schedules */}
      {/* Other group flows */}
      {/* join or create a group */}
      <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
      <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
      {/* Members schedules */}
      <Stack.Screen name="MembersSchedule" component={MembersScheduleScreen} />
      
      {/* Schedule meeting flow */}
      <Stack.Screen name="ScheduleMeetingStepOne" component={ScheduleMeetingStepOneScreen} />
      <Stack.Screen name="ScheduleMeetingStepTwo" component={ScheduleMeetingStepTwoScreen} />
      <Stack.Screen name="ScheduleMeetingStepThree" component={ScheduleMeetingStepThreeScreen} />
      <Stack.Screen name="ScheduleMeetingStepFour" component={ScheduleMeetingStepFourScreen} />
      <Stack.Screen name="ScheduleMeetingStepFive" component={ScheduleMeetingStepFiveScreen} />
      
      
      {/* Other group flows */}
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title1: {
    width: '100%',
    color: Configurations.colors.secCol,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '400'
  },
  title2: {
    width: '100%',
    color: Configurations.colors.primCol,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '400'
  },
});