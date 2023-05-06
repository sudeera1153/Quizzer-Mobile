import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddQuestionScreen,
  CreateQuizScreen,
  HomeScreen,
  PlayQuizScreen,
} from '../screens';
import Filterscreen_CS from '../screens/FilterScreens/Filterscreen_CS';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const FilterCSStackNavigator = () => {
  return (
<NavigationContainer independent={true}>
<Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FilterCSScreen" component={Filterscreen_CS} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default FilterCSStackNavigator;
