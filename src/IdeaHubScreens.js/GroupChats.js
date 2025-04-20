import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import EditGrpSheet from '../IdeaHubComps/EditGrpSheet';
import MngGrpMbrsSheet from '../IdeaHubComps/MngGrpMbrsSheet';
import RateIdeaSheet from '../IdeaHubComps/RateIdeaSheet';
import {TextInput} from 'react-native-gesture-handler';
import ListCarts from '../components/ListCarts';
import Messages from '../ChatComp/Messages';

const GroupChats = () => {
  const navigation = useNavigation();
  const panelRef = useRef(null);
  const grpDetails = useRef(null);
  const rateIdea = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
    const [activeOption, setActiveOption] = useState(null);

  return (
    <View style={{flex: 1}}>
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
            source={require('../../assets/Ron.png')}
          />
          <View>
            <Text style={styles.profileName}>kumar rohit group</Text>
            <Text style={styles.profileTxt}>
              Edward coll..., Edward collinRon...
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
      </View>
      {/* add the message component after some time  */}
      <Messages />
      {/* <ListCarts/>
<ListCarts/>
<ListCarts/>
<ListCarts/>
<ListCarts/>
<ListCarts/>
<ListCarts/>
<ListCarts/> */}
      {/* message input */}

      <View style={styles.inputContainer}>
        <View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message"
              placeholderTextColor="#DBD6D6"
            />

            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 18.2, height: 16, marginRight: 5}}
                source={require('../../assets/upload.png')}
              />
              <Image
                style={{width: 15.3, height: 15}}
                source={require('../../assets/smilyIcon.png')}
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.sendButton}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/forward.png')}
            />
          </TouchableOpacity>
        </View>
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
  );
};

export default GroupChats;

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
    marginLeft: 40,
  },
  containerBtnImg: {
    width: 5,
    height: 24,
    marginRight: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
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
  inputContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#FEC7B9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FA4616',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  textInput: {
    fontSize: 14,
    fontWeight: '400',
    marginRight: 110,
  },
  sendButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 50,
    backgroundColor: '#FA4616',
  },
  // CSS of the Modal containers
  modalBackground1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer1: {
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
  modalTitle1: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  modalMessage1: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: '#333333',
    textAlign: 'center',
    // marginBottom: 20,
  },
  closeButton1: {
    backgroundColor: '#FA4616',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 15,
  },
  closeButtonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
