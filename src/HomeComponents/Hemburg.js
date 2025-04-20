import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useRef } from 'react';
import {SearchBar} from 'react-native-screens';
import {TextInput} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from './BottomSheet';
import InviteUser from './InviteUser';
import { useNavigation } from '@react-navigation/native';

const Hemburg = () => {
  const panelRef = useRef(null)
  const navigation = useNavigation();
  
  console.log("naaaa", navigation);
  
  // This opens the drawer when click on the profile image
  const openDrawer = () => {

    navigation.openDrawer();
    console.log('zdjdj')
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <View style={styles.subContainer1}>
          <TouchableOpacity onPress={openDrawer}>
          <Image
            style={styles.img1}
            source={require('../../assets/profile1.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.txt1}>Hello</Text>
            <Text style={styles.txt2}>Kumar Rohit!</Text>
          </View>
        </View>
        <View style={styles.subContainer2}>
            {/* <TouchableOpacity onPress={()=> {navigation.navigate('Setting')}} style={{borderRadius: 10,borderWidth: 1, borderColor: '#646464', margin: 5, paddingHorizontal: 5, paddingVertical: 5  }}><Text style={[styles.txt2, {fontSize: 18,}]}>Setting</Text></TouchableOpacity> */}
          <TouchableOpacity onPress={() => panelRef.current.open()} style={styles.btn}>
            <Image
              style={{width: 8, height: 8}}
              source={require('../../assets/plusicon.png')}
            />            
            <Text style={styles.btnTxt}>Invite User</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}}>
            <Image
              style={{width: 23, height: 23}}
              source={require('../../assets/notificationIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
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
          <InviteUser panelRef={panelRef}/>
        </RBSheet>
    </View>
  );
};

export default Hemburg;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FA4616',
    gap: 10,
    height: 157,
  },
  container1: {
    marginTop: '43',
    // backgroundColor: 'red',
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFB093',
    alignSelf: 'center',
    width: '93%',
    height: '41',
    backgroundColor: '#FF7441',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  subContainer1: {
    flexDirection: 'row',
    gap: 4,
  },
  subContainer2: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FFFFFF',
    gap: 5,
    width: 85,
    height: 27,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  btnTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
  },
  txt1: {
    fontSize: 20,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  txt2: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  txt3: {
    fontSize: 14,
    fontWeight: '400',
  },
  img1: {
    height: 43,
    width: 43,
  },
  img2: {
    width: 16.2,
    height: 16.2,
  },
});
