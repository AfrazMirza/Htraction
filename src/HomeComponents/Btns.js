import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const Btns = ({screenType}) => {
  const isMyProfile = screenType === 'MyProfile';
  const isUserProfile = screenType === 'UserProfile';
  const [activeBtn, setActiveBtn] = useState('Latest');

  const handlePress = (btn) => {
    setActiveBtn(btn);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
       onPress={() => handlePress('Latest')}
        style={[styles.btn, activeBtn === 'Latest' && styles.activeBtn]}>
        <Text style={[styles.txt, activeBtn === 'Latest' ? styles.activeTxt : styles.inactiveTxt]}>
          Latest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => handlePress('Trending')}
        style={[styles.btn, activeBtn === 'Trending' && styles.activeBtn]}>
        <Text style={[styles.txt, activeBtn === 'Trending' ? styles.activeTxt : styles.inactiveTxt]}>
        {isMyProfile || isUserProfile ? 'Popular' : 'Trending'}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.btn3}>
        <Text style={styles.txt3}>
          Announcement
        </Text>
      </TouchableOpacity> */}

        {/* Show Announcement OR Save only if NOT on UserProfile */}
       {isMyProfile && (
        <TouchableOpacity 
        onPress={() => handlePress('Announcement')}
        style={[styles.btn, activeBtn === 'Announcement' && styles.activeBtn]}>
          <Text style={[styles.txt, activeBtn === 'Announcement' ? styles.activeTxt : styles.inactiveTxt]}>
            Save
          </Text>
        </TouchableOpacity>
      )}

{!isMyProfile && !isUserProfile && (
        <TouchableOpacity
          style={[styles.btn, activeBtn === 'Announcement' && styles.activeBtn]}
          onPress={() => handlePress('Announcement')}>
          <Text style={[styles.txt, activeBtn === 'Announcement' ? styles.activeTxt : styles.inactiveTxt]}>
            Announcement
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={{justifyContent: 'center'}}> 
        <Text style={{color: '#9D9B9A'}}>--------------</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center'}}>
        <Image
          style={{width: 14, height: 14}}
          source={require('../../assets/reverse.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Btns;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  btn: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBD6D6',
    paddingHorizontal: 9,
    paddingVertical: 6.5,
    backgroundColor: 'white', // default
  },
  activeBtn: {
    backgroundColor: '#FFE5D5',
    borderColor: '#FA4616',
  },
  txt: {
    fontSize: 11,
    fontWeight: '600',
  },
  activeTxt: {
    color: '#FA4616',
  },
  inactiveTxt: {
    color: '#706F6E',
  },
});
