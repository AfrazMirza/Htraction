import {Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const NotificationComp3 = () => {
     const [modalVisible, setModalVisible] = useState(false); 
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
          source={require('../../assets/detailsImg.png')}
        />

        <View style={{paddingHorizontal: 10, gap: 5}}>
          <View
            style={{
              width: '85%',
              //   backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', fontSize: 14}}>
              Collaboration invite Accepted
            </Text>
            <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
              12:47 AM
            </Text>
          </View>
          <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>
            Lorem Ipsum is a dummy text of the printing and typesetting industry
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
            onPress={()=>setModalVisible(true)}
              style={{
                width: '21%',
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#10B981',
                borderRadius: 6,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}>
              <Text style={{fontWeight: '700', fontSize: 10, color: '#FFFFFF'}}>
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '21%',
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EF4444',
                borderRadius: 6,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}>
              <Text style={{fontWeight: '700', fontSize: 10, color: '#FFFFFF'}}>
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

{/*this model can show the popup on the screen wen the contact button is triggured every time*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
             <View style={{alignSelf: 'flex-end'}}><TouchableOpacity onPress={() => setModalVisible(false)}>
                      <Image
                        style={{width: 14, height: 14}}
                        source={require('../../assets/cross.png')}
                      />
                    </TouchableOpacity></View>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 10,}}>
                      <Image style={{width: 60, height: 61}}
                        source={require('../../assets/circleRight.png')}/>
                    </View>
            {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
            <Text style={styles.modalMessage}>Request Accepted! You can now evaluate this idea</Text>

            {/* Close Button */}
            <TouchableOpacity  style={styles.closeButton}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default NotificationComp3;

const styles = StyleSheet.create({
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
        shadowOffset: { width: 0, height: 4 },
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
