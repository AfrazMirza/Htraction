import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Details from './Details';
import IdeaValidation from './IdeaValidation';
import IdeaRating from './IdeaRating';
import { ScrollView } from 'react-native-gesture-handler';

const IdeaDetailsTab = () => {
  const [selectedTab, setSelectedTab] = useState('Details');

  return (
    <View >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Details')}
          style={[
            styles.tabButton, {borderBottomLeftRadius: 7, borderTopLeftRadius: 7},
            selectedTab === 'Details' && styles.activeTabButton,
          ]}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'Details' && styles.activeTabText,
            ]}>
            Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab('IdeaValidation')}
          style={[
            styles.tabButton,
            selectedTab === 'IdeaValidation' && styles.activeTabButton,
          ]}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'IdeaValidation' && styles.activeTabText,
            ]}>
            Idea Validation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab('IdeaRating')}
          style={[
            styles.tabButton, {borderBottomRightRadius: 7, borderTopRightRadius: 7},
            selectedTab === 'IdeaRating' && styles.activeTabButton,
          ]}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'IdeaRating' && styles.activeTabText,
            ]}>
            Idea Rating
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        {selectedTab === 'Details' && <Details/>}
        {selectedTab === 'IdeaValidation' && <IdeaValidation/>}
        {selectedTab === 'IdeaRating' && <IdeaRating />}
      </ScrollView>
    </View>
  );
};

export default IdeaDetailsTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    // paddingHorizontal: 5,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderRadius: 8,    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
    borderBottomColor: '#FCA38B'
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '33%',
    // backgroundColor: 'lime',
    alignItems: 'center'
  },
  activeTabButton: {
    backgroundColor: '#FA4616',
  },
  txt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#707070',
  },
  activeTabText: {
    color: '#ffffff',
  },
  contentContainer: {
    // flex: 1,
    // padding: 10,
  },
});
