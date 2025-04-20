import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IdeaRatingsCart = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.subConatinerImg}
            source={require('../../assets/profile1.png')}
          />
          <View>
            <Text style={styles.subConatinerTxt1}>Tom Latham</Text>
            <Text style={styles.subConatinerTxt2}>10 days ago</Text>
          </View>
        </View>
        <View>
          <Text style={styles.txt}>Product market fit: 5</Text>
          <Text style={styles.txt}>Market size: 4</Text>
          <Text style={styles.txt}>Uniqueness: 4</Text>
          <Text style={styles.txt}>Addition Description: Good</Text>
        </View>
      </View>
    </View>
  );
};

export default IdeaRatingsCart;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: '#FEC7B9',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginVertical: 6,
  },
  subConatinerImg: {
    width: 32,
    height: 32,
    marginRight: 5,
    borderRadius: 20,
    borderColor: '#FFE5D5',
    borderWidth: 2,
  },
  subConatinerTxt1: {
    fontSize: 14,
    fontWeight: '500',
  },
  subConatinerTxt2: {
    fontSize: 10,
    fontWeight: '400',
    color: '#888888',
  },
  txt: {
    fontSize: 14,
    fontWeight: '700',
    color: '#747474',
    lineHeight: 26,
  },
});
