import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Messages = () => {
  return (
    <View style={{flex: 1,marginHorizontal: 10, marginVertical: 10}}>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Image
          style={{width: 35, height: 35, marginRight: 15}}
          source={require('../../assets/detailsImg.png')}
        />
        <View style={{width: '70%', gap: 5}}>
          <Text style={styles.msgTxt}>
            Lorem Ipsum is simply sadsaddummy text of the printing and types
          </Text>
          <Text style={styles.msgTime}>1:26</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5, alignSelf: 'flex-end'}}>
        <View style={{width: '70%', gap: 5}}>
          <Text style={styles.msgTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesett.
          </Text>
          <Text style={[styles.msgTime, {alignSelf: 'flex-end'}]}>1:26</Text>
        </View>
        <Image
          style={{width: 35, height: 35, marginLeft: 15}}
          source={require('../../assets/Ron1.png')}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Image
          style={{width: 35, height: 35, marginRight: 15}}
          source={require('../../assets/detailsImg.png')}
        />
        <View style={{width: '70%', gap: 5}}>
          <Text style={styles.msgTxt}>Lorem Ipsum is simply dummy text </Text>
          <Text style={styles.msgTxt}>Lorem Ipsum is simply </Text>
          <Text style={styles.msgTime}>1:30</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 5, alignSelf: 'flex-end'}}>
        <View style={{width: '70%', gap: 5}}>
          <Text style={[styles.msgTxt]}>Lorem Ipsum is simply dummy text</Text>
          <Text style={[styles.msgTxt]}>Lorem Ipsum is simply </Text>
          <Text style={[styles.msgTime, {alignSelf: 'flex-end'}]}>1:30</Text>
        </View>
        <Image
          style={{width: 35, height: 35, marginLeft: 15}}
          source={require('../../assets/Ron1.png')}
        />
      </View>
      {/* <View style={{flexDirection: 'row', marginVertical: 5, alignSelf: 'flex-end'}}>
        <Image
          style={{width: 35, height: 35, marginRight: 15}}
          source={require('../../assets/detailsImg.png')}
        />
        <View style={{width: '70%', gap: 5}}>
          <Image
            style={{width: 199, height: 93}}
            source={require('../../assets/paintings.png')}
          />
        </View>
        
      <Text style={[styles.msgTime]}>1:30</Text>
      </View> */}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  msgTxt: {
    fontSize: 12,
    fontWeight: '500',
    paddingVertical: 6.5,
    paddingHorizontal: 10,
    borderColor: '#FEC7B9',
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    color: '#5C5C5C',
  },
  msgTime: {fontSize: 9, fontWeight: '400',}
});
