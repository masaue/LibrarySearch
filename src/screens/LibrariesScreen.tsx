import React from 'react';
import {Button, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {getLibraries} from 'src/features/calil/api/getLibraries';
import {LibraryList} from 'src/features/calil/components/LibrarryList';

export const LibrariesScreen = () => {
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
      <LibraryList prefecture={prefecture} />
    </>
  );
};
