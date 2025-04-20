import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen2 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
    </View>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 184,
    height: 35,
  },
});
