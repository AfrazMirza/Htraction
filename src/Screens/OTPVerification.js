import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import IdPass from '../components/IdPass';
import AllBtn from '../components/AllBtn';
import {OtpInput} from 'react-native-otp-entry';

const OTPVerification = ({route, navigation}) => {
  const {userEmail} =route.params;
  return (
    <ScrollView>
      <View style={styles.view1}>
        {/* <BackArrow
        source={require('../../assets/backArrow.png')}
        width={25}
        height={25}/> */}
        <Image style={styles.img} source={require('../../assets/logo.png')} />
        <View style={styles.view1V1}>
          <Text style={styles.V2Txt1}>Verify your account</Text>
          <Text style={styles.V2Txt2}>
            Enter 5 digits verification code we have send to
            <Text style={{color: '#FA4616'}}> {userEmail}</Text>
          </Text>
          <OtpInput
            focusColor="#FA4616"
            numberOfDigits={6}
            onTextChange={text => console.log(text)}
            theme={{
              containerStyle: styles.container,
              pinCodeTextStyle: styles.pinCodeText,
              pinCodeContainerStyle: styles.pinCodeContainer,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              // pinCodeTextStyle: styles.pinCodeText,
              // focusStickStyle: styles.focusStick,
              // placeholderTextStyle: styles.placeholderText,
              // filledPinCodeContainerStyle: styles.filledPinCodeContainer,
              // disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
            }}
          />
        </View>
      </View>
      <View style={styles.view2}>
        <AllBtn
          title="Send OTP"
          onTab={() => {
            navigation.navigate('SetPassword');
          }}
        />
        <Text style={styles.text}>
          If you don't receive OTP?
          <Text style={{color: '#FA4616', fontSize: 12}}>Resend OTP</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderColor: '#383838',
    // backgroundColor: '#F9FAFB', // Light gray background
  },
  pinCodeText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#444444',
  },
  //   activePinCodeContainer: {
  // borderColor: '#3B82F6', // Active border color
  //     borderWidth: 1,
  //     // backgroundColor: '#E0F2FE', // Light blue background
  //   },
  pinCodeContainer: {
    width: 41.8,
    height: 45,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '##444444', // Default border color
    // backgroundColor: '#FFFFFF', // White background
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop: 55,
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
});
