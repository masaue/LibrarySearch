/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  useColorScheme,
} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {getLibraries} from 'src/features/calil/api/getLibraries';
import {LibraryList} from 'src/features/calil/components/LibrarryList';
import {queryClient} from 'src/lib/react-query';

const App = () => {
  const [prefecture, setPrefecture] = React.useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
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
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
