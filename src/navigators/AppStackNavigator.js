import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddQuestionScreen,
  CreateQuizScreen,
  HomeScreen,
  PlayQuizScreen,
} from '../screens';
import FilterBeginnerStackNavigator from './FilterBeginnerStackNavigator';
import FilterIntermidiateStackNavigator from './FilterIntermidiateStackNavigator';
import FilterProStackNavigator from './FilterProStackNavigator';
import FilterMasterStackNavigator from './FilterMasterStackNavigator';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const AppStackNavigator = () => {
  return (
<NavigationContainer independent={true}>
<Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
      <Stack.Screen name="FilterBeginner" component={FilterBeginnerStackNavigator} />
      <Stack.Screen name="FilterIntermidiate" component={FilterIntermidiateStackNavigator} />
      <Stack.Screen name="FilterPro" component={FilterProStackNavigator} />
      <Stack.Screen name="FilterMaster" component={FilterMasterStackNavigator} />
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default AppStackNavigator;
