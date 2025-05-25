import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Hemburg from '../HomeComponents/Hemburg';
import Post from '../HomeComponents/Post';
import Cards from '../HomeComponents/Cards';
import ListCarts from '../components/ListCarts';
import Btns from '../HomeComponents/Btns';

const Home = () => {


  

  return (
    <View style={{flex: 1}}>
      <Hemburg />
   
      <View>
        <Post />
        <Btns/>
      </View>
      <Cards />
  
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
