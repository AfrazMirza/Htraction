import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import AllBtn from '../components/AllBtn';
import IdPass from '../components/IdPass';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SetPassword = () => {
  
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
      const [confirmPass, setConfirmPass] = useState('')
      const [confirmPassError, setConfirmPassError] = useState(false)
  const navigation = useNavigation();

  const setPass = () => {
    let isValid = true
    setPasswordError('');
    setConfirmPass('');

    if (password.trim() === '') {
      setPasswordError('Please enter password')
      isValid = false;
    } else {
      // Check password strength
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%&*]/.test(password);
      const isLongEnough = password.length >= 8;
      
      let errorMessages = [];
      
      if (!isLongEnough) errorMessages.push('at least 8 characters');
      if (!hasUpperCase) errorMessages.push('one uppercase letter');
      if (!hasNumber) errorMessages.push('one number');
      if (!hasSpecialChar) errorMessages.push('one special character (!@#$%&*)');
      
      if (errorMessages.length > 0) {
        setPasswordError(`Password must contain: ${errorMessages.join(', ')}`);
        isValid = false;
      }
    }

    if (confirmPass.trim() === '') {
      setConfirmPassError('Please confirm your password');
      isValid = false;
  } else if (password !== confirmPass) {
      setConfirmPassError('Passwords do not match');
      isValid = false;
  }
    if(isValid){
      navigation.navigate('SignIn')
    }


  }
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
          showError={(text)=>setPassword(text)}
        />
         {passwordError ? <Text style={styles.errorTxt}>{passwordError}</Text> : null}
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title="Confirm password"
          isPassword={true}
          showError={(text)=>setConfirmPass(text)}
        />
         {confirmPassError ? <Text style={styles.errorTxt}>{confirmPassError}</Text> : null}
        <AllBtn onTab={setPass} title="Set Password" />
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
  errorTxt: {
    color: '#FA4616', 
    marginHorizontal: 15
  }
});
