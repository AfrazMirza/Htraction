import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Google from '../components/Google';
import AllBtn from '../components/AllBtn';
import IdPass from '../components/IdPass';
import { useTheme } from '../Context/ThemeContext';

const SignUp = ({navigation}) => {
 
  // Theme Changer Dark and Light

  const {theme} = useTheme();

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [confirmPass, setConfirmPass] = useState('')
  const [confirmPassError, setConfirmPassError] = useState(false)

  
  const handleSignUp = () => {
    let isValid = true

    if (name.trim() === '') {
      setNameError(true)
      isValid = false;
    }else{
      setNameError(false)
    }

    if (email.trim() === '') {
      setEmailError(true)
      isValid = false;
    }else{
      setEmailError(false)
    }

    if (password.trim() === '') {
      setPasswordError(true)
      isValid = false;
    }else{
      setPasswordError(false)
    }

    if (confirmPass.trim() === '') {
      setConfirmPassError(true)
      isValid = false;
    }else{
      setConfirmPassError(false)
    }


    if(isValid){
      navigation.navigate('MainTabs')
    }


  }
  return (
    <View style={[styles.mainContainer, {backgroundColor : theme === 'light' ? '#FFFFFF' : '#1E1E1E'} ]}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.view1}>
          <Image style={styles.img} source={require('../../assets/logo.png')} />
          <View style={{alignItems: 'center', gap: 6}}>
            <Text style={[styles.view1Text1, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Create an Account</Text>
            <Text style={styles.view1Text2}>
              Your journey starts here. Create your account today
            </Text>
          </View>
        </View>
        <View style={styles.view2}>
          <IdPass
            source={require('../../assets/profile.png')}
            width={25}
            height={25}
            title="Full Name"
            showError={(text)=> setName(text)}
          />
          {nameError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Please Enter Your Name</Text> : null}
          <IdPass
            source={require('../../assets/email.png')}
            width={25}
            height={25}
            title="Email Id"
            showError={(text)=> setEmail(text)}
          />
          {emailError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Please Enter Email</Text> : null}
          <IdPass
            source={require('../../assets/password.png')}
            width={25}
            height={25}
            title="Password"
            showError={(text)=>setPassword(text)}
            isPassword={true}
          />
          {passwordError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Please Enter Password</Text> : null}
          <IdPass
            source={require('../../assets/password.png')}
            width={25}
            height={25}
            title="Confirm password"
            showError={(text)=>setConfirmPass(text)}
            isPassword={true}
          />
          {confirmPassError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Confirm Your Password</Text> : null}
          <AllBtn
            title="Sign Up"
            onTab={handleSignUp}
          />

          <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Or Continue With</Text>
          <Google />
          <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>
            Already have an account?
            <Text style={{color: theme === 'light' ?'#FA4616' : '#FF5722', fontSize: 12}}>SIGN IN</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  view1Text1: {color: '#333333', fontWeight: '700', fontSize: 24},
  view1Text2: {
    fontWeight: '400',
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#A4A4A4',
  },
  view2: {
    gap: 20,
    marginTop: 29,
    marginBottom: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
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
