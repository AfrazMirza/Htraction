import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const Collaborators = () => {
  const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false); 
      const [activeOption, setActiveOption] = useState(null);
    return (
      <View style={styles.container}>
       {/* <TouchableOpacity > */}
       <Image
          style={{width: 28, height: 28, marginRight: 10}}
          source={require('../../assets/Ron.png')}
        />
        <View>
          <View>
            <Text style={styles.txt1}>Jeff Bezoz</Text>

            <Text style={styles.txt2}>jeff@yopmail.com</Text>
          </View>
        </View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{justifyContent: 'center', marginLeft: 165,}} ><Text style={[styles.txt2, {color: '#fa4616'}]}>View <Image style={{width: 7, height: 4}} source={require('../../assets/orangeBelowArrow.png')}/></Text></TouchableOpacity>
       {/* </TouchableOpacity> */}

       {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
             <Modal
                     animationType="fade"
                     transparent={true}
                     visible={modalVisible}
                     onRequestClose={() => setModalVisible(false)} // if we want Close modal on back press we can comment this line also.
                   >
                     <TouchableOpacity 
                 style={styles.modalBackground}
                 activeOpacity={1}
                 onPress={() => setModalVisible(false)}>
                 <View style={styles.modalContainer}>
                   <TouchableOpacity 
                     style={[
                       styles.optionButton,  {borderTopLeftRadius: 10,
                         borderTopRightRadius: 10,},
                       activeOption === 'copy' && styles.optionButtonActive
                     ]}
                     onPressIn={() => setActiveOption('copy')}
                     onPressOut={() => setActiveOption(null)}
                     onPress={() => {
                       setModalVisible(false);
                       // Handle copy post link
                     }}
                     activeOpacity={1}>
                     <Text>Co-Founder</Text>
                   </TouchableOpacity>
                   
                   <TouchableOpacity 
                     style={[
                       styles.optionButton,
                       activeOption === 'view' && styles.optionButtonActive
                     ]}
                     onPressIn={() => setActiveOption('view')}
                     onPressOut={() => setActiveOption(null)}
                     onPress={() => {
                       setModalVisible(false);
                       // Handle view post
                     }}
                     activeOpacity={1}>
                     <Text>View</Text>
                   </TouchableOpacity>
                   
                   {/* <TouchableOpacity 
                     style={[
                       styles.optionButton,
                       activeOption === 'edit' && styles.optionButtonActive
                     ]}
                     onPressIn={() => setActiveOption('edit')}
                     onPressOut={() => setActiveOption(null)}
                     onPress={() => {
                       setModalVisible(false);
                       // Handle edit post
                     }}
                     activeOpacity={1}>
                     <Text>Edit post</Text>
                   </TouchableOpacity> */}
                   
                   <TouchableOpacity 
                     style={[
                       styles.optionButton,  {borderBottomLeftRadius: 10,
                         borderBottomRightRadius: 10,},
                       activeOption === 'delete' && styles.optionButtonActive
                     ]}
                     onPressIn={() => setActiveOption('delete')}
                     onPressOut={() => setActiveOption(null)}
                     onPress={() => {
                       setModalVisible(false);
                       // Handle delete post
                     }}
                     activeOpacity={1}>
                     <Text>Remove user</Text>
                   </TouchableOpacity>
                 </View>
               </TouchableOpacity>
       
                   </Modal>
      </View>
    );
  };
  return (
    <View style={{marginHorizontal: 10, marginVertical: 20}}>
      <Profile />
    </View>
  );
};

export default Collaborators;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC5B5',
    marginBottom: 10,
  },
  txt1: {
    fontSize: 12,
    fontWeight: '500',
  },
  txt2: {
    fontSize: 10,
    fontWeight: '500',
    color: '#747474',
  },
  modalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
    marginTop: 250,
  },
  modalContainer: {
    width: '35%',
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 2,
    borderColor: '#EFBBAB',
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: 'lime',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5, // ✅ Shadow for Android
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '100%',
    // borderRadius: 10,
  },
  optionButtonActive: {
    backgroundColor: '#FFF3ED',
  },
});
