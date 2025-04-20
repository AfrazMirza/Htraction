import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Tabs from '../HomeComponents/Tabs';
import {ScrollView} from 'react-native-gesture-handler';
import ProgramDetailsTabs from '../HomeComponents/ProgramDetailsTabs';

const ProgramDetails = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../assets/arrowleft.png')}
          />
        </TouchableOpacity>
        <Text
          style={styles.txt1}>
          Program Details
        </Text>
      </View>
      <View>
        <Text
          style={styles.txt2}>
          Applied Program
        </Text>
      </View>
      <ProgramDetailsTabs />
    </ScrollView>
  );
};

export default ProgramDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FA4616',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 45,
  },
  txt1: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    paddingHorizontal: 10,
  },
  txt2: {
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingTop: 10,
    color: '#333333',
  },
});
