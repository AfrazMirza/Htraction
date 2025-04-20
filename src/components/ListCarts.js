import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ListCarts = ({name, designation, active, image}) => {
  const navigation = useNavigation()
  return (
     <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('GroupChats')}}>
          <View
            style={styles.container}>
           <View style={{flexDirection: 'row'}}>
           <Image
              style={{height: 36, width: 36, marginRight: 8}}
              source={image}
            />
            <View>
                <Text style={{color: '#383838', fontWeight: '500', fontSize: 14}}>
                {name}
                </Text>
                <Text style={{color: '#383838', fontWeight: '400', fontSize: 12}}>
                 {designation}
                </Text>
            </View>
           </View>
           <View style={{alignSelf: 'flex-start', paddingVertical: 15}}>
            <Text  style={{color: '#383838', fontWeight: '400', fontSize: 10, alignSelf:'stretch'}}>{active}</Text>
           </View>
          </View>
          </TouchableOpacity>
          
        </View>
        //iska component home.js file me he 
  )
}

export default ListCarts

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //   backgroundColor: 'green',
        width: 345,
        height: 67,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFE5D5',
        paddingHorizontal: 10,
        marginBottom: 10
      }
})