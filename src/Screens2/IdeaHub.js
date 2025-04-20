import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IdeaTab from '../IdeaHubComps/IdeaTab';

const IdeaHub = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.containerTxt}>Idea Hub</Text>
      </View>
      <IdeaTab />
    </View>
  );
};

export default IdeaHub;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: 375,
    // height: 98,
    backgroundColor: '#FA4616',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 45,
  },
  containerTxt: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    paddingHorizontal: 10,
  },
});
