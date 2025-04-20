import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const IdeaValidation = () => {
  return (
    <View>
      <Text style={styles.txt1}>Validation Report</Text>
      <Text style={styles.txt2}>
        Please provide appropriate input to generate an actionable report.
      </Text>
      <View style={styles.container}>
        <Image
          style={{width: 26, height: 35}}
          source={require('../../assets/pdfImg.png')}
        />
        <TouchableOpacity>
          <Text style={styles.containerBtnTxt}>Export to pdf</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IdeaValidation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  containerBtnTxt: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 26,
    color: '#FA4616',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  txt1: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginVertical: 10,
  },
  txt2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 26,
    color: '#747474',
    marginVertical: 10,
  },
});
