import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ApplicationDetailsCards = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt1}>{props.txt1}</Text>
        <Text style={styles.txt2}>{props.txt2}</Text>
      </View>
      <View>
        <Text style={styles.txt1}>{props.txt3}</Text>
        <Text style={styles.txt2}>{props.txt4}</Text>
      </View>
    </View>
  )
}

export default ApplicationDetailsCards

const styles = StyleSheet.create({
    container: { borderRadius: 10, borderWidth: 1, borderColor:'#FEC7B9', padding: 15, gap: 15},
    txt1: {fontSize: 16, fontWeight: '500', lineHeight: 26},
    txt2: {fontSize: 14, fontWeight: '400', lineHeight: 26},
})