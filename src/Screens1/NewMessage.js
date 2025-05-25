// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'

// const NewMessage = () => {
//     const navigation = useNavigation() ;
//     const Message = () => {
//         return (
//             <View
//             style={{
//               // backgroundColor: 'red',
//            //    flexDirection: 'row',
//            justifyContent: 'flex-end',
//               paddingHorizontal: 10,
//             //   paddingRight: 10,
//               paddingVertical: 10,
//               borderBottomColor: '#ECECEC',
//               borderBottomWidth: 1,
//             }}>
//             <Image
//               style={{
//                 width: 54,
//                 height: 54,
//                 borderRadius: 40,
//                 borderWidth: 1,
//                 borderColor: '#FA4616',
//               }}
//               source={require('../../assets/Ron1.png')}
//             />
    
//             <View style={{paddingHorizontal: 10}}>
//               <View
//                 style={{
//                   width: '95%' ,
//                 //   backgroundColor: 'lime',
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   paddingRight: 15,
//                 }}>
//                 <Text style={{fontWeight: '600', fontSize: 14}}>Afraz Mirza</Text>
//               </View>
//               <Text style={{fontWeight: '400', fontSize: 12}}>React Native Developer
//               </Text>
//               <Text style={{fontWeight: '400', fontSize: 12, color: '#707070'}}>Connected 10 months ago
//               </Text>
//             </View>
// </View>
//         )
//     }
//   return (
//    <View style={{flex: 1,}}>
//     <View style={styles.container}>
//            <TouchableOpacity
//              onPress={() => navigation.goBack()}>
//              <Image
//                style={{width: 15, height: 15}}
//                source={require('../../assets/arrowleft.png')}
//              />
//            </TouchableOpacity>
//            <Text
//              style={styles.txt1}>
//              New Message
//            </Text>
//          </View>
// <Message/>   
// <View>
// <View style={styles.inputContainer}>
//                 <View style={styles.inputWrapper}>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Type a message"
//                         placeholderTextColor="#DBD6D6"
//                     />
                    
                  
//                 </View>
//                 <TouchableOpacity style={styles.sendButton}>
//                         <Image
//                             style={{width: 20, height: 20}}
//                             source={require('../../assets/forward.png')}
//                         />
//                     </TouchableOpacity>
//             </View>
//             </View>
//    </View>
//   )
// }

// export default NewMessage

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         backgroundColor: '#FA4616',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         paddingBottom: 15,
//         paddingTop: 45,
//       },
//       txt1: {
//         fontSize: 18,
//         fontWeight: '800',
//         color: '#ffffff',
//         paddingHorizontal: 10,
//       },
//       inputContainer: {
//         paddingHorizontal: 15,
//         flexDirection: 'row',
//         paddingVertical: 20,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderTopColor: '#FEC7B9',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         borderLeftColor: '#FEC7B9',
//         borderLeftWidth: 0.2,
//         borderRightColor: '#FEC7B9',
//         borderRightWidth: 0.2,
//         borderTopWidth: 2,
//       },
//       inputWrapper: {
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: '#FA4616',
//         // justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         borderRadius: 25,
//       },
//       textInput: {
//         flex: 1,
//         fontSize: 14,
//         fontWeight: '400',
//         marginRight: 30,
//       },
//       sendButton: {
//         paddingVertical: 8,
//         paddingHorizontal: 8,
//         borderRadius: 50,
//         backgroundColor: '#FA4616',
//       },
// })

// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'

// const NewMessage = () => {
//     const navigation = useNavigation();
    
//     // This would normally come from your state/messages data
//     const [messages, setMessages] = useState([]);
//     const [messageText, setMessageText] = useState('');

//     const handleSend = () => {
//         if (messageText.trim()) {
//             setMessages([...messages, {text: messageText, isMe: true}]);
//             setMessageText('');
//         }
//     };

//     const MessageItem = ({item}) => {
//         return (
//             <View style={item.isMe ? styles.myMessage : styles.theirMessage}>
//                 <Text style={styles.messageText}>{item.text}</Text>
//             </View>
//         );
//     };

//     const UserProfile = () => {
//         return (
//             <View style={styles.profileContainer}>
//                 <Image
//                     style={styles.profileImage}
//                     source={require('../../assets/Ron1.png')}
//                 />
//                 <View style={styles.profileTextContainer}>
//                     <Text style={styles.profileName}>Afraz Mirza</Text>
//                     <Text style={styles.profileTitle}>React Native Developer</Text>
//                     <Text style={styles.profileConnection}>Connected 10 months ago</Text>
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Image
//                         style={styles.backButton}
//                         source={require('../../assets/arrowleft.png')}
//                     />
//                 </TouchableOpacity>
//                 <Text style={styles.headerTitle}>New Message</Text>
//             </View>

//             {/* Messages area - will be empty until messages are sent */}
//             <ScrollView 
//                 contentContainerStyle={styles.messagesContainer}
//                 ref={ref => this.scrollView = ref}
//                 onContentSizeChange={() => this.scrollView?.scrollToEnd({animated: true})}
//             >
//                 {messages.length === 0 ? (
//                     <UserProfile/>
//                 ) : (
//                     <>
//                         <UserProfile />
//                         {messages.map((item, index) => (
//                             <MessageItem key={index} item={item} />
//                         ))}
//                     </>
//                 )}
//             </ScrollView>

