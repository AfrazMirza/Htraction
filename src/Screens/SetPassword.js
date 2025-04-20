import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AllBtn from '../components/AllBtn';
import IdPass from '../components/IdPass';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SetPassword = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.view1}>
        <Image style={styles.img} source={require('../../assets/logo.png')} />
        <View style={styles.view1V1}>
          <Text style={styles.V2Txt1}>Set Password</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title="Password"
          isPassword={true}
        />
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title="Confirm password"
          isPassword={true}
        />
        <AllBtn onTab={()=>{navigation.navigate('CompanyProfile')}} title="Set Password" />
      </View>
    </ScrollView>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  view1: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop: 45,
    // backgroundColor: 'red'
  },
  view1V1: {
    alignItems: 'center',
    gap: 13,
    // paddingTop: 35,
    // backgroundColor: 'lime',
  },
  V2Txt1: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 24,
  },
  view2: {
    gap: 25,
    marginTop: 35,
    // backgroundColor: 'lime'
  },
  img: {
    width: 181,
    height: 35,
    marginTop: 80,
    marginBottom: 78,
  },
});
