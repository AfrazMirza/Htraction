import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const CardIdeas = () => {
    const profiles = [
        {
          profile: require('../../assets/Ron.png'),
          heading: 'Afraz Mirza',
          subheading: 'Entrepreneur > 2 hrs ago',
          button: 'Follow',
          dots: require('../../assets/3dots.png'),
          thumb: require('../../assets/thumb.png'),
          message: require('../../assets/message.png'),
          share: require('../../assets/share.png'),
          save: require('../../assets/save.png'),
          mainImage: require('../../assets/mainImage.png'),
          txt: 'The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current',
          text1: '20K',
          text2: '20K',
          text3: 'Share',
          icon1: require('../../assets/smilyIcon.png'),
          icon2: require('../../assets/smilyIcon.png'),
          icon3: require('../../assets/smilyIcon.png'),
          icon4: require('../../assets/smilyIcon.png'),
        },
        {
          profile: require('../../assets/Ron.png'),
          heading: 'Kumar Rohit!',
          subheading: 'Entrepreneur > 5 hrs ago',
          button: 'Follow',
          dots: require('../../assets/3dots.png'),
          thumb: require('../../assets/thumb.png'),
          message: require('../../assets/message.png'),
          share: require('../../assets/share.png'),
          save: require('../../assets/save.png'),
          mainImage: require('../../assets/mountain.png'),
          txt: 'The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current',
          text1: '20K',
          text2: '20K',
          text3: 'Share',
          icon1: require('../../assets/smilyIcon.png'),
          icon2: require('../../assets/smilyIcon.png'),
          icon3: require('../../assets/smilyIcon.png'),
          icon4: require('../../assets/smilyIcon.png'),
        },
        {
          profile: require('../../assets/profile1.png'),
          heading: 'Data Wave',
          subheading: 'Entrepreneur > 2 hrs ago',
          button: 'Follow',
          dots: require('../../assets/3dots.png'),
          thumb: require('../../assets/thumb.png'),
          message: require('../../assets/message.png'),
          share: require('../../assets/share.png'),
          save: require('../../assets/save.png'),
          txt: 'The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current',
          mainImage: require('../../assets/paintings.png'),
          text1: '20K',
          text2: '20K',
          text3: 'Share',
          icon1: require('../../assets/smilyIcon.png'),
          icon2: require('../../assets/smilyIcon.png'),
          icon3: require('../../assets/smilyIcon.png'),
          icon4: require('../../assets/smilyIcon.png'),
        },
        {
          profile: require('../../assets/profile1.png'),
          heading: 'Harshit Marothiya',
          subheading: 'Entrepreneur > 2 hrs ago',
          button: 'Follow',
          dots: require('../../assets/3dots.png'),
          thumb: require('../../assets/thumb.png'),
          message: require('../../assets/message.png'),
          share: require('../../assets/share.png'),
          save: require('../../assets/save.png'),
          txt: 'The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current',
          mainImage: require('../../assets/mainImage.png'),
          text1: '20K',
          text2: '20K',
          text3: 'Share',
          icon1: require('../../assets/smilyIcon.png'),
          icon2: require('../../assets/smilyIcon.png'),
          icon3: require('../../assets/smilyIcon.png'),
          icon4: require('../../assets/smilyIcon.png'),
        },
      ];
      const [modalVisible, setModalVisible] = useState(false); 
        const [activeOption, setActiveOption] = useState(null);
        const [isThumbActive, setIsThumbActive] = useState(false);
        const [isSaveActive, setIsSaveActive] = useState(false);
        const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
          <FlatList
            data={profiles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.card1}>
                <View style={styles.card2}>
                 <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')} style={{flexDirection: 'row'}}>
                 <Image style={styles.profileImage} source={item.profile} />
                  <View style={styles.textContainer}>
                    <Text style={styles.heading}>{item.heading}</Text>
                    <Text style={styles.subheading}>{item.subheading}</Text>
                  </View>
                 </TouchableOpacity>
                 <View style={{flexDirection: 'row'}}>
                 <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followText}>{item.button}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image style={{width: 20, height: 20}} source={item.dots} />
                  </TouchableOpacity>
                 </View>
                </View>
                <View>
                  <Image style={styles.mainImage} source={item.mainImage} />
                </View>
                <View>
                  <Text style={{fontSize: 12, paddingVertical: 7, lineHeight: 18}}>{item.txt}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: 140,
                      flexDirection: 'row',
                      // backgroundColor: 'lime',
                      justifyContent: 'space-around',
                    }}>
                    <View
                      style={styles.sameStyles}>
                      <TouchableOpacity style={[
            styles.button,
            isThumbActive && styles.buttonActive
          ]} onPress={() => setIsThumbActive(!isThumbActive)}>
                        <Image
                          style={[{width: 14, height: 14.5}, isThumbActive && {tintColor: '#FA4616'}]}
                          source={item.thumb}
                        />
                      </TouchableOpacity>
                      <Text style={{fontWeight: '600', fontSize: 10, paddingHorizontal: 3, paddingVertical: 5, color: '#706F6E'}}>20K</Text>
                    </View>
                    <View
                      style={styles.sameStyles}>
                      <TouchableOpacity>
                      {/* fontSize: 11,
                      fontWeight: '600', */}
                        <Image
                          style={{width: 14, height: 14}}
                          source={item.message}
                        />
                      </TouchableOpacity>
                      <Text style={{fontWeight: '600', fontSize: 10, paddingHorizontal: 5, paddingVertical: 5, color: '#706F6E'}}>20K</Text>
                    </View>
                    <View
                      style={styles.sameStyles}>
                      <TouchableOpacity>
                        <Image
                          style={{width: 13.13, height: 11.38}}
                          source={item.share}
                        />
                      </TouchableOpacity>
                      <Text style={{fontWeight: '600', fontSize: 10, paddingHorizontal: 5, paddingVertical: 5, color: '#706F6E'}}>Share</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity  style={[
            styles.button,
            isSaveActive && styles.buttonActive
          ]}
          onPress={() => setIsSaveActive(!isSaveActive)}>
                      <Image style={[{width: 14, height: 14}, isSaveActive && {tintColor: '#FA4616'}]} source={item.save}  />
                      <Text style={{fontWeight: '600', fontSize: 10, paddingLeft: 5, color: '#706F6E'}}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
    
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
                  <Text>Copy post link</Text>
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
                  <Text>View post</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
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
                </TouchableOpacity>
                
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
                  <Text>Delete post</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
    
                </Modal>
        </View>
  )
}

export default CardIdeas

const styles = StyleSheet.create({
    sameStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      card1: {
        // flexDirection: 'row',
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFE5D5',
        marginVertical: 10,
        marginHorizontal: 8,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 2},
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 3,
      },
      card2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '76%',
        // padding: 10,
        // borderRadius: 10,
        // marginVertical: 5,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 2},
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 3,
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      mainImage: {
        width: 335,
        height: 172,
        borderRadius: 5,
        marginVertical: 13,
      },
      textContainer: {
        flex: 1,
      },
      heading: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#383838',
      },
      subheading: {
        color: '#DBD6D6',
        fontSize: 12,
      },
      followButton: {
        backgroundColor: '#FA4616',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 9,
      },
      followText: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 12,
        paddingVertical: 7,
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderRadius: 0,
      },
      buttonActive: {
        backgroundColor: '#FFE5D5',
        borderRadius: 15,
      },
      modalBackground: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 30,
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
})