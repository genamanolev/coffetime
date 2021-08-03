import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../assets/colors/colors';
import CustomButton from '../components/CustomButton';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [registration, setRegistration] = useState(false);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode='cover'
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['rgba(0,0,0,0.00) 0%', 'rgba(243,233,216,0.79) 88%']}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Header Title */}
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>CoffeTime</Text>
              <View style={styles.subTitleWrapper}>
                <Text style={styles.subTitle}>территория кофе</Text>
              </View>
            </View>

            {registration ? (
              <>
                <View style={styles.buttonsWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder='Введите имя'
                    placeholderTextColor={colors.textWhite}
                    fontSize={18}
                    fontFamily='SF-UI-Text-Light'
                  />
                  <CustomButton
                    title='Далее'
                    otherStyles={{ backgroundColor: colors.green }}
                    onPress={() => setRegistration(false)}
                  />
                </View>
              </>
            ) : (
              <>
                {/* Buttons */}
                <View style={styles.buttonsWrapper}>
                  <CustomButton
                    title='Войти через Facebook'
                    otherStyles={{
                      backgroundColor: colors.blue,
                      marginBottom: 20,
                    }}
                    onPress={() => navigation.replace('ListCafesScreen')}
                  />
                  <CustomButton
                    title='Регистрация'
                    otherStyles={{ backgroundColor: colors.green }}
                    onPress={() => setRegistration(true)}
                  />
                </View>
              </>
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  titleWrapper: {
    marginTop: height * 0.15,
  },
  title: {
    fontSize: 64,
    color: colors.textWhite,
    fontFamily: 'Lobster-Regular',
  },
  subTitle: {
    fontSize: 16,
    color: colors.textWhite,
    fontFamily: 'SF-UI-Text-Light',
  },
  subTitleWrapper: {
    alignItems: 'flex-end',
    marginTop: -15,
    marginRight: 8,
  },
  buttonsWrapper: {
    marginBottom: height * 0.15,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.28)',
    marginBottom: 20,
  },
});

export default LoginScreen;
