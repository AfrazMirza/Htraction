import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const UserData = () => {
  const navigation = useNavigation();
  // const [userName, setUserName] = useState('Guest');
  const [profileData, setProfileData] = useState({});
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>User Profile</Text>
      <View style={styles.container1}>
        <Image
          style={{width: 100, height: 101}}
          source={require('../../assets/KumarRohit.png')}
        />
        <View style={styles.container2}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#FA4616'}}>
              {profileData.full_name || 'Rohit Kumar'}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#444444'}}>
              {profileData.entrepreneur_type || 'Aspiring Entrepreneur'}
            </Text>
          </View>
          {/* <TouchableOpacity
               onPress={() => {
                 navigation.navigate('EditProfile');
                 // navigation.navigate('ContactDetails');
                 // navigation.navigate('PageDetails');
                 // navigation.navigate('CompanyDetails');
                }}
               style={styles.btn}>
               <Text style={styles.btntxt}>Edit Profile</Text>
             </TouchableOpacity> */}
         <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
         <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> { navigation.navigate('NewMessage')}}>
            <Image style={{width: 30, height: 30}} source={require('../../assets/message.png')} />
          </TouchableOpacity>
         </View>
        </View>
        <TouchableOpacity>
          <Image
            style={{paddingRight: 4, width: 20, height: 20}}
            source={require('../../assets/3dots.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        {/* <TouchableOpacity style={styles.followView}>
             <Text style={styles.txt1}>122</Text>
   
             <Text style={styles.txt2}>Followers</Text>
           </TouchableOpacity> */}
        <TouchableOpacity style={styles.followView}>
          <Text style={styles.txt1}>67</Text>
          <Text style={styles.txt2}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Connections')}
          style={styles.followView}>
          <Text style={styles.txt1}>13</Text>
          <Text style={styles.txt2}>Connections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followView}>
          <Text style={styles.txt1}>10</Text>
          <Text style={styles.txt2}>Ideas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserData;

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
    backgroundColor: 'white',
    width: 190,
    height: 91,
  },
  container3: {
    flexDirection: 'row',
    marginTop: '15',
    justifyContent: 'space-around',
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
    fontWeight: '700',
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
  followButton: {
    backgroundColor: '#FA4616',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 9,
  },
  followText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
    paddingVertical: 7,
  },
});
