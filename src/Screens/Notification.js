import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import NotificationComp1 from '../CompanyComp/NotificationComp1';
import NotificationComp2 from '../CompanyComp/NotificationComp2';
import NotificationComp3 from '../CompanyComp/NotificationComp3';
import {useNavigation} from '@react-navigation/native';

const Notification = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../assets/arrowleft.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            color: '#ffffff',
            paddingHorizontal: 10,
          }}>
          Notification
        </Text>
      </View>
      <ScrollView style={{flex: 1, gap: 10, paddingVertical: 10}}>
        <NotificationComp1 />
        <NotificationComp2 />
        <NotificationComp1 />
        <NotificationComp3 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
        <NotificationComp1 />
      </ScrollView>
    </ScrollView>
  );
};

export default Notification;

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
});
