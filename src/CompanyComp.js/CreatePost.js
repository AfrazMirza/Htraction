import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';

const CreatePost = ({panelRef}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => panelRef.current.close()}>
          <Image
            style={{width: 14, height: 14}}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Create Post</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 3, paddingTop: 20, paddingHorizontal: 12,}}>
        <Image style={{width: 37, height: 37}} source={require('../../assets/profile1.png')}/>
        <Text style={{fontSize: 18, fontWeight: '500'}}>Kumar Rohit!</Text>
      </View>
      <AllInputs  input="Share Something" customeStyle={{textAlignVertical: 'top'}} isMultiline={true} />
      <Text style={styles.txt}>Contact Details</Text>
      <AllInputs title="Your Question" input="Your Question" />
      <AllInputs title="Option 1" input="Your Question" />
      <AllInputs title="Option 2" input="Your Question" />
      {/* <AllInputs title="Start Month and Year" input="MM/YYYY" /> */}
      <AllBtn
        title="Post"
        onTab={() => {
          navigation.navigate('MyProfile');
        }}
      />
    </View>
  )
}

export default CreatePost

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
      txt: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingTop: 10,
        color: '#383838',
      },
})