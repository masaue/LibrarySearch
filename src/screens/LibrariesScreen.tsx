import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {RootStackParamList} from 'src/Navigator';
import {getLibraries} from 'src/features/calil/api/getLibraries';
import {LibraryList} from 'src/features/calil/components/LibrarryList';

export type LibrariesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Libraries'
>;

type Props = {
  navigation: LibrariesScreenNavigationProp;
};

export const LibrariesScreen = ({navigation}: Props) => {
  const [prefecture, setPrefecture] = React.useState('');

  return (
    <>
      <TextInput
        onChangeText={setPrefecture}
        value={prefecture}
        placeholder="都道府県"
      />
      <Button
        color={Colors.blue}
        onPress={async () => {
          await getLibraries(prefecture);
        }}
        title="call calil library"
      />
      <LibraryList navigation={navigation} prefecture={prefecture} />
    </>
  );
};
