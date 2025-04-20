import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GroupChatCart from './GroupChatCart';

const Discussion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>Discussion</Text>

      <GroupChatCart image="" name="kumar rohit  group" />
      <GroupChatCart image="" name="Edward collin  group" />
      <GroupChatCart image="" name="kumar rohit  group" />
      <GroupChatCart image="" name="Edward collin  group" />
      <GroupChatCart image="" name="kumar rohit  group" />
      <GroupChatCart image="" name="Edward collin  group" />
      <GroupChatCart image="" name="kumar rohit  group" />
      <GroupChatCart image="" name="Edward collin  group" />
    </View>
  );
};

export default Discussion;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  containerTxt: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 15,
  },
});
