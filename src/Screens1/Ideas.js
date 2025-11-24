import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import IdeaCards from '../IdeaHubComps/IdeaCards'

const Ideas = ({navigation}) => {
  return (
   <ScrollView>
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
                 Ideas
               </Text>
             </View>
             <View style={styles.subContainer}>
                    <Image
                      style={styles.img2}
                      source={require('../../assets/searchIcon.png')}
                    />
                    <TextInput
                      style={styles.txt3}
                      placeholder="Search"
                      placeholderTextColor="#FFF3ED"
                    />
                  </View>
             </View>
             <ScrollView contentContainerStyle={{}}>
      <View style={{gap: 16, paddingVertical: 20}}>
        {/* <View style={{alignItems: 'center', marginHorizontal: 10, borderWidth: 1, borderColor:'#FEC7B9', borderRadius: 15}}>
         <TouchableOpacity  onPress={() => setModalVisible(true)}>
         <Image style={{width: 295, height: 175 }} source={require('../../assets/CreateIdea.png')}/>
         </TouchableOpacity>
        </View> */}
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'Rated this idea'/>
          <IdeaCards title1 = 'Finalize' title2 = 'Rated this idea'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'Rated this idea'/>
          <IdeaCards title1 = 'Finalize' title2 = 'Rated this idea'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
        </View>

      </View>
      </ScrollView>
   </ScrollView>
  )
}

export default Ideas

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FA4616',
        // gap: 10,
        // height: '18%',
        paddingBottom: 15,
        paddingTop: 45,
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
        
      },
      container1: {
        flexDirection: 'row',
        gap: 15,
        paddingHorizontal: 10,
      },
      subContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFB093',
        alignSelf: 'center',
        width: '92%',
        backgroundColor: '#FF7441',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      img2: {
        width: 16.2,
        height: 16.2,
      },
      
})