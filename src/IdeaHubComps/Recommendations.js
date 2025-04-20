import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IdeaHubInputs from './IdeaHubInputs';
import AllBtn from '../components/AllBtn';

const Recommendations = ({panelRef, navigation}) => {
    const Profile = () => {
            return (
              <View >
               <TouchableOpacity style={styles.container1}>
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
    const [modalVisible, setModalVisible] = useState(false);
  return (
     <View style={styles.mainContainer}>
        {/* <View style={styles.contentContainer}> */}
            <View style={styles.infoContainer}>
          <Text style={{fontSize: 16, fontWeight: '600', lineHeight: 25, marginHorizontal: 10,}}>Recommended Mentors and Investors for You</Text>
          <Text style={styles.infoText}>
            Select mentors and investors from the recommended list below to
            share this idea for evaluation.
          </Text>
          <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
     </View>
     <AllBtn 
     style={styles.buttonContainer}
         title="Share Idea"
         onTab={() => {
            setModalVisible(true)
         }}
       />
        {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
                 <Modal
                   animationType="fade"
                   transparent={true}
                   visible={modalVisible}
                   onRequestClose={() => setModalVisible(false)}>
                   <View style={styles.modalBackground}>
                     <View style={styles.modalContainer}>
                       <View style={{alignSelf: 'flex-end'}}>
                         <TouchableOpacity onPress={() => setModalVisible(false)}>
                           <Image
                             style={{width: 14, height: 14}}
                             source={require('../../assets/cross.png')}
                           />
                         </TouchableOpacity>
                       </View>
                       <View
                         style={{
                           alignItems: 'center',
                           justifyContent: 'center',
                           marginBottom: 10,
                         }}>
                         <Image
                           style={{width: 60, height: 61}}
                           source={require('../../assets/circleRight.png')}
                         />
                       </View>
                       {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
                       <Text style={styles.modalMessage}>
                       Your idea has been successfully shared with the users.
                       </Text>
           
                       {/* Close Button */}
                       <TouchableOpacity style={styles.closeButton}>
                         <Text style={styles.closeButtonText}>OK</Text>
                       </TouchableOpacity>
                     </View>
                   </View>
                 </Modal>
      </View>
      )
  
}

export default Recommendations

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        justifyContent: 'space-between', // Pushes content and button apart
        paddingBottom: 20, // Padding to avoid bottom edge
      },
      contentContainer: {
        // flex: 1, // Takes up all available space pushing button to bottom
    },
      buttonContainer: {
        paddingHorizontal: 10,
        marginBottom: 20, // Add margin at the bottom
    },
      infoContainer: {
        marginVertical: 10,
      },
      infoText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 25,
        marginHorizontal: 10,
        paddingBottom: 10,
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
         // CSS of the Modal containers
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // ✅ Shadow for Android
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FA4616',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

})