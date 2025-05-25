import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { supabase } from '../lib/supabase';
import RBSheet from 'react-native-raw-bottom-sheet';
import AllInputs from '../HomeComponents/AllInputs';

const Profile = () => {
  const navigation = useNavigation();
  // const [userName, setUserName] = useState('Guest');
  const [profileData, setProfileData] = useState({});
  const panelRef = useRef(null)
    const [deleteProfile, setDeleteProfile] = useState(false);
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     if (!user) return;

  //     const { data, error } = await supabase
  //       .from('profiles')
  //       .select('*')
  //       .eq('id', user.id)
  //       .single();
  //     if (error) console.error('Profile fetch error:', error);
  //     if (data)  {
  //       console.log('Profile data:', data);
  //       setProfileData(data);
  //     }
  //   };
    
  //   fetchProfile();
  //   const unsubscribe = navigation.addListener('focus', fetchProfile);
  //   return unsubscribe;
  // }, [navigation]);


  //  useEffect(() => {
  //     // Fetch user data when component mounts
  //     const fetchUser = async () => {
  //       try {
  //         const { data: { user } } = await supabase.auth.getUser();
          
  //         if (user) {
  //           // Try to get the full name from the user_metadata first
  //           const name = user.user_metadata?.full_name || 'User';
  //           setUserName(name);
            
  //           // If not found in metadata, try to fetch from public.users table
  //           if (!name || name === 'User') {
  //             const { data, error } = await supabase
  //               .from('users')
  //               .select('full_name')
  //               .eq('id', user.id)
  //               .single();
              
  //             if (data && data.full_name) {
  //               setUserName(data.full_name);
  //             }
  //           }
  //         }
  //       } catch (error) {
  //         console.error('Error fetching user:', error);
  //       }
  //     };
      
  //     fetchUser();
      
  //     // Set up a listener for auth state changes
  //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
  //       if (event === 'SIGNED_IN' && session?.user) {
  //         const name = session.user.user_metadata?.full_name || 'User';
  //         setUserName(name);
  //       } else if (event === 'SIGNED_OUT') {
  //         setUserName('Guest');
  //       }
  //     });
      
  //     return () => {
  //       if (authListener?.unsubscribe) {
  //         authListener.unsubscribe();
  //       }
  //     };
  //   }, []);
  
  const fetchProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('profiles')
      .select('full_name, entrepreneur_type')
      .eq('id', user.id)
      .single();

    if (error) console.error('Profile fetch error:', error);
    else setProfileData(data);
  };

  useEffect(() => {
    fetchProfile();
    const unsubscribe = navigation.addListener('focus', fetchProfile);
    return unsubscribe;
  }, [navigation]);

  const EditProfile = ({panelRef}) => {
    return (
      <View>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity onPress={() => panelRef.current.close()}>
            <Image
              style={{width: 14, height: 14}}
              source={require('../../assets/cross.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Upload Profile</Text>
        </View>
        <View style={{paddingVertical: 15, paddingHorizontal: 15}}>
          <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
          <Image style={{width: 22.5, height: 18}} source={require('../../assets/uploadProfile.png')}/>
          <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 26, color: '#383838', paddingLeft: 5}}>View or edit profile photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDeleteProfile(true)} style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
            <Image style={{width: 22, height: 22}} source={require('../../assets/deleteProfile.png')}/>
          <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 26, color: '#383838', paddingLeft: 5}}>Delete profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>My Profile</Text>
      <View style={styles.container1}>
       <View style={{ position: 'relative', width: 100, height: 101 }}>
       <Image
          style={{width: 100, height: 101}}
          source={require('../../assets/profile1.png')}
        />
        <TouchableOpacity    style={{
      position: 'absolute',
      bottom: 5,
      right: 2,
      backgroundColor: '#FA4616',
      padding: 6,
      borderRadius: 20,
    }}
    onPress={() => panelRef.current.open()}>
          <Image style={{width: 12, height: 12}} source={require('../../assets/editProfile.png')}/>
        </TouchableOpacity>
       </View>
        <View style={styles.container2}>
          <View>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#FA4616'}}>
          {profileData.full_name ||'UserName'}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#444444'}}>
            {profileData.entrepreneur_type || 'Aspiring Entrepreneur'}
          </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
              // navigation.navigate('ContactDetails');
              // navigation.navigate('PageDetails');
              // navigation.navigate('CompanyDetails');
             }}
            style={styles.btn}>
            <Text style={styles.btntxt}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
         <TouchableOpacity>
         <Image style={{paddingRight: 4, width: 20, height: 20}} source={require('../../assets/3dots.png')}/>
         </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        {/* <TouchableOpacity style={styles.followView}>
          <Text style={styles.txt1}>122</Text>

          <Text style={styles.txt2}>Followers</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.followView}>
          <Text style={styles.txt1}>67</Text>
          <Text style={styles.txt2}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Connections')} style={styles.followView}>
          <Text style={styles.txt1}>13</Text>
          <Text style={styles.txt2}>Connections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followView}>
          <Text style={styles.txt1}>10</Text>
          <Text style={styles.txt2}>Ideas</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
          ref={panelRef}
          height={185} // Adjust height as needed
          openDuration={250}
          closeOnDragDown={false}
          customStyles={{
            container: { borderTopLeftRadius: 15, borderTopRightRadius: 15,  },
          }}
        >
          {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
          <EditProfile panelRef={panelRef}/>
        </RBSheet>

         {/*this model can show the popup on the screen wen the contact button is triggured every time*/}
              <Modal
                animationType="fade"
                transparent={true}
                visible={deleteProfile}
                onRequestClose={() => setDeleteProfile(false)}
                >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                      <Image
                        style={{width: 64, height: 64, marginBottom: 20,}}
                        source={require('../../assets/redAlert.png')}
                      />
                    {/* </View> */}
                    {/* <Text style={styles.modalTitle}>Contact Details Submitted!</Text> */}
                    <Text style={styles.modalMessage}>
                    Are you sure you want to delete profile image?
                    </Text>
        
                    <View
                      style={{
                        flexDirection: 'row',
                        // backgroundColor: 'lime',
                        gap: 10,
                        justifyContent: 'space-between',
                      }}>
                      {/* Close Button */}
                      <TouchableOpacity onPress={() => setDeleteProfile(false)} style={styles.cancleBtn}>
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    // width: 375,
    // height: 263,
    backgroundColor: '#ffffff',
    paddingBottom: 15,
  },
  containerTxt: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  container1: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // width: 345,
    // height: 101,
    marginHorizontal: 15,
    gap: 14,
  },
  container2: {
    backgroundColor: 'white', width: 190, height: 91
  },
  container3: {
    flexDirection: 'row',
    marginTop: '15',
    justifyContent: 'space-around',
    // width: 340,
    // height: 57,
    // backgroundColor: 'white',
    marginHorizontal: 15,
  },
  followView: {
    // width: 72,
    // height: 55,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // backgroundColor: 'lightgreen',
  },
  txt1: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333333',
  },
  txt2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FA4616',
    width: 82,
    height: 28,
    marginTop: 20,
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FA4616',
    textAlign: 'center',
  },
  editProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
  // css model for delete the profile image
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
