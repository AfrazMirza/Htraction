import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BackArrow = ({source, width, height}, navigation) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate('OTPVerification')}}><Image source={source} style={{ width: width, height: height }} /></TouchableOpacity>
    </View>
  )
}

export default BackArrow;

const styles = StyleSheet.create({
    // backArrowImg: {
    //     width: 15,
    //     height: 15,
    // },
    container: {
        alignItems:'flex-start',
        justifyContent: 'center',
        // margin: 100,
        backgroundColor:'black',
    }
})