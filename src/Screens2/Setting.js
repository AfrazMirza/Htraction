import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../Context/ThemeContext';
import IdPass from '../components/IdPass';
import AllBtn from '../components/AllBtn';
// import { useTheme } from '../ThemeChanger/DarkLightMode';

const Setting = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const showToggleTheme = true;
  const {theme, toggleTheme} = useTheme();

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [confirmPass, setConfirmPass] = useState('');
  const [confirmPassError, setConfirmPassError] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState(false);

  const handleSignIn = async () => {
    let isValid = true;
    setPasswordError('');
    setNewPasswordError('');
    setConfirmPassError('');

    if (password.trim() === '') {
      setPasswordError('Please enter old password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (newPassword.trim() === '') {
      setNewPasswordError('Please enter new password');
      isValid = false;
    } else {
      // Check password strength
      const hasUpperCase = /[A-Z]/.test(newPassword);
      const hasNumber = /[0-9]/.test(newPassword);
      const hasSpecialChar = /[!@#$%&*]/.test(newPassword);
      const isLongEnough = newPassword.length >= 8;

      let errorMessages = [];

      if (!isLongEnough) errorMessages.push('at least 8 characters');
      if (!hasUpperCase) errorMessages.push('one uppercase letter');
      if (!hasNumber) errorMessages.push('one number');
      if (!hasSpecialChar)
        errorMessages.push('one special character (!@#$%&*)');

      if (errorMessages.length > 0) {
        setNewPasswordError(
          `Password must contain: ${errorMessages.join(', ')}`,
        );
        isValid = false;
      }
    }

    if (confirmPass.trim() === '') {
      setConfirmPassError('Please confirm your password');
      isValid = false;
    } else if (newPassword !== confirmPass) {
      setConfirmPassError('Passwords do not match');
      isValid = false;
    }
    if (isValid) {
      // navigation.navigate('DrawerScreens');
      // navigation.navigate('MyProfile');
      setModalMessage('Password Change Successfully!');
      setModalVisible(true);
    }
  };

  const renderToggleThemeButtom = () => {
    if (showToggleTheme) {
      return (
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
          {theme == 'light' ? (
            <Text style={{color: 'white', fontWeight: 'bold'}}>Dark</Text>
          ) : (
            <Text style={{color: 'white', fontWeight: 'bold'}}>Light</Text>
          )}
        </TouchableOpacity>
      );
    }
  };
  return (
    <View>
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
          Setting
        </Text>
      </View>
      {/* <View style={{flexDirection: 'row', justifyContent
        : 'space-between', marginHorizontal: 10
      }}> */}
      <View style={styles.settingItem}>
        {/* we can use this dark mode after some time when we wanted to add in the project and language function also  */}
        {/* <Text style={{fontSize: 18, fontWeight: '500', color: '#383838', marginRight: 35}}>Change To Dark Mode</Text> */}
        {/* <TouchableOpacity><Text>💡</Text></TouchableOpacity> */}
        {/* {renderToggleThemeButtom()} */}
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#383838',
            paddingHorizontal: 10,
          }}>
          Change Password
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 16,
            color: '#383838',
            paddingHorizontal: 10,
          }}>
          Enter Old Password
        </Text>
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title="Old Password"
          showError={text => setPassword(text)}
          value={password}
          isPassword={true}
          secureTextEntry={true}
        />
        {passwordError ? (
          <Text
            style={[
              styles.errorTxt,
              {color: theme === 'light' ? '#FA4616' : '#FF5722'},
            ]}>
            {passwordError}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text
            style={[
              styles.view2Txt,
              {color: theme === 'light' ? '#FA4616' : '#FF5722'},
            ]}>
            Forgot Password
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 16,
            color: '#383838',
            paddingHorizontal: 10,
          }}>
          Enter New Password
        </Text>
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title=" New Password"
          showError={text => setNewPassword(text)}
          value={password}
          isPassword={true}
          secureTextEntry={true}
        />
        {newPasswordError ? (
          <Text
            style={[
              styles.errorTxt,
              {color: theme === 'light' ? '#FA4616' : '#FF5722'},
            ]}>
            {newPasswordError}
          </Text>
        ) : null}
        <Text
          style={{
            fontWeight: '500',
            fontSize: 16,
            color: '#383838',
            paddingHorizontal: 10,
          }}>
          Enter Confirm Password
        </Text>
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title="Confirm password"
          showError={text => setConfirmPass(text)}
          value={confirmPass}
          isPassword={true}
          secureTextEntry={true}
        />
        {confirmPassError ? (
          <Text
            style={[
              styles.errorTxt,
              {color: theme === 'light' ? '#FA4616' : '#FF5722'},
            ]}>
            {confirmPassError}
          </Text>
        ) : null}
        <AllBtn
          // title="Sign In"
          // onTab={handleSignIn}
          title="Change Password"
          onTab={handleSignIn}
        />
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={styles.modalBackground}>
          <View
            style={styles.modalContainer}>
              <View style={{alignSelf: 'flex-end'}}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                              <Image
                                style={{width: 14, height: 14}}
                                source={require('../../assets/cross.png')}
                              />
                            </TouchableOpacity>
                          </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                style={{width: 60, height: 61}}
                source={require('../../assets/circleRight.png')}
              />
            </View>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity
              
              style={styles.closeButton}>
              <Text style={{color: 'white'}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    /* <View style={{flexDirection: 'row', justifyContent
        : 'space-between', marginHorizontal: 10
      }}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#383838'}}>Change To Hindi</Text>
        <TouchableOpacity><Text></Text></TouchableOpacity>
      </View> */
    // </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: 375,
    // height: 98,
    backgroundColor: '#FA4616',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 45,
  },
  settingItem: {
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    // marginHorizontal: 10,
    // // alignItems: "center",
    paddingVertical: 10,
    gap: 15,
  },
  settingText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#383838',
  },
  toggleButton: {
    backgroundColor: '#FA4616',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 35,
  },
  errorTxt: {
    color: '#FA4616',
    marginHorizontal: 15,
  },
  view2Txt: {
    fontWeight: '400',
    fontSize: 14,
    color: '#FA4616',
    alignSelf: 'flex-end',
    marginRight: 11,
  },
  // css model for Change Password button
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // ✅ Shadow for Android
  },
  closeButton: {
    backgroundColor: '#FA4616',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
