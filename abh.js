import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Details from './Details'
import IdeaValidation from './IdeaValidation'
import IdeaRating from './IdeaRating'

const IdeaDetailsTab = () => {
    const [selectedTab, setSelectedTab] = useState("Details")
  return (
    <Text>jhjhjjhjhjjjjjjjjjjjjj</Text>
  //   <View style={{flex: 1}}>
  //   <View
  //     style={styles.container}>
  //     <TouchableOpacity onPress={() => setSelectedTab('Details')}>
  //       <Text
  //         style={[
  //           styles.txt,
  //           selectedTab === 'Details' && styles.activeTab,
  //         ]}>
  //         Details
  //       </Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={() => setSelectedTab('IdeaValidation')}>
  //       <Text
  //         style={[
  //           styles.txt,
  //           selectedTab === 'IdeaValidation' && styles.activeTab,
  //         ]}>
  //         Idea Validation
  //       </Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={() => setSelectedTab('IdeaRating')}>
  //       <Text
  //         style={[
  //           styles.txt,
  //           selectedTab === 'IdeaRating' && styles.activeTab,
  //         ]}>
  //         Idea Rating
  //       </Text>
  //     </TouchableOpacity>
  //   </View>
  //   <View style={styles.contentContainer}>
  //     {selectedTab === 'Details' && <Details/>}
  //     {selectedTab === 'IdeaValidation' && <IdeaValidation/>}
  //     {selectedTab === "IdeaRating" && <IdeaRating/>}
  //   </View>
  // </View>
  )
}

export default IdeaDetailsTab

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 5,
        // paddingVertical: 15,
        // borderBottomColor: '#E0E0E0',
        // borderBottomWidth: 1,
      },
  txt: {
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#5C5C5C'
  },
  activeTab: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#FA4616',
    // color: '#FA4616',
    backgroundColor: '#FA4616',
    color: '#ffffff'
  },
})