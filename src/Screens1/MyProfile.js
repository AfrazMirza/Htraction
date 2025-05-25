import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchTab from '../components/SearchTab';
import Profile from '../components/Profile';
import WorkExp from '../components/WorkExp';
import Cards from '../HomeComponents/Cards';
import About from '../HomeComponents/About';
import { ScrollView } from 'react-native-gesture-handler';
import Tabs from '../HomeComponents/Tabs';

const MyProfile = ({navigation}) => {
  console.log('fag',navigation)
  return (
   <ScrollView style={{flex: 1}}>
    <SearchTab/>
    <Profile/>
    <Tabs screenType="MyProfile"/>
    {/* <About/> */}
    {/* <WorkExp title='Work Experience'/>
    <WorkExp title='Education'/> */}
   </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});