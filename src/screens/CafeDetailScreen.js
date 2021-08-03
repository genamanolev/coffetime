import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CafeDetailScreen = ({ route }) => {
  const item = route.params;

  return (
    <View>
      <View style={{ width: '100%', height: 300 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['#6e45e2', '#88d3ce']}
          style={{ flex: 1 }}
        >
          <Image
            source={item.photoInside}
            style={{ width: '100%', height: '100%' }}
            resizeMode='cover'
          />
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CafeDetailScreen;
