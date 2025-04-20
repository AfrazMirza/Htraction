import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NotificationComp1 = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          paddingHorizontal: 10,
        //   paddingRight: 10,
          paddingVertical: 10,
          borderBottomColor: '#ECECEC',
          borderBottomWidth: 1,
        }}>
        <Image
          style={{
            width: 54,
            height: 54,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: '#FA4616',
          }}
          source={require('../../assets/Ron1.png')}
        />

        <View style={{paddingHorizontal: 10}}>
          <View
            style={{
              width: '85%' ,
              // backgroundColor: 'lime',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', fontSize: 14}}>Kumar Rohit</Text>
            <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
              12:47 AM
            </Text>
          </View>
          <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
            Lorem Ipsum is a dummy text of the printing and typesetting industry
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationComp1;

const styles = StyleSheet.create({});
