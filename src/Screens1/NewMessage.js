import { 
    Image, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
    KeyboardAvoidingView, 
    Platform,
    ScrollView, 
    Animated,
    LayoutAnimation, 
    Modal,
    Pressable
  } from 'react-native';
  import { useState, useRef, useEffect } from 'react';
  import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
  
  const NewMessage = () => {
      const navigation = useNavigation();
      const [messages, setMessages] = useState([]);
      const [messageText, setMessageText] = useState('');
      const scrollViewRef = useRef();
      const panelRef = useRef(null)
      const scrollY = useRef(new Animated.Value(0)).current;
      const [isProfileSticky, setIsProfileSticky] = useState(false);
      const profileHeight = 90; 
      const stickyProfileOpacity = scrollY.interpolate({
        inputRange: [profileHeight - 10, profileHeight],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });
    const scrollProfileOpacity = scrollY.interpolate({
        inputRange: [profileHeight - 10, profileHeight],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    
      useEffect(() => {
        const listener = scrollY.addListener(({ value }) => {
            setIsProfileSticky(value >= profileHeight);
        });

        return () => {
            scrollY.removeListener(listener);
        };
    }, []);
          const RemoveConnection = () => {
              return (
                  <View style={styles.RemoveConnectionContainer}>
                   
                    <TouchableOpacity
                     style={styles.attachmentButton}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/document.png')}
                        />
                      </TouchableOpacity> 
                      <TouchableOpacity
                     style={styles.attachmentButton}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/camera.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                     style={styles.attachmentButton}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/media.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                     style={styles.attachmentButton}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/gif.png')}
                        />
                      </TouchableOpacity>
                  </View>
                )
          }

    //   const handleSend = () => {
    //       if (messageText.trim()) {
    //           setMessages([...messages, {text: messageText, isMe: true}]);
    //           setMessageText('');
    //           setTimeout(() => {
    //               scrollViewRef.current?.scrollToEnd({ animated: true });
    //           }, 100);
    //       }
    //   };
    const handleSend = () => {
        if (messageText.trim()) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setMessages([...messages, {text: messageText, isMe: true}]);
            setMessageText('');
            setTimeout(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 100);
        }
    };
      const MessageItem = ({item}) => {
          return (
              <View style={item.isMe ? styles.myMessage : styles.theirMessage}>
                  <Text style={styles.messageText}>{item.text}</Text>
              </View>
          );
      };
  
      const UserProfile = () => {
         const [modalVisible, setModalVisible] = useState(false);
          const [menuPosition, setMenuPosition] = useState({top: 0, left: 0});
          const [activeOption, setActiveOption] = useState(null);
        // this is for SHowing the profile and clear chat modalfunction
    const handleMenuPress = event => {
        // Measure the position of the pressed button
        event.target.measure((x, y, width, height, pageX, pageY) => {
          setMenuPosition({
            top: pageY + height -58, // Position below the button
            left: pageX + 28 // Adjust horizontal position
          });
          setModalVisible(true);
        });
    }
          return (
              <View style={styles.profileContainer}>
                  <Image
                      style={styles.profileImage}
                      source={require('../../assets/Ron1.png')}
                  />
                  <View style={styles.profileTextContainer}>
                      <Text style={styles.profileName}>Afraz Mirza</Text>
                      <Text style={styles.profileTitle}>React Native Developer</Text>
                      <Text style={styles.profileConnection}>Connected 10 months ago</Text>
                  </View>
                 <TouchableOpacity onPress={handleMenuPress} style={{alignSelf: 'flex-start'}}>
                 <Image style={{width: 20, height: 20}} source={require('../../assets/3dots.png')}/>
                 </TouchableOpacity>
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
                    {borderTopLeftRadius: 10, borderTopRightRadius: 10},
                    activeOption === 'view' && styles.optionButtonActive,
                  ]}
                  onPressIn={() => setActiveOption('view')}
                  onPressOut={() => setActiveOption(null)}
                  // onPress={() => {
                  //   setModalVisible(false);
                  //   // Handle View
                  // }}
                  onPress={() => {
                    navigation.navigate('UserProfile')
                    // Handle collaborate
                  }}
                  
                  activeOpacity={1}>
                  <Text>View Profile</Text>
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
                  <Text>Clear Chat</Text>
                </TouchableOpacity>
              {/* </View>
            </TouchableOpacity> */}
          </View>
        {/* </Pressable> */}
      </Modal>
              </View>
          );
      };
  
      return (
          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}
          >
              {/* Header */}
              <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                          style={styles.backButton}
                          source={require('../../assets/arrowleft.png')}
                      />
                  </TouchableOpacity>
                  <Text style={styles.headerTitle}>New Message</Text>
              </View>
                {/* Sticky User Profile (only visible when scrolled) */}
                <Animated.View style={[styles.stickyProfile, { opacity: stickyProfileOpacity }]}>
                <UserProfile />
            </Animated.View>
            
              {/* Messages area */}
              <ScrollView 
                  ref={scrollViewRef}
                  style={styles.messagesScrollView}
                  contentContainerStyle={styles.messagesContainer}
                  keyboardShouldPersistTaps="handled"
                  onContentSizeChange={() =>
                    //  scrollViewRef.current?.scrollToEnd({animated: true})
                    {
                        if (messages.length === 0) {
                            scrollViewRef.current?.scrollTo({y: 0, animated: false});
                        } else {
                            scrollViewRef.current?.scrollToEnd({animated: true});
                        }
                    }
                    }
                  scrollEventThrottle={16}
                  onScroll={Animated.event(
                      [{ nativeEvent: { contentOffset: { y: scrollY } }}],
                      { useNativeDriver: false }
                  )}
              >
                  {/* {messages.length === 0 ? (
                      <UserProfile />
                  ) : (
                      <>
                          <UserProfile />
                          {messages.map((item, index) => (
                              <MessageItem key={index} item={item} />
                          ))}
                      </>
                  )} */}
                  {/* Empty View to push content below sticky header */}
                {/* <View style={styles.profilePlaceholder} /> */}
                
                 {/* Regular UserProfile (scrolls with content) */}
                 <Animated.View style={{ opacity: scrollProfileOpacity }}>
                    <UserProfile />
                </Animated.View>

                {messages.map((item, index) => (
                    <MessageItem key={index} item={item} />
                ))}
              </ScrollView>
  
              {/* Input area */}
              <View style={styles.inputContainer}>
                  <View style={styles.inputWrapper}>
                  <TouchableOpacity 
                  onPress={() => panelRef.current.open()}
                  style={{padding: 8,}}>
                        <Image
                            style={{width: 18.2, height: 16, marginRight: 5}}
                            source={require('../../assets/plusOrange.png')} // Replace with your asset
                        />
                    </TouchableOpacity>
                      <TextInput
                          style={styles.textInput}
                          placeholder="Type a message"
                          placeholderTextColor="#DBD6D6"
                          value={messageText}
                          onChangeText={setMessageText}
                          multiline
                          onFocus={() => {
                              setTimeout(() => {
                                  scrollViewRef.current?.scrollToEnd({ animated: true });
                              }, 100);
                          }}
                      />
                      <TouchableOpacity 
                          style={styles.sendButton}
                          onPress={handleSend}
                      >
                          <Image
                              style={styles.sendIcon}
                              source={require('../../assets/forward.png')}
                          />
                      </TouchableOpacity>
                  </View>
                  <RBSheet
          ref={panelRef}
          height={85} // Adjust height as needed
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
          </KeyboardAvoidingView>
      );
  };
  
  export default NewMessage;
  
  const styles = StyleSheet.create({
    RemoveConnectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 13,
        paddingHorizontal: 12,
        paddingTop: 20,
        paddingBottom: 18,
        backgroundColor: '#FFE5D5',
      },
      attachmentButton:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 13,
        padding: 10, 
        borderRadius: 25, 
        borderWidth: 1
        // paddingTop: 20,
        // paddingBottom: 18,
      },
      container: {
          flex: 1,
          backgroundColor: '#fff',
      },
      header: {
          flexDirection: 'row',
          backgroundColor: '#FA4616',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 15,
          paddingTop: 45,
      },
      backButton: {
          width: 15,
          height: 15,
      },
      headerTitle: {
          fontSize: 18,
          fontWeight: '800',
          color: '#ffffff',
          marginLeft: 15,
      },
      stickyProfile: {
        position: 'absolute',
        top: 80, // Adjust this based on your header height
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: '#fff',
    },
      messagesScrollView: {
          flex: 1,
      },
      messagesContainer: {
          flexGrow: 1,
          justifyContent: 'flex-end',
          paddingBottom: 10,
      },
      profileContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderBottomColor: '#ECECEC',
          borderBottomWidth: 1,
          marginBottom: 20,
      },
      profileImage: {
          width: 54,
          height: 54,
          borderRadius: 27,
          borderWidth: 1,
          borderColor: '#FA4616',
      },
      profileTextContainer: {
          marginLeft: 10,
      },
      profileName: {
          fontWeight: '600',
          fontSize: 14,
      },
      profileTitle: {
          fontWeight: '400',
          fontSize: 12,
      },
      profileConnection: {
          fontWeight: '400',
          fontSize: 12,
          color: '#707070',
      },
      myMessage: {
          alignSelf: 'flex-end',
          backgroundColor: '#FA4616',
          padding: 10,
          borderRadius: 10,
          marginRight: 15,
          marginBottom: 10,
          maxWidth: '80%',
      },
      theirMessage: {
          alignSelf: 'flex-start',
          backgroundColor: '#ECECEC',
          padding: 10,
          borderRadius: 10,
          marginLeft: 15,
          marginBottom: 10,
          maxWidth: '80%',
      },
      messageText: {
          fontSize: 14,
          color: '#fff'
      },
      inputContainer: {
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          borderTopColor: '#FEC7B9',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderLeftColor: '#FEC7B9',
          borderLeftWidth: 0.2,
          borderRightColor: '#FEC7B9',
          borderRightWidth: 0.2,
          borderTopWidth: 2,
          backgroundColor: '#fff',
      },
      inputWrapper: {
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#FA4616',
          borderRadius: 25,
          paddingHorizontal: 15,
          paddingVertical: 8,
          alignItems: 'center',
      },
      textInput: {
          flex: 1,
          fontSize: 14,
          fontWeight: '400',
          maxHeight: 100,
          paddingVertical: 0,
          paddingTop: 0,
      },
      sendButton: {
          marginLeft: 10,
          padding: 8,
          borderRadius: 20,
          backgroundColor: '#FA4616',
      },
      sendIcon: {
          width: 20,
          height: 20,
      },
    //   modalBackground: {
    //     flex: 1,
    //     // backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent background
    //     justifyContent: 'center',
    //     alignItems: 'flex-end',
    //     // marginRight: 30,
    //   },
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderRightColor: '#EFBBAB',
        borderLeftColor: '#EFBBAB',
        borderBottomColor: 0,
        borderTopColor: '#EFBBAB',
        // paddingVertical: 7,
        // paddingHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 5,
        width: '27%',
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