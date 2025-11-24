import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchTab from '../components/SearchTab';
import Profile from '../components/Profile';
import Tabs from '../HomeComponents/Tabs';
import {ScrollView} from 'react-native-gesture-handler';
import ZepTechCompany from '../CompanyComp/ZepTechCompany';
import CompanyTabs from '../CompanyComp/CompanyTabs';

const ComponyProfile = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <SearchTab />
      <ZepTechCompany />
      <CompanyTabs />
    </ScrollView>
  );
};

export default ComponyProfile;

const styles = StyleSheet.create({});
