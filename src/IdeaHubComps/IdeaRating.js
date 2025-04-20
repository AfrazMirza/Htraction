import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IdeaRatingsCart from './IdeaRatingsCart'

const IdeaRating = () => {
  return (
    <View style={{marginHorizontal: 10, 
    }}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Idea Ratings</Text>
      <IdeaRatingsCart/>
      <IdeaRatingsCart/>
      <IdeaRatingsCart/>
    </View>
  )
}

export default IdeaRating

const styles = StyleSheet.create({})