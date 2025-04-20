import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SplashScreen2');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo1.png')} />
    </View>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA4616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 184,
    height: 35,
  },
});
