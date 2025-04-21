import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import RateIdeaSheet from './RateIdeaSheet';

const IdeaCards = ({title1, title2}) => {
  const navigation = useNavigation();
  const rateIdea = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({top: 0, left: 0});
  const [activeOption, setActiveOption] = useState(null);
  const handleMenuPress = event => {
    // Measure the position of the pressed button
    event.target.measure((x, y, width, height, pageX, pageY) => {
      setMenuPosition({
        top: pageY + height -38, // Position below the button
        left: pageX -135.7, // Adjust horizontal position
      });
      setModalVisible(true);
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{padding: 10, gap: 8}}>
        <View style={styles.subContainer1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditIdeaDetails');
            }}
            style={styles.subContainer1Btn}>
            <Text style={styles.subContainer1BtnTxt}>{title1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => rateIdea.current.open()}
            style={styles.subContainer1Btn}>
            <Text style={styles.subContainer1BtnTxt}>{title2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleMenuPress}
            style={{marginLeft: 125, position: 'absolute'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/3dots.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txt2}>Title that best...</Text>
          <Text style={{fontSize: 10, fontWeight: '400'}}>
            Last edited: 3 hours ago
          </Text>
        </View>
      </View>
      <View style={styles.btn1}>
        <Text style={styles.btn1Txt}>Collabrations:</Text>
        <TouchableOpacity>
          <Image
            style={{width: 23, height: 23}}
            source={require('../../assets/profile1.png')}
          />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={rateIdea}
        height={850} // Adjust height as needed
        openDuration={250}
        closeOnDragDown={false}
        customStyles={{
          container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
        }}>
        {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
        <RateIdeaSheet rateIdea={rateIdea} />
      </RBSheet>

      {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // if we want Close modal on back press we can comment this line also.
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}></Pressable>
          <View
            style={[
              styles.modalContainer,
              {top: menuPosition.top, left: menuPosition.left},
            ]}>
            {/* <TouchableOpacity
              style={styles.modalBackground}
              activeOpacity={1}
              onPress={() => setModalVisible(false)}>
              <View style={styles.modalContainer}> */}
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    // {borderTopLeftRadius: 10, borderTopRightRadius: 10},
                    activeOption === 'view' && styles.optionButtonActive,
                  ]}
                  onPressIn={() => setActiveOption('view')}
                  onPressOut={() => setActiveOption(null)}
                  onPress={() => {
                    setModalVisible(false);
                    // Handle View
                  }}
                  activeOpacity={1}>
                  <Text>View Idea</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    activeOption === 'collaborate' && styles.optionButtonActive,
                  ]}
                  onPressIn={() => setActiveOption('collaborate')}
                  onPressOut={() => setActiveOption(null)}
                  onPress={() => {
                    setModalVisible(false);
                    // Handle collaborate
                  }}
                  activeOpacity={1}>
                  <Text>Share to collaborate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    {borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
                    activeOption === 'evaluate' && styles.optionButtonActive,
                  ]}
                  onPressIn={() => setActiveOption('evaluate')}
                  onPressOut={() => setActiveOption(null)}
                  onPress={() => {
                    setModalVisible(false);
                    // Handle evaluate
                  }}
                  activeOpacity={1}>
                  <Text>Share to evaluate</Text>
                </TouchableOpacity>
              {/* </View>
            </TouchableOpacity> */}
          </View>
        {/* </Pressable> */}
      </Modal>
    </View>
  );
};

export default IdeaCards;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
  },
  subContainer1: {
    flexDirection: 'row',
    gap: 7,
  },
  subContainer1Btn: {
    backgroundColor: '#FFF3ED',
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  subContainer1BtnTxt: {color: '#FA4616', fontSize: 10, fontWeight: '600'},
  subContainer1Txt: {
    fontSize: 12,
    fontWeight: '500',
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    fontSize: 9,
    fontWeight: '400',
  },
  txt2: {
    fontSize: 14,
    fontWeight: '500',
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FA4616',
    alignItems: 'center',
    paddingVertical: 7.5,
  },
  btnTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FA4616',
  },
  btn1: {
    backgroundColor: '#FFF3ED',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btn1Txt: {
    fontSize: 10,
    fontWeight: '600',
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
    // position: 'absolute',
    // backgroundColor: '#fff',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    // borderWidth: 1,
    // borderColor: '#EFBBAB',
    // borderRightColor: '#EFBBAB',
    // borderLeftColor: '#EFBBAB',
    // borderTopColor: '#EFBBAB',
    // paddingVertical: 7,
    // paddingHorizontal: 8,
    // backgroundColor: 'lime',
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 4},
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5, // ✅ Shadow for Android
    position: 'absolute',
    backgroundColor: '#fff',
    // borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderRightColor: '#EFBBAB',
    borderLeftColor: '#EFBBAB',
    borderBottomColor: '#EFBBAB',
    borderTopColor: 0,
    // paddingVertical: 7,
    // paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
    width: '45%',
  },
  optionButton: {
    paddingVertical: 6.4,
    paddingHorizontal: 10,
    width: '100%',
    // borderRadius: 10,
  },
  optionButtonActive: {
    backgroundColor: '#FFF3ED',
  },
});
