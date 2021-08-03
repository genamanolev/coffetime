import React from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';

import { listCafes } from '../data/listCafes';
import CardCafe from '../components/CardCafe';

const ListCafesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listCafes}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardCafe
            name={item.name}
            imageOutside={item.photoOutside}
            address={item.address}
            item={item}
            onPress={() => navigation.navigate('CafeDetailScreen', item)}
          />
        )}
        ListHeaderComponent={
          <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Button title='Посмотреть на карте' />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListCafesScreen;
