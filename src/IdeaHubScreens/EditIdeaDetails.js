import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import EditDetailsTabs from '../IdeaHubComps/EditDetailsTabs';
import {useNavigation} from '@react-navigation/native';

const EditIdeaDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../assets/arrowleft.png')}
          />
        </TouchableOpacity>
        <Text
          style={styles.containerTxt}>
          Title that best reflects your idea
        </Text>
      </View>
      {/* <Tabs/> */}
      <EditDetailsTabs />
    </View>
  );
};

export default EditIdeaDetails;

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
