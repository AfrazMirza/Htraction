import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from './Post';
import Btns from './Btns';
import Cards from './Cards';

const MyActivity = ({screenType}) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.txt}>{screenType === 'MyProfile' ? 'My Activity' : 'Activity'}</Text>
        {screenType === 'MyProfile' && <Post />}
        <Btns screenType={screenType} />
      </View>
      <Cards />
    </View>
  );
};

export default MyActivity;

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingTop: 20,
    color: '#333333',
  },
});
