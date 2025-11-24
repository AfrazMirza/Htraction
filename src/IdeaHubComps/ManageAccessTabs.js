import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MyActivity from '../HomeComponents/MyActivity';
import CompaniesAbout from '../CompanyComp/CompaniesAbout';
import Evaluators from './Evaluators';
import Collaborators from './Collaborators';

const ManageAccessTabs = () => {
  const [selectedTab, setSelectedTab] = useState('CompaniesAbout');
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedTab('Collaborators')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'Collaborators' && styles.activeTab,
            ]}>
            Collaborators
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Evaluators')}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'Evaluators' && styles.activeTab,
            ]}>
            Evaluators
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'Collaborators' && <Collaborators />}
        {selectedTab === 'Evaluators' && <Evaluators />}
      </View>
    </View>
  );
};

export default ManageAccessTabs;

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
