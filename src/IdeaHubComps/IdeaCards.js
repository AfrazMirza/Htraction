import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const IdeaCards = ({title1, title2}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={{padding: 10, gap: 8}}>
        <View style={styles.subContainer1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditIdeaDetails');
            }}
            style={styles.subContainer1Btn}>
            <Text style={styles.subContainer1BtnTxt}>{title1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subContainer1Btn}>
            <Text style={styles.subContainer1BtnTxt}>{title2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 125, position: 'absolute'}}>
            <Image style={{width: 20, height: 20}} source={require('../../assets/3dots.png')}/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txt2}>Title that best...</Text>
          <Text style={{fontSize: 10, fontWeight: '400'}}>
            Last edited: 3 hours ago
          </Text>
        </View>
      </View>
      <View style={styles.btn1}>
        <Text style={styles.btn1Txt}>Collabrations:</Text>
        <TouchableOpacity>
          <Image
            style={{width: 23, height: 23}}
            source={require('../../assets/profile1.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IdeaCards;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
  },
  subContainer1: {
    flexDirection: 'row',
    gap: 7,
  },
  subContainer1Btn: {
    backgroundColor: '#FFF3ED',
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  subContainer1BtnTxt: {color: '#FA4616', fontSize: 10, fontWeight: '600'},
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
    fontSize: 14,
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
  btn1: {
    backgroundColor: '#FFF3ED',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btn1Txt: {
    fontSize: 10,
    fontWeight: '600',
  },
});
