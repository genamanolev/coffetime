import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListCafesScreen from '../screens/ListCafesScreen';
import MapScreen from '../screens/MapScreen';
import LoginScreen from '../screens/LoginScreen';
import CafeDetailScreen from '../screens/CafeDetailScreen';

import colors from '../../assets/colors/colors';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const AppNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          title: 'CoffeTime',
          headerTitleStyle: {
            fontFamily: 'Lobster-Regular',
            fontSize: 22,
            color: colors.textBlack,
            alignSelf: 'center',
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
          },
        }}
        initialRouteName='LoginScreen'
      >
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='ListCafesScreen' component={ListCafesScreen} />
        <Stack.Screen name='MapScreen' component={MapScreen} />
        <Stack.Screen
          name='CafeDetailScreen'
          component={CafeDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
