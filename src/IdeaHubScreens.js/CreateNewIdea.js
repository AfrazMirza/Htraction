import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';
import { useNavigation } from '@react-navigation/native';

const CreateNewIdea = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{paddingBottom: 45, backgroundColor: '#FFFBF9'}}>
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
          Create New Idea
        </Text>
      </View>
      <Text style={styles.txt}>Details</Text>
      <AllInputs title="Idea title (maximum 50 words)" input="Title that best reflects your idea" />
      <AllInputs title="Idea Domain" input="Select a specific domain your idea..." />
      {/* <AllInputs title="Identified Problem" input="someting" /> */}
      <Text style={styles.txt}>Problems & Solutions</Text>
      <AllInputs title="Identified Problem" input="Clearly state and elaborate on the problem your idea aims to address" customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
      <AllInputs title="Solution Effectiveness" input="Explain how effective your proposed solution is in addressing the identified problem." customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
      <AllInputs title="Unique Value Proposition" input="Describe the distinctive value your idea offers" customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
      <Text style={styles.txt}>Business Model & Competitors</Text>
      <AllInputs title="Major Revenue Stream" input="Specify the primary source through which your business generates revenue" customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
      <AllInputs title="Competitors" input="List and analyze the key competitors in your idea." customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
      <AllInputs title="Target Market" input="Describe the specific demographic or group your idea." customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />

      <AllBtn
        onTab={() => {
          navigation.replace('Detail');
        }}
        title="Save Changes"
      />
    </View>
  </ScrollView>
  )
}

export default CreateNewIdea

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
        marginTop: 15,
        fontWeight: '600',
        paddingHorizontal: 12,
        color: '#383838',
      },
})