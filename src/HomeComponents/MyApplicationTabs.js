import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ApplicationDetailsCards from './ApplicationDetailsCards';

const MyApplicationTabs = () => {
  const [selectedTab, setSelectedTab] = useState('AdditionalDetails');
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.btn,
            selectedTab === 'AdditionalDetails' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('AdditionalDetails')}>
          <Text style={styles.btnTxt}>
            Additional Deatils
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            selectedTab === 'ProfessionalDetails' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('ProfessionalDetails')}>
          <Text style={styles.btnTxt}>
            Professional Details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'AdditionalDetails' && (
          <ApplicationDetailsCards
            txt1="1. Gender"
            txt2="Male"
            txt3="2. Latest Photo"
            txt4="source-4280758_640.jpg"
          />
        )}
        {selectedTab === 'ProfessionalDetails' && (
          <ApplicationDetailsCards
            txt1="1.Languages / Technologies known"
            txt2="JAVA,NODE JS,ANGULAR JS,REACT JS"
            txt3="2. Databases Known"
            txt4="PostgreSQL,SQL"
          />
        )}
        {/* {selectedTab === "Programs" && <Programs/>} */}
      </View>
    </View>
  );
};

export default MyApplicationTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    //   justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  contentContainer: {
    padding: 10,
  },
  btn: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DBD6D6',
    color: '#707070',
    alignItems: 'center',
    paddingVertical: 6.5,
    paddingHorizontal: 10,
  },
  btnTxt: {
    flexDirection: 'row',
  gap: 10,
  //   justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  activeTab: {
    backgroundColor: '#FFE5D5',
    color: '#FA4616',
    borderRadius: 12,
    paddingVertical: 6.5,
    paddingHorizontal: 10,
  },
});
