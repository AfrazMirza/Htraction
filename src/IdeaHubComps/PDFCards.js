import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MngGrpMbrsSheet from './MngGrpMbrsSheet';
import ManageAccessSheet from './ManageAccessSheet';

const PDFCards = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [menuPosition, setMenuPosition] = useState({top: 0, left: 0});
  // const [show, setShow] = useState(false);
  // const panelRef = useRef(null);
  const handleMenuPress = (event) => {
    // Measure the position of the pressed button
    event.target.measure((x, y, width, height, pageX, pageY) => {
      setMenuPosition({
        top: pageY + height - 147, // Position below the button
        left: pageX - 87,    // Adjust horizontal position
      });
      setModalVisible(true);
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <Image
          style={{width: 34, height: 46}}
          source={require('../../assets/pdfImg.png')}
        />
      </View>
      <View style={styles.container2}>
        <View>
          <Text style={styles.subContainerTxt1}>1738305444575...</Text>
          <Text style={styles.subContainerTxt2}>1 day ago</Text>
        </View>
        <TouchableOpacity onPress={handleMenuPress}>
          <Image
            style={{width: 12, height: 14}}
            source={require('../../assets/3dots.png')}
          />
        </TouchableOpacity>
      </View>

      {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // if we want Close modal on back press we can comment this line also.
      >
         <Pressable
          style={styles.modalOverlay} 
          onPress={() => setModalVisible(false)}>
          <View style={[styles.modalContainer, {top: menuPosition.top, left: menuPosition.left}]}>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                setModalVisible(false);
                // Handle download
              }}>
              <Text>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setModalVisible(false);
                setShowDeleteModal(true);
              }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      {/* when we click on the delete button then this modal code is popup on the screen */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}>
        <View style={styles.modalBackground1}>
          <View style={styles.modalContainer1}>
            <View style={{alignSelf: 'flex-end'}}>
              <TouchableOpacity onPress={() => setShowDeleteModal(false)}>
                <Image
                  style={{width: 14, height: 14}}
                  source={require('../../assets/cross.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContainer2}>
              <Image
                style={{width: 60, height: 61}}
                source={require('../../assets/redAlert.png')}
              />
            </View>
            {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
            <Text style={styles.modalMessage1}>
              Do wish to delete this document?{' '}
            </Text>
            <Text style={styles.modalMessage2}>
              Deleting this document will permanently removed.
            </Text>

            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton1}
            onPress={() => setShowDeleteModal(false)}>
              <Text style={styles.closeButtonText1}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PDFCards;

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: '#FEC7B9',
    borderRadius: 10,
    borderWidth: 1,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  container2: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#FFF3ED',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
  },
  subContainerTxt1: {
    fontSize: 10,
    fontWeight: '600',
  },
  subContainerTxt2: {
    fontSize: 8,
    fontWeight: '400',
  },
  modalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalContainer: {
    // width: '35%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
    borderColor: '#EFBBAB',
    // borderRightColor: '#EFBBAB',
    // borderLeftColor: '#EFBBAB',
    // borderTopColor: '#EFBBAB',
    paddingVertical: 7,
    paddingHorizontal: 8,
    // backgroundColor: 'lime',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5, // ✅ Shadow for Android
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  // CSS of the Delete modal styles remain the same as your original
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
  modalContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
  modalMessage2: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    color: '#333333',
    textAlign: 'center',
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
