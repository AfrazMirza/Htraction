import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import InviteUser from '../HomeComponents/InviteUser'
import { useNavigation } from '@react-navigation/native'

const ConnetionsComp = () => {
    const navigation = useNavigation();
    const panelRef = useRef(null)
    const RemoveConnection = () => {
        const [modalVisible, setModalVisible] = useState(false);
        return (
            <View style={styles.RemoveConnectionContainer}>
             
              <TouchableOpacity onPress={() => setModalVisible(true)}
               style={{flexDirection: 'row', alignItems: 'center',
        justifyContent: 'center',  gap: 13,
        paddingHorizontal: 12,
        // paddingTop: 20,
        // paddingBottom: 18,
      }}>
                <Image
                    style={{width: 28, height: 28}}
                    source={require('../../assets/deleteUser.png')}
                  />
                <Text style={{fontSize: 18, fontWeight: '600'}}>Remove Connection</Text>
                </TouchableOpacity>

                 {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
                      <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        >
                        <View style={styles.modalBackground}>
                          <View style={styles.modalContainer}>
                              {/* <Image
                                style={{width: 64, height: 64, marginBottom: 20,}}
                                source={require('../../assets/redAlert.png')}
                              /> */}
                            {/* </View> */}
                            {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
                            <Text style={styles.modalMessage}>Remove Connection?
                            </Text>
                            <Text style={styles.modalMessage2}>Would you like to remove Afraz Mirza from your connections?</Text>
                
                            <View
                              style={{
                                flexDirection: 'row',
                                // backgroundColor: 'lime',
                                gap: 10,
                                justifyContent: 'space-between',
                              }}>
                              {/* Close Button */}
                              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Cancle</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Remove</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </Modal>
            </View>
          )
    }
  return (
    <SafeAreaView>
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              paddingHorizontal: 10,
            //   paddingRight: 10,
              paddingVertical: 10,
              borderBottomColor: '#ECECEC',
              borderBottomWidth: 1,
            }}>
            <Image
              style={{
                width: 54,
                height: 54,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: '#FA4616',
              }}
              source={require('../../assets/Ron1.png')}
            />
    
            <View style={{paddingHorizontal: 10}}>
              <View
                style={{
                  width: '95%' ,
                //   backgroundColor: 'lime',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                }}>
                <Text style={{fontWeight: '600', fontSize: 14}}>Afraz Mirza</Text>
                {/* <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
                  12:47 AM
                </Text> */}
                <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => panelRef.current.open()}>
                         <Image style={{paddingRight: 4, width: 20, height: 20}} source={require('../../assets/3dots.png')}/>
                         </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('NewMessage')}} style={styles.sendButton}>
                            <Image
                              style={{width: 17, height: 17}}
                              source={require('../../assets/send.png')}
                            />
                          </TouchableOpacity>
                </View>
              </View>
              <Text style={{fontWeight: '400', fontSize: 12}}>React Native Developer
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>Connected 10 months ago
              </Text>
            </View>
            <RBSheet
          ref={panelRef}
          height={63} // Adjust height as needed
          openDuration={250}
          closeOnDragDown={false}
          customStyles={{
            container: { borderTopLeftRadius: 15, borderTopRightRadius: 15,  },
          }}
        >
          {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
          <RemoveConnection panelRef={panelRef}/>
        </RBSheet>
          </View>
        </SafeAreaView>
  )
}

export default ConnetionsComp

const styles = StyleSheet.create({
    RemoveConnectionContainer: {
        
        alignItems: 'center',
        justifyContent: 'center',
        gap: 13,
        paddingHorizontal: 12,
        paddingTop: 20,
        paddingBottom: 18,
        backgroundColor: '#FFE5D5',
      },
      // css for model
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
  modalMessage2: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FA4616',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})