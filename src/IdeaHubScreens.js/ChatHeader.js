import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import RateIdeaSheet from '../IdeaHubComps/RateIdeaSheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import MngGrpMbrsSheet from '../IdeaHubComps/MngGrpMbrsSheet';
import EditGrpSheet from '../IdeaHubComps/EditGrpSheet';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = ({name, post, image}) => {
     const navigation = useNavigation();
      const [modalVisible, setModalVisible] = useState(false);
        const [activeOption, setActiveOption] = useState(null);
         const panelRef = useRef(null);
          const grpDetails = useRef(null);
          const rateIdea = useRef(null);
  return (
    <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{width: 15, height: 15, marginRight: 10}}
                source={require('../../assets/arrowleft.png')}
              />
            </TouchableOpacity>
            <View style={styles.profile}>
              <Image
                style={{width: 36, height: 36}}
                source={image}
              />
              <View>
                <Text style={styles.profileName}>{name}</Text>
                <Text style={styles.profileTxt}>
                  {post}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.containerBtn}
              onPress={() => setModalVisible(true)}>
              <Image
                style={styles.containerBtnImg}
                source={require('../../assets/whiteDots.png')}
              />
            </TouchableOpacity>

            
                 {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
                       <Modal
                               animationType="fade"
                               transparent={true}
                               visible={modalVisible}
                               onRequestClose={() => setModalVisible(false)} // if we want Close modal on back press we can comment this line also.
                             >
                               <TouchableOpacity 
                           style={styles.modalBackground}
                           activeOpacity={1}
                           onPress={() => setModalVisible(false)}>
                           <View style={styles.modalContainer}>
                             <TouchableOpacity 
                               style={[
                                 styles.optionButton,  {borderTopLeftRadius: 10,
                                   borderTopRightRadius: 10,},
                                 activeOption === 'manage' && styles.optionButtonActive
                               ]}
                               onPressIn={() => setActiveOption('manage')}
                               onPressOut={() => setActiveOption(null)}
                               onPress={() => {
                                 setModalVisible(false);
                                 // Handle copy post link
                               }}
                               activeOpacity={1}>
                               <Text>Manage Members</Text>
                             </TouchableOpacity>                 
                             <TouchableOpacity 
                               style={[
                                 styles.optionButton,
                                 activeOption === 'edit' && styles.optionButtonActive
                               ]}
                               onPressIn={() => setActiveOption('edit')}
                               onPressOut={() => setActiveOption(null)}
                               onPress={() => {
                                 setModalVisible(false);
                                 // Handle edit post
                               }}
                               activeOpacity={1}>
                               <Text>Edit Group Details</Text>
                             </TouchableOpacity>
                             
                             <TouchableOpacity 
                               style={[
                                 styles.optionButton,  {borderBottomLeftRadius: 10,
                                   borderBottomRightRadius: 10,},
                                 activeOption === 'delete' && styles.optionButtonActive
                               ]}
                               onPressIn={() => setActiveOption('delete')}
                               onPressOut={() => setActiveOption(null)}
                               onPress={() => {
                                 setModalVisible(false);
                                 // Handle delete post
                               }}
                               activeOpacity={1}>
                               <Text>Delete Group</Text>
                             </TouchableOpacity>
                           </View>
                         </TouchableOpacity>
                 
                             </Modal>
            
                  <RBSheet
                    ref={panelRef}
                    height={715} // Adjust height as needed
                    openDuration={250}
                    closeOnDragDown={false}
                    customStyles={{
                      container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
                    }}>
                    {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
                    <MngGrpMbrsSheet panelRef={panelRef} />
                  </RBSheet>
            
                  <RBSheet
                    ref={grpDetails}
                    height={715} // Adjust height as needed
                    openDuration={250}
                    closeOnDragDown={false}
                    customStyles={{
                      container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
                    }}>
                    {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
                    <EditGrpSheet grpDetails={grpDetails} />
                  </RBSheet>
            
                  <RBSheet
                    ref={rateIdea}
                    height={850} // Adjust height as needed
                    openDuration={250}
                    closeOnDragDown={false}
                    customStyles={{
                      container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
                    }}>
                    {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
                    <RateIdeaSheet rateIdea={rateIdea} />
                  </RBSheet>
          </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        // width: 375,
        // height: 98,
        backgroundColor: '#FA4616',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 15,
        paddingTop: 45,
      },
      containerBtn: {
        // marginLeft: 40,
      },
      containerBtnImg: {
        width: 5,
        height: 24,
        // marginRight: 10,
      },
      profile: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, // This will make the profile take up available space
        // marginLeft: 5,
      },
      profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 26,
        paddingHorizontal: 10,
      },
      profileTxt: {
        fontSize: 14,
        fontWeight: '400',
        color: '#ffffff',
        lineHeight: 26,
        paddingHorizontal: 10,
      },
      modalBackground: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 25,
        marginTop: 35,
      },
      // modalContainer: {
      //   width: '35%',
      //   backgroundColor: '#fff',
      //   borderRadius: 10,
      //   borderWidth: 1,
      //   borderColor: '#EFBBAB',
      //   paddingVertical: 10,
      //   paddingHorizontal: 15,
      //   // backgroundColor: 'lime',
      //   alignItems: 'center',
      //   shadowColor: '#000',
      //   shadowOffset: {width: 0, height: 4},
      //   shadowOpacity: 0.25,
      //   shadowRadius: 4,
      //   elevation: 5, // ✅ Shadow for Android
      // },
      modalContainer: {
        width: '45%',
        backgroundColor: '#fff',
        borderRadius: 10,
        // padding: 2,
        borderColor: '#EFBBAB',
        borderWidth: 1,
        borderRadius: 10,
        // backgroundColor: 'lime',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 5, // ✅ Shadow for Android
      },
      optionButton: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: '100%',
        // borderRadius: 10,
      },
      optionButtonActive: {
        backgroundColor: '#FFF3ED',
      },
})