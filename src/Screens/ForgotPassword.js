import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllBtn from '../components/AllBtn';
import IdPass from '../components/IdPass';
import {ScrollView} from 'react-native-gesture-handler';
import BackArrow from '../components/BackArrow';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const handleForgotPass = () => {
    let isValid = true;
    setEmailError('');

    // Validate email
    if (email.trim() === '') {
      setEmailError('Please enter email');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email (e.g., user@example.com)');
      isValid = false;
    }
    // If this valid, navigate
    if (isValid) {
      // navigation.navigate('DrawerScreens');
      // navigation.navigate('MyProfile');
      navigation.navigate('OTPVerification', { userEmail: email });
    }
  };
  return (
    <ScrollView>
      <View style={styles.view1}>
        <BackArrow
          source={require('../../assets/backArrow.png')}
          width={15}
          height={15}
        />
        <Image style={styles.img} source={require('../../assets/logo.png')} />
        <View style={styles.view1V1}>
          <Text style={styles.V2Txt1}>Forgot your password?</Text>
          <Text style={styles.V2Txt2}>
            Not to worry, we got you! Let’s get you a new password. Please enter
            your email address.
          </Text>
        </View>
      </View>
      <View style={styles.view2}>
        <IdPass
          source={require('../../assets/email.png')}
          width={25}
          height={25}
          title="Email Id"
          showError={text => setEmail(text)}
        />
        {emailError ? <Text style={styles.errorTxt}>{emailError}</Text> : null}
        <AllBtn title="Send OTP" onTab={handleForgotPass} />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  view1: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop: 55,
    // backgroundColor:'black'
  },
  view1V1: {
    alignItems: 'center',
    gap: 13,
    // paddingTop: 35,
  },
  V2Txt1: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 24,
  },
  V2Txt2: {
    fontWeight: '400',
    fontSize: 18,
    color: '#A4A4A4',
    textAlign: 'center',
    padding: 10,
  },
  view2: {
    gap: 25,
    marginTop: 20,
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
