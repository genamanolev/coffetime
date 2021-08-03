import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, otherStyles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { ...otherStyles }]}
      activeOpacity={0.5}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    fontFamily: 'SF-UI-Text-Regular',
    fontSize: 18,
    color: '#fff',
  },
});

export default CustomButton;