//             {/* Input area */}
//             <View style={styles.inputContainer}>
//                 <View style={styles.inputWrapper}>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Type a message"
//                         placeholderTextColor="#DBD6D6"
//                         value={messageText}
//                         onChangeText={setMessageText}
//                         multiline
//                     />
//                     <TouchableOpacity 
//                         style={styles.sendButton}
//                         onPress={handleSend}
//                     >
//                         <Image
//                             style={styles.sendIcon}
//                             source={require('../../assets/forward.png')}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default NewMessage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     header: {
//         flexDirection: 'row',
//         backgroundColor: '#FA4616',
//         alignItems: 'center',
//         paddingHorizontal: 15,
//         paddingVertical: 15,
//         paddingTop: 45,
//     },
//     backButton: {
//         width: 15,
//         height: 15,
//     },
//     headerTitle: {
//         fontSize: 18,
//         fontWeight: '800',
//         color: '#ffffff',
//         marginLeft: 15,
//     },
//     messagesContainer: {
//         flexGrow: 1,
//         justifyContent: 'flex-end',
//         paddingBottom: 10,
//     },
//     profileContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 15,
//         borderBottomColor: '#ECECEC',
//         borderBottomWidth: 1,
//         marginBottom: 20,
//     },
//     profileImage: {
//         width: 54,
//         height: 54,
//         borderRadius: 27,
//         borderWidth: 1,
//         borderColor: '#FA4616',
//     },
//     profileTextContainer: {
//         marginLeft: 10,
//     },
//     profileName: {
//         fontWeight: '600',
//         fontSize: 14,
//     },
//     profileTitle: {
//         fontWeight: '400',
//         fontSize: 12,
//     },
//     profileConnection: {
//         fontWeight: '400',
//         fontSize: 12,
//         color: '#707070',
//     },
//     myMessage: {
//         alignSelf: 'flex-end',
//         backgroundColor: '#DCF8C6',
//         padding: 10,
//         borderRadius: 10,
//         marginRight: 15,
//         marginBottom: 10,
//         maxWidth: '80%',
//     },
//     theirMessage: {
//         alignSelf: 'flex-start',
//         backgroundColor: '#ECECEC',
//         padding: 10,
//         borderRadius: 10,
//         marginLeft: 15,
//         marginBottom: 10,
//         maxWidth: '80%',
//     },
//     messageText: {
//         fontSize: 14,
//     },
//     inputContainer: {
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         borderTopColor: '#FEC7B9',
//         borderTopWidth: 1,
//         backgroundColor: '#fff',
//     },
//     inputWrapper: {
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: '#FA4616',
//         borderRadius: 25,
//         paddingHorizontal: 15,
//         paddingVertical: 8,
//         alignItems: 'center',
//     },
//     textInput: {
//         flex: 1,
//         fontSize: 14,
//         fontWeight: '400',
//         maxHeight: 100,
//         paddingVertical: 0,
//     },
//     sendButton: {
//         marginLeft: 10,
//         padding: 8,
//         borderRadius: 20,
//         backgroundColor: '#FA4616',
//     },
//     sendIcon: {
//         width: 20,
//         height: 20,
//     },
// });

import { 
    Image, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
    KeyboardAvoidingView, 
    Platform,
    ScrollView 
  } from 'react-native';
  import { useState, useRef } from 'react';
  import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
  
  const NewMessage = () => {
      const navigation = useNavigation();
      const [messages, setMessages] = useState([]);
      const [messageText, setMessageText] = useState('');
      const scrollViewRef = useRef();
      const panelRef = useRef(null)
  
          const RemoveConnection = () => {
              return (
                  <View style={styles.RemoveConnectionContainer}>
                   
                    <TouchableOpacity
                     style={{flexDirection: 'row', alignItems: 'center',
              justifyContent: 'center',  gap: 13,
              padding: 10, borderRadius: 25, borderWidth: 1
              // paddingTop: 20,
              // paddingBottom: 18,
            }}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/document.png')}
                        />
                      </TouchableOpacity> 
                      <TouchableOpacity
                     style={{flexDirection: 'row', alignItems: 'center',
              justifyContent: 'center',  gap: 13,
              padding: 10, borderRadius: 25, borderWidth: 1
              // paddingTop: 20,
              // paddingBottom: 18,
            }}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/camera.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                     style={{flexDirection: 'row', alignItems: 'center',
              justifyContent: 'center',  gap: 13,
              padding: 10, borderRadius: 25, borderWidth: 1
              // paddingTop: 20,
              // paddingBottom: 18,
            }}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/media.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                     style={{flexDirection: 'row', alignItems: 'center',
              justifyContent: 'center',  gap: 13,
              padding: 10, borderRadius: 25, borderWidth: 1
              // paddingTop: 20,
              // paddingBottom: 18,
            }}>
                      <Image
                          style={{width: 25, height: 25, }}
                          source={require('../../assets/gif.png')}
                        />
                      </TouchableOpacity>
                  </View>
                )
          }

      const handleSend = () => {
          if (messageText.trim()) {
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
  
              {/* Messages area */}
              <ScrollView 
                  ref={scrollViewRef}
                  style={styles.messagesScrollView}
                  contentContainerStyle={styles.messagesContainer}
                  keyboardShouldPersistTaps="handled"
                  onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({animated: true})}
              >
                  {messages.length === 0 ? (
                      <UserProfile />
                  ) : (
                      <>
                          <UserProfile />
                          {messages.map((item, index) => (
                              <MessageItem key={index} item={item} />
                          ))}
                      </>
                  )}
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
  });