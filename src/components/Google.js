import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Google = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.googleImg}
          source={require('../../assets/google.png')}
        />
        <Text style={styles.text}>
          Sign with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Google;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DBD6D6',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
  googleImg: {width: 26, height: 27, marginRight: 10},
  text: {color: '#333333', fontWeight: '500'},
});
