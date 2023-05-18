import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AppStackNavigator from './AppStackNavigator';
import FilterCSStackNavigator from './FilterCSStackNavigator';
import TestScreen from '../screens/TestScreen';
import Filterscreen_CS from '../screens/FilterScreens/Filterscreen_CS';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import FilterComArchStackNavigator from './FilterComArchStackNavigator';
import FilterDataStackNavigator from './FilterDataStackNavigator';
import FilterAiStackNavigator from './FilterAiStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={AppStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name='home-outline' size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={TestScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={TestScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Filter : Programming"
        component={FilterCSStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="funnel-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Filter : Comp.Theory"
        component={FilterComArchStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="funnel-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Filter : Data & Querrying"
        component={FilterDataStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="funnel-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Filter : AI & ML"
        component={FilterAiStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="funnel-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
