import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {SearchBar} from 'react-native-screens';
import {TextInput} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from './BottomSheet';
import InviteUser from './InviteUser';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../lib/supabase';

const Hemburg = () => {
  const panelRef = useRef(null)
  const navigation = useNavigation();
  const [userName, setUserName] = useState('Guest');
  
  console.log("naaaa", navigation);
  
  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          // Try to get the full name from the user_metadata first
          const name = user.user_metadata?.full_name || 'User';
          setUserName(name);
          
          // If not found in metadata, try to fetch from public.users table
          if (!name || name === 'User') {
            const { data, error } = await supabase
              .from('users')
              .select('full_name')
              .eq('id', user.id)
              .single();
            
            if (data && data.full_name) {
              setUserName(data.full_name);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    
    fetchUser();
    
    // Set up a listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const name = session.user.user_metadata?.full_name || 'User';
        setUserName(name);
      } else if (event === 'SIGNED_OUT') {
        setUserName('Guest');
      }
    });
    
    return () => {
      if (authListener?.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, []);

  // This opens the drawer when click on the profile image
  const openDrawer = () => {

    navigation.openDrawer();
    console.log('zdjdj')
  };
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <View style={styles.subContainer1}>
          <TouchableOpacity onPress={openDrawer}>
          <Image
            style={styles.img1}
            source={require('../../assets/profile1.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.txt1}>Hello</Text>
            <Text style={styles.txt2}>{userName}</Text>
          </View>
        </View>
        <View style={styles.subContainer2}>
            {/* <TouchableOpacity onPress={()=> {navigation.navigate('Setting')}} style={{borderRadius: 10,borderWidth: 1, borderColor: '#646464', margin: 5, paddingHorizontal: 5, paddingVertical: 5  }}><Text style={[styles.txt2, {fontSize: 18,}]}>Setting</Text></TouchableOpacity> */}
          <TouchableOpacity onPress={() => panelRef.current.open()} style={styles.btn}>
            <Image
              style={{width: 8, height: 8}}
              source={require('../../assets/plusicon.png')}
            />            
            <Text style={styles.btnTxt}>Invite User</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}}>
            <Image
              style={{width: 23, height: 23}}
              source={require('../../assets/notificationIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          style={styles.img2}
          source={require('../../assets/searchIcon.png')}
        />
        <TextInput
          style={styles.txt3}
          placeholder="Search"
          placeholderTextColor="#FFF3ED"
        />
      </View>
      <RBSheet
          ref={panelRef}
          height={375} // Adjust height as needed
          openDuration={250}
          closeOnDragDown={false}
          customStyles={{
            container: { borderTopLeftRadius: 15, borderTopRightRadius: 15,  },
          }}
        >
          {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
          <InviteUser panelRef={panelRef}/>
        </RBSheet>
    </View>
  );
};

export default Hemburg;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FA4616',
    gap: 10,
    height: 157,
  },
  container1: {
    marginTop: '43',
    // backgroundColor: 'red',
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFB093',
    alignSelf: 'center',
    width: '93%',
    height: '41',
    backgroundColor: '#FF7441',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  subContainer1: {
    flexDirection: 'row',
    gap: 4,
  },
  subContainer2: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FFFFFF',
    gap: 5,
    width: 85,
    height: 27,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  btnTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
  },
  txt1: {
    fontSize: 20,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  txt2: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  txt3: {
    fontSize: 14,
    fontWeight: '400',
  },
  img1: {
    height: 43,
    width: 43,
  },
  img2: {
    width: 16.2,
    height: 16.2,
  },
});
