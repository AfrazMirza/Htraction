import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';

const AllInputs = ({title, input, customeStyle, isMultiline = false}) => {
  const [text, setText] = useState('');
  return (
    <View style={{marginBottom: 5}}>
      <View style={styles.container1}>
        <Text style={styles.txt}>{title}</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.btn}>
          <TextInput
            style={[
              styles.inputTxt,
              customeStyle,
              isMultiline && styles.multilineInput,
            ]}
            placeholder={input}
            maxLength={isMultiline ? 500 : 25}
            multiline={isMultiline}
            placeholderTextColor={'#888888'}
            value={text}
            onChangeText={setText}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllInputs;

const styles = StyleSheet.create({
  container1: {
    paddingTop: 10,
    paddingBottom: 4,
    paddingHorizontal: 12,
    // backgroundColor: 'lightgreen',
  },
  container2: {
    paddingHorizontal: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',

    // width: '95%',
    // alignSelf: 'center',
    // backgroundColor: 'transparent',  // ✅ Ensures shadow is visible
    // borderRadius: 15,  // ✅ Matches button borderRadius

    // // Bottom shadow (Android & iOS)
    // elevation: 6,  // ✅ For Android
    // shadowColor: '#000',  // ✅ Shadow color
    // shadowOffset: { width: 0, height: 8 },  // ✅ Moves shadow outside bottom
    // shadowOpacity: 0.2,  // ✅ Adjusts shadow transparency
    // shadowRadius: 6,  // ✅ Increases blur radius
  },
  btn: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DBD6D6',
    // width: '95%',
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 2,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
  },
  txt: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
    color: '#605F5F',
  },
  inputTxt: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
    color: '#858585',
  },
  multilineInput: {
    height: 150, // Longer height for message box
    textAlignVertical: 'top',
  },
});
