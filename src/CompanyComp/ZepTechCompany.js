import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useRef, useState } from 'react';
import ContactUs from './ContactUs';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';

const ZepTechCompany = () => {
  const navigation = useNavigation()
    const panelRef = useRef(null)
      const [modalVisible, setModalVisible] = useState(false); 
          const [activeOption, setActiveOption] = useState(null);
           const [profileData, setProfileData] = useState({});
            const editProfilePic = useRef(null)
const [deleteProfile, setDeleteProfile] = useState(false);

const EditCompanyProfile = ({panelRef}) => {
    return (
      <View>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity onPress={() => panelRef.current.close()}>
            <Image
              style={{width: 14, height: 14}}
              source={require('../../assets/cross.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Upload Profile</Text>
        </View>
        <View style={{paddingVertical: 15, paddingHorizontal: 15}}>
          <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
          <Image style={{width: 22.5, height: 18}} source={require('../../assets/uploadProfile.png')}/>
          <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 26, color: '#383838', paddingLeft: 5}}>View or edit profile photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDeleteProfile(true)} style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
            <Image style={{width: 22, height: 22}} source={require('../../assets/deleteProfile.png')}/>
          <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 26, color: '#383838', paddingLeft: 5}}>Delete profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>Company Profile</Text>
      <View style={styles.container1}>
        <View style={{ position: 'relative', width: 100, height: 101 }}>
              <Image
                 style={{width: 100, height: 101}}
                 source={require('../../assets/detailsImg.png')}
               />
               <TouchableOpacity    style={{
             position: 'absolute',
             bottom: 5,
             right: 2,
             backgroundColor: '#FA4616',
             padding: 6,
             borderRadius: 20,
           }}
           onPress={() => editProfilePic.current.open()}>
                 <Image style={{width: 12, height: 12}} source={require('../../assets/editProfile.png')}/>
               </TouchableOpacity>
              </View>
        <View style={styles.container2}>
          <View style={{flexDirection: 'row', width: '220', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: '600',}}>
              ZepTech
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{paddingLeft: 4, width: 20, height: 20}}
              source={require('../../assets/3dots.png')}
            />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#444444'}}>
            Service Provider
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#444444'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting...
          </Text>
          {/* <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('EditProfile');
                  navigation.navigate('ContactDetails');
                }}
                style={styles.btn}>
                <Text style={styles.btntxt}>Edit Profile</Text>
              </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.followView}>
          <Text style={styles.txt1}>122</Text>

          <Text style={styles.txt2}>Followers</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Connections')} style={styles.followView}>
          <Text style={styles.txt1}>67</Text>
          <Text style={styles.txt2}>Connections</Text>
        </TouchableOpacity>
        <View style={styles.followView}>
          <Text style={styles.txt1}>13</Text>
          <Text style={styles.txt2}>Post</Text>
        </View>
        {/* <View style={styles.followView}>
          <Text style={styles.txt1}>0</Text>
          <Text style={styles.txt2}>Announcement</Text>
        </View> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 30,

        }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Website</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>panelRef.current.open()} style={styles.btn}>
          <Text style={styles.btnTxt}>Contact Us</Text>
        </TouchableOpacity>
      </View>
       {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
                   <Modal
                           animationType="fade"
                           transparent={true}
                           visible={modalVisible}
                           onRequestClose={() => setModalVisible(false)} // if we want Close modal on back press we can comment this line also.
                         >
                           <TouchableOpacity 
                       style={styles.modalBackgroundEditBtn}
                       activeOpacity={1}
                       onPress={() => setModalVisible(false)}>
                       <View style={styles.modalContainerEditBtn}>
                         <TouchableOpacity 
                           style={[
                             styles.optionButtonEditBtn,  {borderTopLeftRadius: 10,
                               borderTopRightRadius: 10,},
                             activeOption === 'copy' && styles.optionButtonActiveEditBtn
                           ]}
                           onPressIn={() => setActiveOption('copy')}
                           onPressOut={() => setActiveOption(null)}
                           onPress={() => {
                             setModalVisible(false);
                             // Handle copy post link
                           }}
                           activeOpacity={1}>
                           <Text>Copy profile link</Text>
                         </TouchableOpacity>
                         
                         {/* <TouchableOpacity 
                           style={[
                             styles.optionButton,
                             activeOption === 'view' && styles.optionButtonActive
                           ]}
                           onPressIn={() => setActiveOption('view')}
                           onPressOut={() => setActiveOption(null)}
                           onPress={() => {
                             setModalVisible(false);
                             // Handle view post
                           }}
                           activeOpacity={1}>
                           <Text>View</Text>
                         </TouchableOpacity> */}
                         
                         {/* <TouchableOpacity 
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
                           <Text>Edit post</Text>
                         </TouchableOpacity> */}
                         
                         <TouchableOpacity 
                           style={[
                             styles.optionButtonEditBtn,  {borderBottomLeftRadius: 10,
                               borderBottomRightRadius: 10,},
                             activeOption === 'edit' && styles.optionButtonActiveEditBtn
                           ]}
                           onPressIn={() => setActiveOption('edit')}
                           onPressOut={() => setActiveOption(null)}
                           onPress={() => {
              navigation.navigate('EditCompanyProfile');}}
                           activeOpacity={1}>
                           <Text>Edit profile</Text>
                         </TouchableOpacity>
                       </View>
                     </TouchableOpacity>
             
                         </Modal>
      <RBSheet
                ref={panelRef}
                height={375} // Adjust height as needed
                openDuration={250}
                closeOnDragDown={false}
                customStyles={{
                  container: { borderTopLeftRadius: 15, borderTopRightRadius: 15,  },
                }}
              >
                {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
                <ContactUs panelRef={panelRef}/>
              </RBSheet>

              {/* edit company profile RBSheet */}
              <RBSheet
          ref={editProfilePic}
          height={185} // Adjust height as needed
          openDuration={250}
          closeOnDragDown={false}
          customStyles={{
            container: { borderTopLeftRadius: 15, borderTopRightRadius: 15,  },
          }}
        >
          {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
          <EditCompanyProfile panelRef={editProfilePic}/>
        </RBSheet>

         {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
              <Modal
                animationType="fade"
                transparent={true}
                visible={deleteProfile}
                onRequestClose={() => setDeleteProfile(false)}
                >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                      <Image
                        style={{width: 64, height: 64, marginBottom: 20,}}
                        source={require('../../assets/redAlert.png')}
                      />
                    {/* </View> */}
                    {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
                    <Text style={styles.modalMessage}>
                    Are you sure you want to delete profile image?
                    </Text>
        
                    <View
                      style={{
                        flexDirection: 'row',
                        // backgroundColor: 'lime',
                        gap: 10,
                        justifyContent: 'space-between',
                      }}>
                      {/* Close Button */}
                      <TouchableOpacity onPress={() => setDeleteProfile(false)} style={styles.cancleBtn}>
                        <Text style={styles.cancleBtnTxt}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteBtn}>
                        <Text style={styles.deleteBtnTxt}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
    </View>
  );
};

export default ZepTechCompany;

const styles = StyleSheet.create({
  container: {
    // width: 375,
    // height: 263,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
  },
  containerTxt: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  container1: {
    flexDirection: 'row',
    flex:0.2,
     marginHorizontal: 15,
    gap: 14,
    // backgroundColor: 'red',
    // width: 345,
    // height: 101,
  },
  container2: {
    // backgroundColor: 'red',
    flex:0.7
    // width: 230,
    // height: 91,
  },
  container3: {
    flexDirection: 'row',
    marginTop: '15',
    justifyContent: 'space-between',
    // width: 340,
    // height: 57,
    // backgroundColor: 'white',
    marginHorizontal: 15,
  },
  followView: {
    // width: 72,
    // height: 55,
    // flexDirection: 'row',
    marginTop: '15',
    justifyContent: 'space-around',
    // width: 340,
    // height: 57,
    // backgroundColor: 'white',
    marginHorizontal: 15,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // backgroundColor: 'lightgreen',
  },
  txt1: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333333',
  },
  txt2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FA4616',
    gap: 5,
    width: 85,
    height: 27,
    paddingHorizontal: 9,
  },
  btnTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FA4616',
  },
  modalBackgroundEditBtn: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    // justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 8,
    marginTop: 140
  },
  modalContainerEditBtn: {
    width: '35%',
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
  optionButtonEditBtn: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    width: '100%',
    // borderRadius: 10,
  },
  optionButtonActiveEditBtn: {
    backgroundColor: '#FFF3ED',
  },
 editProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
  // css model for delete the profile image
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
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
  cancleBtn : {
    borderWidth: 1,
    borderColor: "#FA4616",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  cancleBtnTxt: {
    color: '#FA4616',
    fontSize: 16,
    fontWeight: '600',
  },
  deleteBtn : {
    borderWidth: 1,
    borderColor: "#FA4616",
    backgroundColor: '#FA4616',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  deleteBtnTxt: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

});
