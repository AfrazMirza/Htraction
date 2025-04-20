import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SearchTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{justifyContent: 'center'}}><Image style={{width: 15, height: 15, }} source={require('../../assets/arrowleft.png')}/></TouchableOpacity>
      <View
        style={[styles.subContainer, {marginLeft: '4%'}]}>
        <Image
          style={{width: 16.2, height: 16.2}}
          source={require('../../assets/searchIcon.png')}
        />
        <TextInput
          style={{fontSize: 14, fontWeight: '400'}}
          placeholder="Search"
          placeholderTextColor="#FFF3ED"
        />
      </View>
    </View>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    // width: 375,
    // height: 98,
    backgroundColor: '#FA4616',
    // justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  subContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFB093',
    alignSelf: 'center',
    width: '92%',
    backgroundColor: '#FF7441',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});
