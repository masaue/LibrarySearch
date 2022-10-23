import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';

import {useLibraries} from 'src/features/calil/api/getLibraries';
import {Library} from 'src/features/calil/types/library';

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

type LibraryListProps = {
  prefecture: string;
};

export const LibraryList = ({prefecture}: LibraryListProps) => {
  const librariesQuery = useLibraries({prefecture});

  if (librariesQuery.isLoading) {
    return <Text>Now Loading...</Text>;
  }

  if (!librariesQuery?.data?.length) {
    return <Text>No Library Found</Text>;
  }
  const renderItem = ({item}: {item: Library}) => <Item title={item.formal} />;

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
