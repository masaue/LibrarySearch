import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

import {RootStackParamList} from 'src/Navigator';

type LibraryDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'LibraryDetails'
>;

type Props = {
  route: LibraryDetailsScreenRouteProp;
};

export const LibraryDetailsScreen = ({route}: Props) => {
  const {library} = route.params;
  return (
    <>
      <Text>{library.formal}</Text>
      <Text>{library.address}</Text>
    </>
  );
};
