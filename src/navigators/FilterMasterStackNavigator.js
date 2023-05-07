import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddQuestionScreen,
  CreateQuizScreen,
  HomeScreen,
  PlayQuizScreen,
} from '../screens';
import Filterscreen_Master from '../screens/FilterScreens/Filterscreen_Master';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const FilterMasterStackNavigator = () => {
  return (
<NavigationContainer independent={true}>
<Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FilterProScreen" component={Filterscreen_Master} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default FilterMasterStackNavigator;
