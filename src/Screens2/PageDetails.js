import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';

const PageDetails = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{paddingBottom: 45}}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
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
          Create Company page
        </Text>
      </View>
      <Text style={styles.txt}>Page Details</Text>
      {/* <Text style={{ fontSize: 16,
  fontWeight: '400',
  lineHeight: 28,
  color: '#858585',
  paddingTop: 15,
  paddingBottom: 5,
  paddingHorizontal: 24,}}>Contact Number</Text> */}
      <AllInputs title="Enter Company Name" input="Company Name" />
      <AllInputs title="Quick Introduction" input="Quick Introduction" />
      <AllInputs title="Tell us about your company" input="Tell us about your company" customeStyle={{height: 150, textAlignVertical: 'top' }} isMultiline={true}/>   
      <AllInputs title="Enter your website URl" input="website URl" />
      <AllInputs title="Upload your company logo" input="Upload" />

      <AllBtn
        onTab={() => {
          navigation.replace('ContactDetails');
        }}
        title="Continue"
      />
    </View>
  </ScrollView>
  )
}

export default PageDetails

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
      txt: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingTop: 10,
        color: '#383838',
      },
})