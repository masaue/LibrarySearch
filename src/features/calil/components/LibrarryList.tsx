import React, {useState} from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {Library} from 'src/features/calil/types';
import {LibrariesScreenNavigationProp} from 'src/screens/LibrariesScreen';

type ItemProps = {
  item: Library;
  onPress: () => void;
  backgroundColor: {backgroundColor: string};
  textColor: {color: string};
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.formal}</Text>
  </TouchableOpacity>
);

type LibraryListProps = {
  libraries: Library[];
  navigation: LibrariesScreenNavigationProp;
};

export const LibraryList = ({navigation, libraries}: LibraryListProps) => {
  const [selectedLibId, setSelectedLibId] = useState('');

  if (libraries.length === 0) {
    return <Text>No Data</Text>;
  }
  const renderItem = ({item}: {item: Library}) => {
    const backgroundColor =
      item.libid === selectedLibId ? '#6e3b6e' : '#f9c2ff';
    const color = item.libid === selectedLibId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedLibId(item.libid);
          navigation.navigate('LibraryDetails', {library: item});
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <FlatList
      data={libraries}
      renderItem={renderItem}
      keyExtractor={item => item.libid}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
