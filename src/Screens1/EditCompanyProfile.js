import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';
import {useNavigation} from '@react-navigation/native';

const EditCompanyProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingBottom: 45}}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/arrowleft.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: '#ffffff',
              paddingHorizontal: 10,
            }}>
            Edit Company Profile
          </Text>
        </View>
        <AllInputs title="Your company name" input="Your company name" />
        <AllInputs title="I am:" input="Enterpreneur" />
        <AllInputs title="Quick Introduction" input="someting" />
        <AllInputs title="Establishment Year" input="Year" />
        <AllInputs title="Industry" input="Industry" />
        <AllInputs title="About me" input="About me" customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
        <AllInputs title="Contact number" input="Contact number" />
        <AllInputs title="Email Address" input="Email Address" />
        <AllInputs title="Your LinkedIn profile URL" input="URL" />
        <AllInputs
          title="Your Instagram profile URL"
          input="Instagram profile URL"
        />
        <AllInputs
          title="Your Facebook profile URL"
          input="Facebook profile URL"
        />
        <Text style={styles.txt}>Address</Text>
        <AllInputs title="Country" input="India" />
        <AllInputs title="State" input="State" />
        <AllInputs title="City" input="City" />
        <AllInputs title="Zip Code" input="Zip Code" />

        <AllBtn
          onTab={() => {
            navigation.replace('ZepTechCompany');
          }}
          title="Save Changes"
        />
      </View>
    </ScrollView>
  );
};

export default EditCompanyProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: 375,
    // height: 98,
    backgroundColor: '#FA4616',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 45,
  },
  txt: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 12,
    color: '#383838',
  },
});
