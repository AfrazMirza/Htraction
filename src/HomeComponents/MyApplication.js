import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyApplicationTabs from './MyApplicationTabs'

const MyApplication = () => {
  return (
    <View>
      <Text
                  style={styles.txt}>
                  ApplicationDetails
                </Text>
                <MyApplicationTabs/>
    </View>
  )
}

export default MyApplication

const styles = StyleSheet.create({
    txt: {
        fontSize: 14,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20,
        color: '#333333',
      }
})