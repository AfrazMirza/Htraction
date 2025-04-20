import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Evaluators from './Evaluators';
import Collaborators from './Collaborators';
import Recommendations from './Recommendations';
import Search from './Search';

const ShareIdeaSheet = ({panelRef}) => {
  const ShareIdeaTabs = () => {
    const [selectedTab, setSelectedTab] = useState('CompaniesAbout');
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setSelectedTab('Recommandations')}>
            <Text
              style={[
                styles.txt,
                selectedTab === 'Recommandations' && styles.activeTab,
              ]}>
              Recommendations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('Search')}>
            <Text
              style={[
                styles.txt,
                selectedTab === 'Search' && styles.activeTab,
              ]}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {selectedTab === 'Recommandations' && <Recommendations />}
          {selectedTab === 'Search' && <Search />}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.shareContainer}>
          <TouchableOpacity onPress={() => panelRef.current.close()}>
            <Image
              style={{width: 14, height: 14}}
              source={require('../../assets/cross.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Share Idea</Text>
        </View>
      </View>

      <ShareIdeaTabs />
    </View>
  );
};

export default ShareIdeaSheet;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between', // Pushes content and button apart
    paddingBottom: 20, // Padding to avoid bottom edge
  },
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingVertical: 15,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    gap: 10,
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
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
