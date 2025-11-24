import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import About from '../HomeComponents/About';
import MyActivity from '../HomeComponents/MyActivity';
import CompaniesAbout from './CompaniesAbout';

const CompanyTabs = () => {
  const [selectedTab, setSelectedTab] = useState('CompaniesAbout');
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedTab('CompaniesAbout')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'CompaniesAbout' && styles.activeTab,
            ]}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('MyActivity')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'MyActivity' && styles.activeTab,
            ]}>
            Activity
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'CompaniesAbout' && <CompaniesAbout />}
        {selectedTab === 'MyActivity' && <MyActivity />}
      </View>
    </View>
  );
};

export default CompanyTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingVertical: 15,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    gap: 10,
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
