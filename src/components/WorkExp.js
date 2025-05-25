import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from '../HomeComponents/BottomSheet';

const WorkExp = props => {
  const companies = [
    {
      id: 1,
      image: require('../../assets/mainImage.png'),
      institude: 'Career Point University Kota',
      degree: 'MCA',
      start: '03/2021',
      end: '08/2025',
      // details: 'Lorem Ipsum is simply dummy text of the...',
      edit: require('../../assets/edit.png'),
      delete: require('../../assets/delete.png'),
    },
    {
      id: 2,
      image: require('../../assets/mainImage.png'),
      institude: 'Career Point University Kota',
      degree: 'MCA',
      start: '03/2021',
      end: '08/2025',
      // details: 'Lorem Ipsum is simply dummy text of the...',
      edit: require('../../assets/edit.png'),
      delete: require('../../assets/delete.png'),
    },
    {
      id: 3,
      image: require('../../assets/mainImage.png'),
      institude: 'Career Point University Kota',
      degree: 'MCA',
      start: '03/2021',
      end: '08/2025',
      // details: 'Lorem Ipsum is simply dummy text of the...',
      edit: require('../../assets/edit.png'),
      delete: require('../../assets/delete.png'),
    },
  ];
  const panelRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <View style={{flex: 1, paddingVertical: 10}}>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Education</Text>
          <TouchableOpacity
            onPress={() => {
              panelRef.current.open();
              setIsEditing(false);
            }}
            style={styles.expBtn}>
            <Image
              style={{width: 8, height: 8}}
              source={require('../../assets/plusOrange.png')}
            />
            <Text style={{fontSize: 10, fontWeight: '600', color: '#FA4616'}}>
              Add Education
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={companies}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{paddingHorizontal: 5}}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 12,
                paddingBottom: 10,
                borderBottomColor: '#E0E0E0',
                borderBottomWidth: 1,
              }}>
              <View style={{flex: 0.22}}>
                <Image
                  style={{width: 69, height: 72, borderRadius: 5}}
                  source={require('../../assets/mainImage.png')}
                />
              </View>
              <View
                style={{
                  flex: 0.68,
                  justifyContent: 'space-evenly',
                  alignItems: 'flex-start',
                  //   backgroundColor: 'red',
                }}>
                <Text style={{fontSize: 14, fontWeight: '700'}}>
                  {item.institude}
                </Text>
                <Text style={{fontSize: 13, fontWeight: '500'}}>
                  {item.degree}
                </Text>
                <Text style={{fontSize: 13, fontWeight: '500'}}>
                  {item.start}
                </Text>
                <Text style={{fontSize: 13, fontWeight: '500'}}>
                  {item.end}
                </Text>
                {/* <Text
                  style={{fontSize: 12, fontWeight: '400'}}
                  numberOfLines={1}>
                  {item.details}
                </Text> */}
              </View>
              <View
                style={{
                  flex: 0.1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  // paddingHorizontal: 7,
                  paddingVertical: 3,
                  // backgroundColor: 'red'
                }}>
                <TouchableOpacity
                  onPress={() => {
                    panelRef.current.open();
                    setIsEditing(true);
                  }}>
                  <Image
                    style={{width: 11.5, height: 10.9}}
                    source={item.edit}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image
                    style={{width: 9.43, height: 10.67}}
                    source={item.delete}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <RBSheet
        ref={panelRef}
        height={630} // Adjust height as needed
        openDuration={250}
        closeOnDragDown={false}
        customStyles={{
          container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
        }}>
        {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
        <BottomSheet panelRef={panelRef} isEditing={isEditing}/>
      </RBSheet>

      {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
           
            <Image
              style={{width: 64, height: 64, marginBottom: 20}}
              source={require('../../assets/redAlert.png')}
            />
            <Text style={styles.modalMessage}>
              Are you sure you want to delete this education record?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'lime',
                gap: 10,
                justifyContent: 'space-between',
              }}>
              {/* Close Button */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancleBtn}>
                <Text style={styles.cancleBtnTxt}>Cancle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn}>
                <Text style={styles.deleteBtnTxt}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WorkExp;

const styles = StyleSheet.create({
  expBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FA4616',
    gap: 5,
    width: 107,
    height: 27,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  txt: {
    fontSize: 13,
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
  closeButton: {
    backgroundColor: '#FA4616',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
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
