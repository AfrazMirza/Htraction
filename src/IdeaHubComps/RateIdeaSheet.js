import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import AllBtn from '../components/AllBtn';
import AllInputs from '../HomeComponents/AllInputs';

const  RateIdeaSheet = ({rateIdea}) => {
  const Numbers = ({title}) => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <View style={{marginHorizontal: 10}}>
        <Text
          style={styles.numberTxt}>
          {title}
        </Text>
        <View
          style={styles.numberContainer}>
          <TouchableOpacity
          //  style={styles.numbersBtnTxt}
          onPress={() => setActiveTab('1')} style={[styles.button, activeTab === '1' ? styles.activeButton  : styles.inactiveButton  ]}
          >
            <Text style={activeTab === '1' ? styles.activeText : styles.inactiveText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('2')} style={[styles.button, activeTab === '2' ? styles.activeButton  : styles.inactiveButton  ]}>
            <Text style={activeTab === '2' ? styles.activeText : styles.inactiveText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('3')} style={[styles.button, activeTab === '3' ? styles.activeButton  : styles.inactiveButton  ]}>
            <Text style={activeTab === '3' ? styles.activeText : styles.inactiveText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('4')} style={[styles.button, activeTab === '4' ? styles.activeButton  : styles.inactiveButton  ]}>
            <Text style={activeTab === '4' ? styles.activeText : styles.inactiveText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('5')} style={[styles.button, activeTab === '5' ? styles.activeButton  : styles.inactiveButton  ]}>
            <Text style={activeTab === '5' ? styles.activeText : styles.inactiveText}>5</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => rateIdea.current.close()}>
            <Image
              style={{width: 14, height: 14}}
              source={require('../../assets/cross.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Rate Idea</Text>
        </View>
        <Text
          style={styles.rating}>
          Please take a Moment to rate the on a scale of 1 to 5, to 5 being the
          highest
        </Text>
        <Numbers title = 'Product market fit'/>
        <Numbers title = 'Market size'/>
        <Numbers title = 'Uniqueness'/>

        <AllInputs title='Please provide any additional feedback you have about the idea'  input="Additional feedback" customeStyle={{textAlignVertical: 'top'}} isMultiline={true} />
      </View>
      <AllBtn
        title="Save Changes"
        onTab={() => {
          navigation.navigate('MyProfile');
        }}
      />
    </View>
  );
};

export default RateIdeaSheet;

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // justifyContent: 'space-between', // Pushes content and button apart
    paddingBottom: 20, // Padding to avoid bottom edge
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  rating: {
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 25,
    color: '#747474',
  },
  numberTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#606060',
    lineHeight: 26,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  activeButton: {
    backgroundColor: '#FFE5D5',
    borderColor: '#FEC5AF',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 11,
    paddingHorizontal: 21,
  },
  inactiveButton: {
    borderColor: '#747474',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 11,
    paddingHorizontal: 21,
  },
  activeText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FA4616',
    lineHeight: 26,
    textAlign: 'center',
  },
  inactiveText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#706F6E',
    lineHeight: 26,
    textAlign: 'center',
  },
});
