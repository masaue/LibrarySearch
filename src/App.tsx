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
  // Button,
  SafeAreaView,
  StatusBar,
  // TextInput,
  useColorScheme,
} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {queryClient} from 'src/lib/react-query';
import Navigator from 'src/Navigator';

const App = () => {
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
      </SafeAreaView>
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;
