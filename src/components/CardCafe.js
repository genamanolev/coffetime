import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

const CardCafe = ({ name, imageOutside, address, onPress }) => {
  return (
    <View style={styles.cardWrapper}>
      <Image source={imageOutside} style={styles.image} />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleName}>{name}</Text>
        <Text style={styles.titleLocation}>мы находимся:</Text>
        <Text style={styles.titleAddress}>{address}</Text>
      </View>

      <TouchableOpacity style={styles.detailWrapper} onPress={onPress}>
        <Text style={styles.detailText}>подробнее</Text>
        <AntDesign name='right' color='#BBBBBB' size={10} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    width: width,
    height: 130,
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: width * 0.33,
    height: width * 0.33,
  },
  titleWrapper: {
    marginLeft: 15,
    marginTop: 15,
  },
  titleName: {
    fontSize: 20,
    fontFamily: 'SF-UI-Text-Bold',
    color: '#C8D9AF',
    marginBottom: 10,
  },
  titleLocation: {
    fontSize: 14,
    fontFamily: 'SF-UI-Text-Light',
    color: '#717171',
  },
  titleAddress: {
    fontSize: 16,
    fontFamily: 'SF-UI-Text-Regular',
    color: '#717171',
  },
  detailWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'SF-UI-Text-Light',
    color: '#BBB',
    marginRight: 10,
  },
});

export default CardCafe;
