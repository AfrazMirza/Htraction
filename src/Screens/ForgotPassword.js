import {Alert, ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllBtn from '../components/AllBtn';
import IdPass from '../components/IdPass';
// import {ScrollView} from 'react-native-gesture-handler';
import BackArrow from '../components/BackArrow';
import { supabase } from '../lib/supabase';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleForgotPass = async () => {
  //   // let isValid = true;
  //   setEmailError('');
  //   setLoading(true);

  //   // Validate email
  //   if (!email.trim()) {
  //     setEmailError('Please enter email');
  //     isValid = (false);
  //     return;
  //   } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     setEmailError('Please enter a valid email (e.g., user@example.com)');
  //     isValid = (false);
  //     return;
  //   }
  //   // If this valid, navigate
  //   // if (isValid) {
  //   //   // navigation.navigate('DrawerScreens');
  //   //   // navigation.navigate('MyProfile');
  //   //   navigation.navigate('OTPVerification', { userEmail: email });
  //   // }

  //   // if (isValid) {
  //   //   try {
  //   //     const { error } = await supabase.auth.signInWithOtp(email.trim(), {
  //   //       redirectTo: 'h-traction://reset-password', // You need to configure deep linking for this
  //   //     });

  //   //     if (error) {
  //   //       throw error;
  //   //     }

  //   //     Alert.alert('Email Sent', 'Check your email for the password reset link',
  //   //       [
  //   //         {
  //   //           text: 'OK',
  //   //           onPress: () => navigation.navigate('OTPVerification', { userEmail: email }),
  //   //         },
  //   //       ]
  //   //     );
  //   //   } catch (error) {
  //   //     Alert.alert('Error', error.message);
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // }
     
  // if (isValid) {
  //   try {
  //     setLoading(true);
  //     const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
  //       redirectTo: 'h-traction://reset-password'
  //     });

  //     if (error) throw error;
  //     Alert.alert('Email Sent', 'Password reset link sent');
      
  //   } catch (error) {
  //     Alert.alert('Error', error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  const handleForgotPass = async () => {
    setEmailError('');
    setLoading(true);

    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter email');
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email (e.g., user@example.com)');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          shouldCreateUser: false,
        }
      });

      if (error) throw error;

      // Navigate to OTP verification on success
      navigation.navigate('OTPVerification', { 
        userEmail: email.trim(),
        verificationType: 'recovery' 
      });

    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  
  };
  return (
    <ScrollView>
      <View style={styles.view1}>
        <BackArrow
          source={require('../../assets/backArrow.png')}
          width={15}
          height={15}
          onPress={() => navigation.goBack()}
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
          onChangeText={setEmail}
          value={email}
        />
        {emailError ? <Text style={styles.errorTxt}>{emailError}</Text> : null}
        <AllBtn 
    title={loading ? "Sending..." : "Send OTP"} 
    onTab={handleForgotPass} 
    disabled={loading} />
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
