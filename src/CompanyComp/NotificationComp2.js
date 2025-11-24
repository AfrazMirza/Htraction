import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const NotificationComp2 = () => {
  return (
     <SafeAreaView>
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              paddingHorizontal: 10,
            //   paddingRight: 10,
              paddingVertical: 10,
              borderBottomColor: '#ECECEC',
              borderBottomWidth: 1,
            }}>
            <Image
              style={{
                width: 54,
                height: 54,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: '#FA4616',
              }}
              source={require('../../assets/detailsImg.png')}
            />
    
            <View style={{paddingHorizontal: 10, gap: 5, }}>
              <View
                style={{
                  width: '85%' ,
                //   backgroundColor: 'red',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: '600', fontSize: 14}}>Collaboration invite Accepted</Text>
                <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
                  12:47 AM
                </Text>
              </View>
              <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
                Lorem Ipsum is a dummy text of the printing and typesetting industry
              </Text>
              <TouchableOpacity style={{ width: '21%', flex: 0.2, justifyContent: 'center', alignItems: 'center', borderColor: '#FA4616', borderWidth: 1, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 6}}><Text style={{fontWeight: '700', fontSize: 10, color: '#FA4616'}}>View Idea</Text></TouchableOpacity>
            </View>
          
          </View>
        </SafeAreaView>
  )
}

export default NotificationComp2

const styles = StyleSheet.create({})