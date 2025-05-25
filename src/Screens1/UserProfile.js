import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchTab from '../components/SearchTab';
import Profile from '../components/Profile';
import Tabs from '../HomeComponents/Tabs';
import UserData from '../components/UserData';

const UserProfile = () => {
    const navigation = useNavigation();
  return (
      <ScrollView style={{flex: 1}}>
        <SearchTab/>
        <UserData/>
        <Tabs screenType="UserProfile"/>
        {/* <About/> */}
        {/* <WorkExp title='Work Experience'/>
        <WorkExp title='Education'/> */}
       </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({})