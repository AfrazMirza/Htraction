import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IdeaDetails from './IdeaDetails'
import Document from './Document'
import Discussion from './Discussion'

const EditDetailsTabs = () => {
    const [selectedTab, setSelectedTab] = useState("IdeaDetails")
  return (
    <View style={{flex: 1}}>
    <View
      style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedTab('IdeaDetails')}>
        <Text
          style={[
            styles.txt,
            selectedTab === 'IdeaDetails' && styles.activeTab,
          ]}>
          Idea Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTab('Document')}>
        <Text
          style={[
            styles.txt,
            selectedTab === 'Document' && styles.activeTab,
          ]}>
          Document
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTab('Discussion')}>
        <Text
          style={[
            styles.txt,
            selectedTab === 'Discussion' && styles.activeTab,
          ]}>
          Discussion
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentContainer}>
      {selectedTab === 'IdeaDetails' && <IdeaDetails/>}
      {selectedTab === 'Document' && <Document/>}
      {selectedTab === "Discussion" && <Discussion/>}
    </View>
  </View>
  )
}

export default EditDetailsTabs

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
    color: '#707070',
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#FA4616',
    color: '#FA4616',
  },
})