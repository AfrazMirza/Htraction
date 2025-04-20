import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';
import IdeaHubInputs from './IdeaHubInputs';

const EditGrpSheet = ({grpDetails, navigation}) => {
  const Profile = () => {
        return (
          <View>
            <TouchableOpacity  style={styles.container1}>
            <Image
              style={{width: 28, height: 28, marginRight: 10}}
              source={require('../../assets/Ron.png')}
            />
            <View>
              <View>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <Text style={styles.txt1}>Jeff Bezoz</Text>
               <Text style={[styles.txt2, { paddingLeft: 25, borderLeftColor: '#DBD6D6', borderLeftWidth: 0.5}]}>Investor</Text>
               </View>
    
                <Text style={styles.txt2}>jeff@yopmail.com</Text>
              </View>
            </View>
            <TouchableOpacity style={{justifyContent: 'center', marginLeft: 100}} ><Text style={[styles.txt2, {color: '#fa4616'}]}>Remove</Text></TouchableOpacity>
            </TouchableOpacity>
          </View>
        );
      };
  return (
   <View style={styles.mainContainer}>
     <View>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => grpDetails.current.close()}>
        <Image
          style={{width: 14, height: 14}}
          source={require('../../assets/cross.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Edit Group</Text>
    </View>
    <IdeaHubInputs title="Enter Group" input="Group Name" />
    <IdeaHubInputs title="Select and search users to add in group" input="Select and search users to add in group" />
    <View style={styles.infoContainer}>
        <Text style={styles.infoText}>You can manage the group member adding or removing the user.</Text>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
        
    </View>
  </View>
  <AllBtn 
      title="Save Changes"
      onTab={() => {
        navigation.navigate('MyProfile');
      }}
    />
   </View>
  )
}

export default EditGrpSheet

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
      container1: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FEC5B5',
        marginBottom: 10,
        marginHorizontal: 10,
        //  marginVertical: 20
      },
      txt1: {
        fontSize: 12,
        fontWeight: '500',
        paddingRight: 20
      },
      txt2: {
        fontSize: 10,
        fontWeight: '500',
        color: '#747474',
      },

})