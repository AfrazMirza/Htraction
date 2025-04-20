import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import { useTheme } from '../Context/ThemeContext';
// import {Ionicons} from "react-native-vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';

const IdPass = ({source, width, height, title, showError, isPassword}) => {
  // const [secureText, setSecureText] = useState(true);
  const [value, setValue] = useState('');
  const [secureText, setSecureText] = useState(isPassword);

  const toggleSecure = () => {
    setSecureText(!secureText);
  };

  const handleChange = (text) => {
    setValue(text);
    showError?.(text);
  };

  const {theme} = useTheme
  return (
    <View style={[styles.container, {color: theme === 'light' ? '#F5F5F5' : '#333'}]}>
      <TouchableOpacity style={styles.btn}>
        <Image source={source} style={{width: width, height: height}} />
        {/* <Text style={{color:'#A4A4A4', fontWeight: '500'}}>{title}</Text> */}
        <TextInput
        style={[styles.textInput, {color: theme === 'light' ? '#888' : '#888'}]}
          placeholder={title}
          value={value}
          maxLength={25}
          placeholderTextColor={'#888'}
          onChangeText={handleChange}
          secureTextEntry={isPassword ? secureText : false}
          // secureTextEntry={title === "Password" || title === "Confirm password" ? secureText : false}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleSecure}>
            <Image
              source={
                secureText
                  ? require('../../assets/hidden.png')
                  : require('../../assets/eye1.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default IdPass;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  btn: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DBD6D6',
    width: '95%',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 60,
  },
});
