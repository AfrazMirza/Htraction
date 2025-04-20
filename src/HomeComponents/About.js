import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WorkExp from '../components/WorkExp';

const About = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{paddingBottom: 20}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>About Me</Text>
        <Text style={styles.allTxt}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Contact Info</Text>
        <View style={{gap: 15}}>
          <View
            style={styles.container}>
            <View style={styles.combinedContainers}>
              <Text style={styles.allTxt1}>Phone Number</Text>
              <Text style={styles.allTxt}>9999700130</Text>
            </View>
            <View
              style={styles.combinedContainers}>
              <Text style={styles.allTxt1}>Email Address</Text>
              <Text style={styles.allTxt}>9rohitk@iima.ac.in</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View
              style={styles.combinedContainers}>
              <Text style={styles.allTxt1}>Gender</Text>
              <Text style={styles.allTxt}>Male</Text>
            </View>
            <View
              style={styles.combinedContainers}>
              <Text style={styles.allTxt1}>Find Me</Text>
              <Image
                style={{width: 18, height: 18}}
                source={require('../../assets/linkedin.png')}
              />
            </View>
          </View>
          <View
            style={styles.combinedContainers}>
            <Text style={styles.allTxt1}>Address</Text>
            <Text style={styles.allTxt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>
          </View>
        </View>
      </View>
      <WorkExp title="Work Experience" experience="Add Experience" />
      <WorkExp title="Education" experience="Add Education" />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
  },
  combinedContainers: {
    flex: 1,
    backgroundColor: '#FFFBF9',
    paddingVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#FEC5B5',
  },
  allTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5C5B5B',
    lineHeight: 24,
  },
  allTxt1: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
});
