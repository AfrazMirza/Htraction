import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';

const CompanyDetails = ({navigation}) => {
  return (
    <>
    <View style={styles.mainContainer}>
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
      <Text style={styles.txt}>Company Details</Text>
      {/* <Text style={{ fontSize: 16,
  fontWeight: '400',
  lineHeight: 28,
  color: '#858585',
  paddingTop: 15,
  paddingBottom: 5,
  paddingHorizontal: 24,}}>Contact Number</Text> */}
      <AllInputs title="Company Type" input="Select company type" />
      <AllInputs title="Industry" input="select Industry" />
      <AllInputs title="Founding Year" input="YYYY" />
      <AllInputs title="Upload your company logo" input="Upload" />

     
    </View>
    <AllBtn
        onTab={() => {
          navigation.replace('PageDetails');
        }}
        title="Continue"
      />
    </>
  )
}

export default CompanyDetails

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
   paddingBottom: 45
    // justifyContent: 'space-between', // Pushes content and button apart
    // Padding to avoid bottom edge

  },
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