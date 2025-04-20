import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const GroupChatCart = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
          navigation.navigate('GroupChats');
        }}>
     <Image
        style={styles.containerImg}
        source={require('../../assets/profile1.png')}
      />
        <Text style={styles.containerBtnTxt}>{props.name}</Text>
     </TouchableOpacity>
    </View>
  );
};

export default GroupChatCart;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
    padding: 10,
    marginVertical: 5,
  },
  containerImg: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  containerBtnTxt: {
    fontSize: 14,
    fontWeight: '500',
  },
});
