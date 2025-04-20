import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AllInputs from './AllInputs';
import AllBtn from '../components/AllBtn';

const InviteUser = ({panelRef}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => panelRef.current.close()}>
          <Image
            style={{width: 14, height: 14}}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Invite a User</Text>
      </View>
      <View style={{paddingVertical: 15, paddingHorizontal: 15}}>
        <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 26, color: '#383838'}}>Please enter their email address below, and we'll send them an invitation to join us. Thank you for helping us grow and connect!</Text>
      </View>
      <AllInputs title="Subject" input="Subject" />
      <AllBtn
        title="Send Invite"
        onTab={() => {
          navigation.navigate('MyProfile');
        }}
      />
    </View>
  )
}

export default InviteUser

const styles = StyleSheet.create({ container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },})