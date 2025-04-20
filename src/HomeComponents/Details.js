import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Image
          style={{width: 32, height: 32}}
          source={require('../../assets/detailsImg.png')}
        />
        <View style={{flex: 1}}>
          <Text style={styles.subContainer1Txt}>CodeCrest Technologies</Text>
        </View>
      </View>
      <View>
        <Text style={styles.txt2}>
          DevMaster: Empowering Innovation through Code
        </Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.txt1}>Applied date:  </Text>
        <Text style={styles.txt1}>12th Oct 2024</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.txt2}>Applied</Text>
        <Text style={styles.txt2}>Closed</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProgramDetails');
        }}
        style={styles.btn}>
        <Text style={styles.btnTxt}>View Details </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
    padding: 10,
    gap: 8,
  },
  subContainer1: {
    flexDirection: 'row',
    gap: 7,
  },
  subContainer1Txt: {
    fontSize: 12,
    fontWeight: '500',
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    fontSize: 9,
    fontWeight: '400',
  },
  txt2: {
    fontSize: 10,
    fontWeight: '500',
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FA4616',
    alignItems: 'center',
    paddingVertical: 7.5,
  },
  btnTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FA4616',
  },
});
