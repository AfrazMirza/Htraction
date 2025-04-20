import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useRef, useState } from 'react';
import ContactUs from './ContactUs';
import RBSheet from 'react-native-raw-bottom-sheet';
// import {useNavigation} from '@react-navigation/native';

const ZepTechCompany = () => {
    const panelRef = useRef(null)
      const [modalVisible, setModalVisible] = useState(false); 
          const [activeOption, setActiveOption] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>Company Profile</Text>
      <View style={styles.container1}>
        <View style={{flex:0.3, alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 101}}
          source={require('../../assets/KumarRohit.png')}
        />
        </View>
        <View style={styles.container2}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#FA4616'}}>
              ZepTech
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{paddingRight: 4, width: 20, height: 20}}
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
        <View style={styles.followView}>
          <Text style={styles.txt1}>67</Text>
          <Text style={styles.txt2}>Following</Text>
        </View>
        <View style={styles.followView}>
          <Text style={styles.txt1}>13</Text>
          <Text style={styles.txt2}>Post</Text>
        </View>
        <View style={styles.followView}>
          <Text style={styles.txt1}>0</Text>
          <Text style={styles.txt2}>Announcement</Text>
        </View>
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
                       style={styles.modalBackground}
                       activeOpacity={1}
                       onPress={() => setModalVisible(false)}>
                       <View style={styles.modalContainer}>
                         <TouchableOpacity 
                           style={[
                             styles.optionButton,  {borderTopLeftRadius: 10,
                               borderTopRightRadius: 10,},
                             activeOption === 'copy' && styles.optionButtonActive
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
                             styles.optionButton,  {borderBottomLeftRadius: 10,
                               borderBottomRightRadius: 10,},
                             activeOption === 'edit' && styles.optionButtonActive
                           ]}
                           onPressIn={() => setActiveOption('edit')}
                           onPressOut={() => setActiveOption(null)}
                           onPress={() => {
                             setModalVisible(false);
                             // Handle delete post
                           }}
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
    flex:0.2
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
    alignItems: 'center',
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
    fontWeight: '400',
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
  modalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    // justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 13,
    marginTop: 133
  },
  modalContainer: {
    width: '40%',
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
});
