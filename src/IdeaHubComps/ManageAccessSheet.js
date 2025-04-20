import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IdeaHubInputs from './IdeaHubInputs';
import AllBtn from '../components/AllBtn';
import Tabs from '../HomeComponents/Tabs';
import CompanyTabs from '../CompanyComp.js/CompanyTabs';
import ManageAccessTabs from './ManageAccessTabs';

const ManageAccessSheet = ({panelRef, navigation}) => {
  return (
    <View style={styles.mainContainer}>
    <View>
   <View style={styles.container}>
     <TouchableOpacity onPress={() => panelRef.current.close()}>
       <Image
         style={{width: 14, height: 14}}
         source={require('../../assets/cross.png')}
       />
     </TouchableOpacity>
     <Text style={styles.title}>Manage Access</Text>
   </View>
  
   <View style={styles.infoContainer}>
       <Text style={styles.infoText}>You can manage the group member adding or removing the user.</Text>
   </View>
   <IdeaHubInputs title="Search for users who have access to this idea." input="Select and search users to add in group" />
 </View>
<ManageAccessTabs/>
 {/* <AllBtn 
     title="Save Changes"
     onTab={() => {
       navigation.navigate('MyProfile');
     }}
   /> */}
  </View>
  )
}

export default ManageAccessSheet

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between', // Pushes content and button apart
    paddingBottom: 20, // Padding to avoid bottom edge
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  infoContainer: {
    marginVertical: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 25,
    marginHorizontal: 10,
    color: '#747474',
  },
})