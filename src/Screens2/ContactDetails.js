import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';
import { useNavigation } from '@react-navigation/native';


const ContactDetails = () => {
      const navigation = useNavigation();
      const [modalVisible, setModalVisible] = useState(false); 
  return (
    <ScrollView>
      <View style={{paddingBottom: 45}}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/arrowleft.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: '#ffffff',
              paddingHorizontal: 10,
            }}>
            Create Company page
          </Text>
        </View>
        <Text style={styles.txt}>Contact Details</Text>
        <Text style={{ fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
    color: '#858585',
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 24,}}>Contact Number</Text>
        <AllInputs title="Contact Number" input="Contact Number" />
        <AllInputs title="Email Address" input="Email Address" />
        <AllInputs title="Enter the contact us ULR" input="URL" />

        <Text style={styles.txt}>Address</Text>
        <AllInputs title="Address" input="Address Line 1" />
        <AllInputs title="Address line 2" input="Address line 2" />
        <AllInputs title="Country" input="India" />
        <AllInputs title="State" input="State" />
        <AllInputs title="City" input="City" />
        <AllInputs title="Zip Code" input="Zip Code" />

        <AllBtn
          onTab={() => setModalVisible(true)}
          title="Contact"
        />
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
                    <View style={{width: 64, height: 64,borderColor: '#85dbbf', borderWidth: 7, borderRadius: 50, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center', marginBottom: 10,}}>
                      <Image style={{width: 24, height: 17}}
                        source={require('../../assets/rightBtn.png')}/>
                    </View>
            {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
            <Text style={styles.modalMessage}>Congratulations, Your Company's Profile
            page has been successfully created.</Text>

            {/* Close Button */}
            <TouchableOpacity  style={styles.closeButton}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

export default ContactDetails

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // width: 375,
        // height: 98,
        backgroundColor: '#FA4616',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 15,
        paddingTop: 45,
      },
      txt: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingTop: 10,
        color: '#383838',
      },
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
})