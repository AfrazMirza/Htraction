import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AllBtn = props => {
  return (
    <View style={{alignItems: 'center', marginTop: 15}}>
      <TouchableOpacity style={styles.AllBtnStyle} onPress={props.onTab}>
        <Text style={styles.text}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AllBtn;

const styles = StyleSheet.create({
  AllBtnStyle: {
    borderRadius: 10,
    width: '95%',
    backgroundColor: '#FA4616',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // marginVertical: 10
  },
  text: {
    color: '#FFFFFF', fontSize: 16, fontWeight: '800'},
});
