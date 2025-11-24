import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from './BottomSheet';
import CreatePost from '../CompanyComp/CreatePost';

const Post = () => {
  const panelRef = useRef(null);
  return (
    <>
      {/* // <View style={{alignItems: 'center', backgroundColor: 'purple'}}> */}
      <View style={styles.container}>
        <View>
          <Image
            style={{height: 31, width: 33, marginRight: 8}}
            source={require('../../assets/profile1.png')}
          />
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => panelRef.current.open()}
            style={styles.subContainerBtn1}>
            <Text style={styles.txt1}>Share Something</Text>
          </TouchableOpacity>
          <View style={styles.subContainerView}>
            <TouchableOpacity>
              <Image
                style={{width: 18, height: 18}}
                source={require('../../assets/imageUploader.png')}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity>
              <Image
                style={{width: 15.6, height: 9}}
                source={require('../../assets/videoIcon.png')}
              />
            </TouchableOpacity> */}
            <TouchableOpacity>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/happyFace.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => panelRef.current.open()}
            style={styles.subContainerBtn2}>
            <Text style={styles.txt2}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={panelRef}
        height={470} // Adjust height as needed
        openDuration={250}
        closeOnDragDown={false}
        customStyles={{
          container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
        }}>
        {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
        <CreatePost panelRef={panelRef} />
      </RBSheet>
      {/* // </View> */}
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    // width: 345,
    // height: 67,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFE5D5',
    marginHorizontal: 10,
  },
  subContainer: {
    // width: 285.56,
    // height: 50,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    width: 59.11,
    height: 11.77,
  },
  subContainerBtn1: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBD6D6',
    // height: 37,
    // width: 139,
    paddingRight: 40,
    paddingVertical: 10,
    paddingLeft: 5,
    // marginRight: 10,
  },
  subContainerBtn2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: '#FA4616',
    paddingVertical: 10,
    paddingHorizontal: 18,
    // height: 35,
    // width: 61,
  },
  txt1: {
    color: '#383838',
    fontWeight: '400',
    fontSize: 12,
  },
  txt2: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 12,
  },
});
