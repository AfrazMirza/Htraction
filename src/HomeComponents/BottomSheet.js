import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AllInputs from './AllInputs';
import AllBtn from '../components/AllBtn';
import {ScrollView} from 'react-native-gesture-handler';

const BottomSheet = ({panelRef, navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => panelRef.current.close()}>
          <Image
            style={{width: 14, height: 14}}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Add Experience</Text>
      </View>
      <AllInputs title="Enter Institution Name" input="Institude Name" />
      <AllInputs title="Enter Degree Name" input="Select Degree Name" />
      <AllInputs title="Field of Study" input="Enter Field of Study" />
      <AllInputs title="Start Month and Year" input="MM/YYYY" />
      <AllInputs title="Graduation Date" input="MM/YYYY" />
      {/* <AllInputs title="Description" input="Description" customeStyle={{textAlignVertical: 'top'}} isMultiline={true} /> */}
      <AllBtn
        title="Add"
        onTab={() => {
          navigation.navigate('MyProfile');
        }}
      />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
});
