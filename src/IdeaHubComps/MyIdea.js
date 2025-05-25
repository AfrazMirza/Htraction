import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Details from '../HomeComponents/Details';
import IdeaCards from './IdeaCards';
import IdeaRatingsCart from './IdeaRatingsCart';
import AllInputs from '../HomeComponents/AllInputs';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const MyIdea = () => {
const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [allIdea, setAllIdea] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const panelRef = useRef(null);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.containerTxt}>My Ideas</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subContainerTxt}>Sort:</Text>
          <TouchableOpacity  onPress={() => setAllIdea(true)} style={styles.subContainerBtn}>
            <Text style={styles.subContainerBtnTxt}>All Ideas</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* if needed then comment this view till line no 84 and also comment the modal component and uncomment the below code */}
      <ScrollView contentContainerStyle={{ paddingBottom: 170 }}>
      <View style={{gap: 16}}>
        <View style={{alignItems: 'center', marginHorizontal: 10, borderWidth: 1, borderColor:'#FEC7B9', borderRadius: 15}}>
         <TouchableOpacity  onPress={() => setModalVisible(true)}>
         <Image style={{width: 295, height: 175 }} source={require('../../assets/CreateIdea.png')}/>
         </TouchableOpacity>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
          <IdeaCards title1 = 'Finalize' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Finalize' title2 = 'Rated this idea'/>
          <IdeaCards title1 = 'Finalize' title2 = 'Rated this idea'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
        </View>

      </View>
      </ScrollView>
      {/* is create idea button ko baad me dekhna he   */}
        {/* <View style={styles.createButtonContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.container2Btn}>
            <Image
              style={{width: 12, height: 12, marginRight: 5}}
              source={require('../../assets/Add.png')}
            />
            <Text style={styles.container2BtnTxt}>Create New Idea</Text>
          </TouchableOpacity>
        </View> */}
      {/* <IdeaRatingsCart/>
      <AllInputs title='Idea title (maximum 50 words)' input= 'Title that best reflects your idea'/>
      <AllInputs title="Identified Problem" input="Clearly state and elaborate on the problem your idea aims to address Clearly state and elaborate on the problem your idea aims to address" customeStyle={{textAlignVertical: 'top'}} isMultiline={true} /> */}
      {/* <IdeaRatingsCart/> */}

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
                source={require('../../assets/redBulb.png')}
              />
            </View>
            {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
            <Text style={styles.modalMessage}>
            Ready to embark on a new idea journey? Let's kickstart your creative venture!
            </Text>

            {/* Close Button */}
            <TouchableOpacity
             onPress={() => {
       navigation.navigate('CreateNewIdea', { mode: 'create' });
     }} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* All Ideas Modal */}
      {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={allIdea}
        onRequestClose={() => setAllIdea(false)} // if we want Close modal on back press we can comment this line also.
      >
        <TouchableOpacity
          style={styles.modalIdeaBackground}
          activeOpacity={1}
          onPress={() => setAllIdea(false)}>
          <View style={styles.modalIdeaContainer}>
            <TouchableOpacity
              style={[
                styles.optionIdeaButton,
                {borderTopLeftRadius: 10, borderTopRightRadius: 10},
                activeOption === 'manage' && styles.optionIdeaButtonActive,
              ]}
              onPressIn={() => setActiveOption('manage')}
              onPressOut={() => setActiveOption(null)}
              //  onPress={() => {
              //    setModalVisible(false);
              //    // Handle copy post link
              //  }}
              
              activeOpacity={1}>
              <Text>All Idea</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionIdeaButton,
                activeOption === 'edit' && styles.optionIdeaButtonActive,
              ]}
              onPressIn={() => setActiveOption('edit')}
              onPressOut={() => setActiveOption(null)}
              activeOpacity={1}>
              <Text>Finalize</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionIdeaButton,
                {borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
                activeOption === 'delete' && styles.optionIdeaButtonActive,
              ]}
              onPressIn={() => setActiveOption('delete')}
              onPressOut={() => setActiveOption(null)}
              //  onPress={() => {
              //    setModalVisible(false);
              //    // Handle delete post
              //  }}
              activeOpacity={1}>
              <Text>Draft</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
};

export default MyIdea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  containerTxt: {
    fontSize: 18,
    fontWeight: '700',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subContainerTxt: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 5,
    color: '#5C5B5B',
  },
  subContainerBtn: {
    borderColor: '#FA4616',
    borderWidth: 1,
    borderRadius: 9,
  },
  subContainerBtnTxt: {
    color: '#FA4616',
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  container1: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 10,
  },
  container2Btn: {
    flexDirection: 'row',
    backgroundColor: '#FA4616',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  container2BtnTxt: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  createButtonContainer: {
    position: 'absolute',
    // bottom: 20,
    right: 20,
    // zIndex: 10,
    alignItems: 'center',
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

  // allIdea container 

  modalIdeaBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 144,
  },
  modalIdeaContainer: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 2,
    borderColor: '#EFBBAB',
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: 'lime',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5, // ✅ Shadow for Android
  },
  optionIdeaButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center'
    // borderRadius: 10,
  },
  optionIdeaButtonActive: {
    backgroundColor: '#FFF3ED',
  },
});
