import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const ProgramDetailsComp = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.txt1}>End date</Text>
        <Text style={styles.txt2}>12 Oct 2024</Text>
      </View>
      <View style={styles.combinedView}>
        <Text style={styles.txt1}>About Program</Text>
        <Text style={styles.txt2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </View>
      <View style={styles.combinedView}>
        <Text style={styles.txt1}>Who should attend</Text>
        <Text style={styles.txt2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </View>
      <View style={styles.combinedView}>
        <Text style={styles.txt1}>Enter Application Process</Text>
        <Text style={styles.txt2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProgramDetailsComp;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    backgroundColor: '#FFFBF9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
    padding: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  combinedView: {
    paddingTop: 15,
  },
  txt1: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
  },
  txt2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
  },
});
