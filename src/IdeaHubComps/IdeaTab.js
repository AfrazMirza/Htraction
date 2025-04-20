import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ProgramDetailsComp from '../HomeComponents/ProgramDetailsComp';
import MyApplication from '../HomeComponents/MyApplication';
import MyIdea from './MyIdea';
import SharedIdea from './SharedIdea';

const IdeaTab = () => {
  const [selectedTab, setSelectedTab] = useState('MyIdea');
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedTab('MyIdea')}>
          <Text
            style={[styles.txt, selectedTab === 'MyIdea' && styles.activeTab]}>
            My Ideas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('SharedIdea')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'SharedIdea' && styles.activeTab,
            ]}>
            Shared with me
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'MyIdea' && <MyIdea />}
        {selectedTab === 'SharedIdea' && <SharedIdea />}
        {/* {selectedTab === "Programs" && <Programs/>} */}
      </View>
    </View>
  );
};

export default IdeaTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingVertical: 15,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#FA4616',
    color: '#FA4616',
  },
});
