import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddQuestionScreen,
  CreateQuizScreen,
  HomeScreen,
  PlayQuizScreen,
} from '../screens';
import Filterscreen_Beginner from '../screens/FilterScreens/Filterscreen_Beginner';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const FilterBeginnerStackNavigator = () => {
  return (
<NavigationContainer independent={true}>
<Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FilterBeginnerScreen" component={Filterscreen_Beginner} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default FilterBeginnerStackNavigator;
