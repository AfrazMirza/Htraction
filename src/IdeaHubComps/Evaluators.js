import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Evaluators = () => {
  const Profile = () => {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
        <Image
          style={styles.containerImg}
          source={require('../../assets/Ron.png')}
        />
        <View>
          <View style={styles.container2}>
            <Text style={styles.txt}>Jeff Bezoz</Text>
            <Text style={[styles.txt1, {color: '#747474', paddingLeft: 25, borderLeftColor: '#DBD6D6', borderLeftWidth: 0.5}]}>Mentor</Text>
          </View>
          <Text style={[styles.txt1, {color: '#747474'}]}>jeff@yopmail.com</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.profileView}>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </View>
  );
};

export default Evaluators;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC5B5',
    marginBottom: 10,
  },
  containerImg: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 12,
    fontWeight: '500',
    paddingRight: 20
  },
  txt1: {
    fontSize: 10,
    fontWeight: '500',
    color: '#747474',
  },
  profileView: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
