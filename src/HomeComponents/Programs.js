import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Details from './Details';
import {ScrollView} from 'react-native-gesture-handler';
import ProgramSugessionsCards from './ProgramSugessionsCards';
import { useNavigation } from '@react-navigation/native';

const Programs = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text
            style={styles.txt}>
            Programs
          </Text>
        </View>
        <View style={styles.container1}>
          <Details />
          <Details />
        </View>
        <View style={styles.container1}>
          <Details />
          <Details />
        </View>
        <View style={styles.container1}>
          <Details />
          <Details />
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('IdeaHub')}}
            style={styles.btn}>
            <Text style={styles.btnTxt}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 15}}>
        <Text
          style={styles.txt}>
          Programs Suggestions
        </Text>
      </View>
      <ProgramSugessionsCards /> {/* see this code after some time */}
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  container: {flex: 1, gap: 15},
  container1: {flexDirection: 'row', gap: 15, paddingHorizontal: 10},
  txt: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingTop: 20,
    color: '#333333',
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FA4616',
    alignItems: 'center',
    paddingVertical: 12,
  },
  btnTxt: {fontSize: 16, fontWeight: '700', color: '#FA4616'},
});
