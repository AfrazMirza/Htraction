import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PDFCards from './PDFCards';

const Document = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>Document</Text>
      <View>
        <View
          style={styles.pfdCardsView}>
          <PDFCards />
          <PDFCards />
          <PDFCards />
        </View>
        <View
          style={styles.pfdCardsView}>
          <PDFCards />
          <PDFCards />
          <PDFCards />
        </View>
        <View
          style={styles.pfdCardsView}>
          <PDFCards />
          <PDFCards />
          <PDFCards />
        </View>
         <View
          style={styles.pfdCardsView}>
          <PDFCards />
          <PDFCards />
          <PDFCards />
        </View>
      </View>
      <View style={styles.uploadButtonContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btn}>
          <Image
            style={styles.btnImg}
            source={require('../../assets/uploadFiles.png')}
          />
          <Text style={styles.btnTxt}>UploadFile</Text>
        </TouchableOpacity>
      </View>

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
              You have successfully upload the document!
            </Text>

            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Document;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  containerTxt: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 15,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#FA4616',
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnTxt: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  btnImg: {
    width: 18,
    height: 22,
    marginRight: 5,
  },
  pfdCardsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  uploadButtonContainer: {
    position: 'absolute',
    right: 0,
    bottom: -60,
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
});
