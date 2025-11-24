import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NotificationComp1 from '../CompanyComp/NotificationComp1';
import ConnetionsComp from '../components/ConnetionsComp';

const Connections = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {/* <View style={{paddingBottom: 45, backgroundColor: '#FFFBF9'}}> */}
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/arrowleft.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: '#ffffff',
              paddingHorizontal: 10,
            }}>
            Connections
          </Text>
        </View>
        <View style={styles.subContainer}>
          <Image
            style={styles.img2}
            source={require('../../assets/searchIcon.png')}
          />
          <TextInput
            style={styles.txt3}
            placeholder="Search"
            placeholderTextColor="#FFF3ED"
          />
        </View>
      </View>
      <ScrollView style={{flex: 1, paddingVertical: 10}}>
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        <ConnetionsComp />
        {/* </View> */}
      </ScrollView>
    </ScrollView>
  );
};

export default Connections;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FA4616',
    // gap: 10,
    // height: '18%',
    paddingBottom: 15,
    paddingTop: 45,
  },
  container: {
    flexDirection: 'row',
    // width: 375,
    // height: 98,
    backgroundColor: '#FA4616',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15,
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
  },
  img2: {
    width: 16.2,
    height: 16.2,
  },
});
