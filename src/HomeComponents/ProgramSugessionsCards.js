import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const suggestions = [
  {
    id: 1,
    image: require('../../assets/mainImage.png'),
    heading1: 'Data Wave',
    heading2: 'IIT BHU Ecell',
    txt1: 'End date:',
    txt2: '30th Mar 2025',
  },
  {
    id: 1,
    image: require('../../assets/mainImage.png'),
    heading1: 'Data Wave',
    heading2: 'IIT BHU Ecell',
    txt1: 'End date:',
    txt2: '30th Mar 2025',
  },
  {
    id: 1,
    image: require('../../assets/mainImage.png'),
    heading1: 'Data Wave',
    heading2: 'IIT BHU Ecell',
    txt1: 'End date:',
    txt2: '30th Mar 2025',
  },
  {
    id: 1,
    image: require('../../assets/mainImage.png'),
    heading1: 'Data Wave',
    heading2: 'IIT BHU Ecell',
    txt1: 'End date:',
    txt2: '30th Mar 2025',
  },
];

const ProgramSugessionsCards = () => {
  return (
    //  <View style={{flex: 1}}>
    //      <FlatList
    //     data={suggestions}
    //     keyExtractor={(item, index) => index.toString()}
    //     renderItem={({item}) => {
    //       <View
    //         style={{
    //           flex: 1,
    //           borderRadius: 10,
    //           borderWidth: 1,
    //           borderColor: '#FEC7B9',
    //           padding: 10,
    //           gap: 8,
    //         }}>
    //         {/* <View style={{flexDirection: 'row', gap: 7}}> */}
    //           <Image source={(item.image)}/>
    //           {/* <View style={{flex: 1}}>
    //             <Text style={{fontSize: 12, fontWeight: '500'}}>
    //               CodeCrest Technologies
    //             </Text>
    //           </View>
    //         </View> */}
    //         <View>
    //           <Text style={{fontSize: 10, fontWeight: '500'}}>
    //             {item.heading1}
    //           </Text>
    //           <Text style={{fontSize: 10, fontWeight: '500'}}>
    //             {item.heading2}
    //           </Text>
    //         </View>
    //         <View
    //           style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    //           <Text style={{fontSize: 9, fontWeight: '400'}}>
    //             {item.txt1}
    //           </Text>
    //           <Text style={{fontSize: 9, fontWeight: '400'}}>
    //             {item.txt2}
    //           </Text>
    //         </View>
    //         {/* <View
    //           style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    //           <Text style={{fontSize: 10, fontWeight: '500'}}>Applied</Text>
    //           <Text style={{fontSize: 10, fontWeight: '500'}}>Closed</Text>
    //         </View> */}
    //         <TouchableOpacity
    //           //   onPress={()=>{navigation.navigate('ProgramDetails')}}
    //           style={{
    //             flex: 1,
    //             borderRadius: 10,
    //             borderWidth: 1,
    //             borderColor: '#FA4616',
    //             alignItems: 'center',
    //             paddingVertical: 7.5,
    //           }}>
    //           <Text style={{fontSize: 10, fontWeight: '600', color: '#FA4616'}}>
    //             View / Apply{' '}
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     }}
    //   />
    //  </View>

    <FlatList
      //   style={{flex: 1, gap: 10,}}
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: 10, flexGrow: 1}}
      data={suggestions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.mainContainer}>
          <Image
            source={item.image}
            style={{width: 145, height: 98, borderRadius: 10}}
          />
          {/* Added fixed size for image */}
          <View>
            <Text style={styles.txt1}>{item.heading1}</Text>
            <Text style={styles.txt2}>{item.heading2}</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.txt3}>{item.txt1}</Text>
            <Text style={styles.txt3}>{item.txt2}</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>View / Apply</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ProgramSugessionsCards;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
    gap: 8,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    fontSize: 12,
    fontWeight: '500',
  },
  txt2: {
    fontSize: 12,
    fontWeight: '700',
  },
  txt3: {
    fontSize: 9,
    fontWeight: '400',
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FA4616',
    alignItems: 'center',
    paddingVertical: 7.5,
  },
  btnTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FA4616',
  },
});
