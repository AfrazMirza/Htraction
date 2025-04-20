import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React from 'react'

const IdeaHubInputs = ({title, input, customeStyle, isMultiline=false}) => {
  return (
        <View style={{ marginBottom: 5,}}>
          <View
            style={styles.container1}>
            <Text style={styles.txt}>{title}</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.btn}>
              <TextInput
              style={[styles.inputTxt, customeStyle, isMultiline && styles.multilineInput]}
                placeholder={input}
                maxLength={isMultiline ? 500 : 25}
                multiline= {isMultiline}
                placeholderTextColor={'#888888'}
              />
               <Image 
            source={require('../../assets/orngSrch.png')}  // Replace with your image path
            style={styles.searchImage}
          />
            </TouchableOpacity>
          </View>
        </View>
  )
}

export default IdeaHubInputs

const styles = StyleSheet.create({
    container1: {
        paddingTop: 15,
        paddingBottom: 15,
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
        // paddingVertical: 12,
        paddingHorizontal: 15,
      },
      txt: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 25,
        color: '#383838'
      },
      inputTxt: {
        flex: 1,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 28,
        color: '#858585'
      },
      multilineInput: {
        height: 150, // Longer height for message box
        textAlignVertical: 'top',
      },
      searchImage: {
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: [{ translateY: -10 }],
        width: 16,
        height: 16, 
        // backgroundColor: '#FA4616'
      },
})