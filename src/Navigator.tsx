import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Library} from 'src/features/calil/types';
import {LibrariesScreen} from 'src/screens/LibrariesScreen';
import {LibraryDetailsScreen} from 'src/screens/LibraryDetailsScreen';

export type Bounds = {
  origin: {x: number; y: number};
  size: {height: number; width: number};
};

export type RootStackParamList = {
  Libraries: undefined;
  LibraryDetails: {library: Library};
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
            {/* TODO fix problems */}
            <Stack.Screen
              component={LibraryDetailsScreen}
              name="LibraryDetails"
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
