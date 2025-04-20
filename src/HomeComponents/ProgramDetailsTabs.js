import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ProgramDetailsComp from './ProgramDetailsComp';
import MyApplication from './MyApplication';

const ProgramDetailsTabs = () => {
  const [selectedTab, setSelectedTab] = useState('ProgramDetailsComp');
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedTab('ProgramDetailsComp')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'ProgramDetailsComp' && styles.activeTab,
            ]}>
            Program Deatils
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('MyApplication')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'MyApplication' && styles.activeTab,
            ]}>
            MyApplication
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'ProgramDetailsComp' && <ProgramDetailsComp />}
        {selectedTab === 'MyApplication' && <MyApplication />}
      </View>
    </View>
  );
};

export default ProgramDetailsTabs;

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
