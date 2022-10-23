import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

/*
import BlockScreen from './screens/BlockScreen';
import WebScreen from './screens/WebScreen';
 */
import {LibrariesScreen} from 'src/screens/LibrariesScreen';

export type Bounds = {
  origin: {x: number; y: number};
  size: {height: number; width: number};
};

export type RootStackParamList = {
  Libraries: undefined;
};

export default class Navigator extends React.Component {
  render() {
    const Stack = createNativeStackNavigator();

    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Libraries"
            screenOptions={{headerShown: false}}>
            <Stack.Screen component={LibrariesScreen} name="Libraries" />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
