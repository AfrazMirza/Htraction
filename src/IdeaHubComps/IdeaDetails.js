import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import IdeaDetailsTab from './IdeaDetailsTab';
import RBSheet from 'react-native-raw-bottom-sheet';
import ShareIdeaSheet from './ShareIdeaSheet';
import { useNavigation } from '@react-navigation/native';

const IdeaDetails = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const panelRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Text style={styles.subContainer1Txt}>Idea Details</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditIdeaDetails');
            }}
            style={styles.subContainer1Btn}>
            <Text style={styles.subContainer1BtnTxt}>Draft</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer2}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={styles.subContainer2Btn}>
            <Text style={styles.subContainer2BtnTxt}>Validate this idea</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{width: 20.9, height: 18, marginHorizontal: 10}}
              source={require('../../assets/share.png')}
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => {
       navigation.navigate('CreateNewIdea', { mode: 'edit' });
     }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/EditGrey.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <IdeaDetailsTabs/> */}
      <IdeaDetailsTab />
      {/* <Tabs/> */}

      {/* when we click on the delete button then this modal code is popup on the screen */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(false)}>
        <View style={styles.modalBackground1}>
          <View style={styles.modalContainer1}>
            <View style={{alignSelf: 'flex-end'}}></View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                style={{width: 60, height: 61}}
                source={require('../../assets/redAlert.png')}
              />
            </View>
            {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
            <Text style={styles.modalMessage1}>
              Do you wish to validate this idea?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                //  backgroundColor: 'lime',
                gap: 10,
                justifyContent: 'space-between',
              }}>
              {/* Close Button */}
              <TouchableOpacity
                onPress={() => setShow(false)}
                style={styles.cancleBtn}>
                <Text style={styles.cancleBtnTxt}>Cancle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn}>
                <Text style={styles.deleteBtnTxt}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/*this is Second model that show the popup on the screen when the contact button is triggured every time*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // if we want Close modal on back press we can comment this line also.
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View>
              <TouchableOpacity
                onPress={() => panelRef.current.open()}
                style={{paddingVertical: 5}}>
                <Text>Share to Evaluate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{paddingVertical: 5}}>
                <Text>Share to collaborate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Share tao Evaluate Component sheet  */}
      <RBSheet
        ref={panelRef}
        height={730} // Adjust height as needed
        openDuration={250}
        closeOnDragDown={false}
        customStyles={{
          container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
        }}>
        <ShareIdeaSheet panelRef={panelRef} />
      </RBSheet>
    </View>
  );
};

export default IdeaDetails;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer1Txt: {
    fontWeight: '700',
    fontSize: 18,
    marginRight: 5,
  },
  subContainer1Btn: {
    backgroundColor: '#FFF3ED',
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  subContainer1BtnTxt: {
    color: '#FA4616',
    fontSize: 10,
    fontWeight: '600',
  },
  subContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-around',
    // backgroundColor: 'green'
  },
  subContainer2Btn: {
    borderColor: '#FA4616',
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 9,
  },
  subContainer2BtnTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FA4616',
  },

  modalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 38,
    marginTop: 120,
  },
  modalContainer: {
    // width: '35%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EFBBAB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: 'lime',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // ✅ Shadow for Android
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
    marginTop: 10,
    marginBottom: 60,
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
