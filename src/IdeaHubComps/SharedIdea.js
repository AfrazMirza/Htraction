import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IdeaCards from './IdeaCards';

const SharedIdea = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.containerTxt}>Shared with me</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subContainerTxt}>Sort:</Text>
          <TouchableOpacity style={styles.subContainerBtn}>
            <Text style={styles.subContainerBtnTxt}>Latest</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{gap: 16}}>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
        </View>
        <View style={styles.container1}>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
          <IdeaCards title1 = 'Draft' title2 = 'View Access'/>
        </View>
      </View>
    </View>
  );
};

export default SharedIdea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  containerTxt: {
    fontSize: 18,
    fontWeight: '700',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subContainerTxt: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 5,
    color: '#5C5B5B',
  },
  subContainerBtn: {
    borderColor: '#FA4616',
    borderWidth: 1,
    borderRadius: 9,
  },
  subContainerBtnTxt: {
    color: '#FA4616',
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  container1: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 10,
  },
});
