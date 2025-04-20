import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ListCarts from '../components/ListCarts'

const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState('personal');
  return (
    <View>
       <View style={styles.container}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.containerTxt}>Chat</Text>
              <Image style={{width: 13, height: 13}} source={require('../../assets/editbutton.png')}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor:"FFFBF9"}}>
                <TouchableOpacity onPress={() => setActiveTab('personal')} style={[styles.button, activeTab === 'personal' ? styles.activeButton : styles.inactiveButton]}><Text 
                // style={ 
                //   {fontSize: 16, fontWeight: '600',  color: '#FA4616',lineHeight: 26}
                //   }
                style={activeTab === 'personal' ? styles.activeText : styles.inactiveText}
                  >Personal</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('company')}
 style={[
          styles.button, 
          activeTab === 'company' ? styles.activeButton : styles.inactiveButton
        ]}><Text style={activeTab === 'company' ? styles.activeText : styles.inactiveText}
        // style={{fontSize: 16, fontWeight: '600', color: '#FA4616', lineHeight: 26}}
        >Company</Text></TouchableOpacity>
              </View>
              <SearchBox/>
            </View>
              <ScrollView>
                <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 15, gap: 10,}}>
                    <TouchableOpacity style={{paddingVertical: 6, paddingHorizontal: 9, borderColor: '#FA4616', borderWidth: 2, borderRadius: 7}}><Text style={{color: '#FA4616', fontSize: 12, fontWeight: '700'}}>All</Text></TouchableOpacity>
                    <TouchableOpacity style={{paddingVertical: 6, paddingHorizontal: 9, borderColor: '#FA4616', borderWidth: 2, borderRadius: 7}}><Text style={{color: '#FA4616', fontSize: 12, fontWeight: '700'}}>Group</Text></TouchableOpacity>
                </View>
      <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Bella swan'
         designation='Enterpreneur'
         active='3 days ago'/>
         <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Bella swan'
         designation='Enterpreneur'
         active='3 days ago'/>
         <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Bella swan'
         designation='Enterpreneur'
         active='3 days ago'/>
         <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Afraz Mirza'
         designation='Enterpreneur'
         active='3 days ago'/>
          <ListCarts
        image={require('../../assets/profile1.png')}
         name= 'Bella swan'
         designation='Enterpreneur'
         active='3 days ago'/>
              </ScrollView>
            </View>
   
  )
}

export default ChatScreen

const SearchBox = () => {
     return (
        <View style={styles.SearchBoxcontainer}>
          {/* <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{justifyContent: 'center'}}><Image style={{width: 15, height: 15, }} source={require('../../assets/arrowleft.png')}/></TouchableOpacity> */}
          <View
            style={[styles.SearchBoxsubContainer, {marginLeft: '2%'}]}>
            <Image
              style={{width: 16.2, height: 16.2}}
              source={require('../../assets/searchIcon.png')}
            />
            <TextInput
              style={{fontSize: 14, fontWeight: '400'}}
              placeholder="Search"
              placeholderTextColor="#FFF3ED"
            />
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // width: 375,
        // height: 98,
        backgroundColor: '#FA4616',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingBottom: 15,
        paddingTop: 45,
        gap: 15
      },
      containerTxt: {
        fontSize: 18,
        fontWeight: '800',
        color: '#ffffff',
        // paddingHorizontal: 10,
      },

      SearchBoxcontainer: {
        flexDirection:'row',
        // width: 375,
        // height: 98,
        // backgroundColor: '#FA4616',
        // justifyContent: 'space-between',
        // paddingVertical: 15,
        // paddingHorizontal: 10,
        // paddingTop: 40,
      },
      SearchBoxsubContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFB093',
        // alignSelf: 'center',
        width: '98%',
        backgroundColor: '#FF7441',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      button: {paddingHorizontal: 50, backgroundColor: '#FFE5D5', paddingVertical: 7, borderRadius: 10,},
      activeButton: {
        backgroundColor: '#FFE5D5',
      },
      inactiveButton: {
        backgroundColor: '#FFFBF9',
      },
      activeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FA4616',
        lineHeight: 26,
        textAlign: 'center',
      },
      inactiveText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#706F6E',
        lineHeight: 26,
        textAlign: 'center',
      },
})