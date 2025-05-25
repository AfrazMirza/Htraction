import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Btns = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn1}>
        <Text style={styles.txt1}>
          Latest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn2}>
        <Text style={styles.txt2}>
          Trending
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn3}>
        <Text style={styles.txt3}>
          Announcement
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center'}}> 
        <Text style={{color: '#9D9B9A'}}>--------------</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center'}}>
        <Image
          style={{width: 14, height: 14}}
          source={require('../../assets/reverse.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Btns;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  btn1: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBD6D6',
    gap: 5,
    // width: 85,
    // height: 27,
    // justifyContent: 'center',ss
    paddingHorizontal: 9,
    paddingVertical: 6.5,
    backgroundColor: '#FFE5D5',
  },
  btn2: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBD6D6',
    gap: 5,
    // width: 85,
    // height: 27,
    // justifyContent: 'center',ss
    paddingHorizontal: 9,
    paddingVertical: 6.5,
  },
  btn3: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBD6D6',
    gap: 5,
    // width: 85,
    // height: 27,
    // justifyContent: 'center',ss
    paddingHorizontal: 9,
    paddingVertical: 6.5,
  },
  txt1: {fontSize: 11, fontWeight: '600', color: '#FA4616'},
  txt2: {fontSize: 11, fontWeight: '600', color: '#706F6E'},
  txt3: {fontSize: 11, fontWeight: '600', color: '#706F6E'},
});
