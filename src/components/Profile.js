import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>My Profile</Text>
      <View style={styles.container1}>
        <Image
          style={{width: 100, height: 101}}
          source={require('../../assets/KumarRohit.png')}
        />
        <View style={styles.container2}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#FA4616'}}>
            Kumar Rohit
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#444444'}}>
            Aspiring Entrepreneur
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
              // navigation.navigate('ContactDetails');
              // navigation.navigate('PageDetails');
              // navigation.navigate('CompanyDetails');
            }}
            style={styles.btn}>
            <Text style={styles.btntxt}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.followView}>
          <Text style={styles.txt1}>122</Text>

          <Text style={styles.txt2}>Followers</Text>
        </View>
        <View style={styles.followView}>
          <Text style={styles.txt1}>67</Text>
          <Text style={styles.txt2}>Following</Text>
        </View>
        <View style={styles.followView}>
          <Text style={styles.txt1}>13</Text>
          <Text style={styles.txt2}>Post</Text>
        </View>
        <View style={styles.followView}>
          <Text style={styles.txt1}>10</Text>
          <Text style={styles.txt2}>Ideas</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // width: 375,
    // height: 263,
    backgroundColor: '#ffffff',
    paddingBottom: 15,
  },
  containerTxt: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  container1: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // width: 345,
    // height: 101,
    marginHorizontal: 15,
    gap: 14,
  },
  container2: {
    backgroundColor: 'white', width: 230, height: 91
  },
  container3: {
    flexDirection: 'row',
    marginTop: '15',
    justifyContent: 'space-between',
    // width: 340,
    // height: 57,
    // backgroundColor: 'white',
    marginHorizontal: 15,
  },
  followView: {
    // width: 72,
    // height: 55,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // backgroundColor: 'lightgreen',
  },
  txt1: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333333',
  },
  txt2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FA4616',
    width: 82,
    height: 28,
    marginTop: 20,
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FA4616',
    textAlign: 'center',
  },
});
