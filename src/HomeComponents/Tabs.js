import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import About from './About';
import MyActivity from './MyActivity';
import { useState } from 'react';
import Programs from './Programs';
import WorkExp from '../components/WorkExp';

const Tabs = ({ screenType }) => {

    const [selectedTab, setSelectedTab] = useState("About")
  return (
    <View style={{flex: 1}}>
        <View
      style={styles.container}>
      <TouchableOpacity onPress={()=> setSelectedTab("About")} >
        <Text style={[styles.txt, selectedTab === "About" && styles.activeTab]}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setSelectedTab("MyActivity")} >
        <Text style={[styles.txt, selectedTab === "MyActivity" && styles.activeTab]}>{screenType === 'MyProfile' ? 'MyActivity' : 'Activity'}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> setSelectedTab("WorkExp")} >
        <Text style={[styles.txt, selectedTab === "WorkExp" && styles.activeTab]}>Education</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity  onPress={()=> setSelectedTab("Programs")} >
        <Text style={[styles.txt, selectedTab === "Programs" && styles.activeTab]}>Programs</Text>
      </TouchableOpacity> */}
    </View>
    <View style={styles.contentContainer}>
        {selectedTab === "About" && <About />}
        {selectedTab === "MyActivity" && <MyActivity screenType="MyProfile"/>}
        {selectedTab === "MyActivity" && <MyActivity screenType="UserProfile"/>}
        {/* {selectedTab === "Programs" && <Programs/>} */}
        {selectedTab === "WorkExp" && <WorkExp/>}
      </View>
    </View>
  );
};

export default Tabs;

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
        borderBottomColor: "#FA4616",
        color: "#FA4616",
      },
});
