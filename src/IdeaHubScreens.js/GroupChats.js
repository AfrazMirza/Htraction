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
import ChatHeader from './ChatHeader';

const GroupChats = () => {

  return (
    <View style={{flex: 1}}>
      {/* name of the users and groups which we can chat with  */}
      <ChatHeader image={require('../../assets/profile1.png')} name='kumar rohit  group' post='Edward coll..., Edward  collinRon...'/>
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

    </View>
  );
};

export default GroupChats;

const styles = StyleSheet.create({
 
  inputContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#FEC7B9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderLeftColor: '#FEC7B9',
    borderLeftWidth: 0.2,
    borderRightColor: '#FEC7B9',
    borderRightWidth: 0.2,
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
