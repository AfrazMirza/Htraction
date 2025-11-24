import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Hemburg from '../HomeComponents/Hemburg';
import Post from '../HomeComponents/Post';
import Cards from '../HomeComponents/Cards';
import ListCarts from '../components/ListCarts';
import Btns from '../HomeComponents/Btns';
import IdeaCards from '../IdeaHubComps/IdeaCards';
import CardIdeas from '../IdeaHubComps/CardIdeas';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {

  const handleBackPress = () => {
    Alert.alert(
      'Exit App', 'Are you sure you want to exit Htraction?',
      [{
        text: 'Cancle',
        onPress: () => null,
        style: 'cancle'
      },
    {
      text: 'Exit',
      onPress: () => BackHandler.exitApp(), 
    }]
    );
    return true;
  }

useFocusEffect(
  React.useCallback(() => {
    
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove();
  }, [])
);


  

  return (
    <View style={{flex: 1}}>
      <Hemburg />
   
      <View>
        <Post />
        <Btns/>
      </View>
      <Cards />
      {/* <CardIdeas/> */}
  
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
