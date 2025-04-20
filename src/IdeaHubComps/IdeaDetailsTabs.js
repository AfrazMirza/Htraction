import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Details from './Details';

const IdeaDetailsTabs = () => {
    const [selectedTab, setSelectedTab] = useState('Details');
  return (
    <View >
      <View>
 <TouchableOpacity
          onPress={() => setSelectedTab('Details')}
          style={[
            styles.tabButton,
            selectedTab === 'Details' && styles.activeTabButton,
          ]}>
          <Text
            style={[
              styles.txt,
              selectedTab === 'Details' && styles.activeTabText,
            ]}>
            sfbjkerjfeb
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'Details' && <Details />}
        {/* {selectedTab === 'IdeaValidation' && <IdeaValidation />}
        {selectedTab === 'IdeaRating' && <IdeaRating />} */}
      </View>
    </View>
  )
}

export default IdeaDetailsTabs

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
      },
      container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        paddingHorizontal: 5,
      },
      tabButton: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
      },
      activeTabButton: {
        backgroundColor: 'lime',
      },
      txt: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
      },
})