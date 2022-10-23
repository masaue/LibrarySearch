import React, {useState} from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {useLibraries} from 'src/features/calil/api/getLibraries';
import {Library} from 'src/features/calil/types/library';

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
  prefecture: string;
};

export const LibraryList = ({prefecture}: LibraryListProps) => {
  const [selectedLibId, setSelectedLibId] = useState('');
  const librariesQuery = useLibraries({prefecture});

  if (librariesQuery.isLoading) {
    return <Text>Now Loading...</Text>;
  }

  if (!librariesQuery?.data?.length) {
    return <Text>No Library Found</Text>;
  }
  const renderItem = ({item}: {item: Library}) => {
    const backgroundColor =
      item.libid === selectedLibId ? '#6e3b6e' : '#f9c2ff';
    const color = item.libid === selectedLibId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedLibId(item.libid)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <FlatList
      data={librariesQuery.data}
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
