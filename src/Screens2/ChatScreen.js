import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ListCarts from '../components/ListCarts';

const ChatScreen = () => {
  const [activeMainTab, setActiveMainTab] = useState('personal');
  const [activeSubTab, setActiveSubTab] = useState('All');
 const chatData = {
  personal: {
    // this show the ALL button ListCards data 
  All: [
    { image: require('../../assets/profile1.png'), name: 'Afraz Mirza', designation: 'Developer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Shoaib Mirza', designation: 'Developer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Bella Swan', designation: 'Entrepreneur', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Tausif Mirza', designation: 'Team Lead', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Zuber Mirza', designation: 'Entrepreneur', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Bella Swan', designation: 'Entrepreneur', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Razeb Khan', designation: 'DevOps Engineer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Manish Ranawat', designation: 'Software Engineer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Ravi Kiren', designation: 'Software Engineer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Muskan Jain', designation: 'Quality Assurance', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Gunjan Suman', designation: 'Data Analyst', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Amil Ansari', designation: 'Junier Dr.', active: '3 days ago' },
  ],
// this show the group button ListCards data 
  Group: [
    { image: require('../../assets/Ron.png'), name: 'Group Member 1', designation: 'Team Lead', active: '1 day ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 2', designation: 'Developer', active: '2 hours ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 3', designation: 'Designer', active: 'Just now' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 4', designation: 'Team Lead', active: '1 day ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 5', designation: 'Developer', active: '2 hours ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 6', designation: 'Designer', active: 'Just now' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 7', designation: 'Team Lead', active: '1 day ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 8', designation: 'Developer', active: '2 hours ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 9', designation: 'Designer', active: 'Just now' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 10', designation: 'Team Lead', active: '1 day ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 11', designation: 'Developer', active: '2 hours ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 12', designation: 'Designer', active: 'Just now' },
  ],
  },
  company: {
    // this show the ALL button ListCards data 
  All: [
    { image: require('../../assets/profile1.png'), name: 'Afraz Mirza', designation: 'Developer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Shoaib Mirza', designation: 'Developer', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Bella Swan', designation: 'Entrepreneur', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Tausif Mirza', designation: 'Team Lead', active: '3 days ago' },
    { image: require('../../assets/profile1.png'), name: 'Zuber Mirza', designation: 'Entrepreneur', active: '3 days ago' },
  ],
  // this show the group button ListCards data 
  Group: [
    { image: require('../../assets/Ron.png'), name: 'Group Member 1', designation: 'Team Lead', active: '1 day ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 2', designation: 'Developer', active: '2 hours ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 3', designation: 'Designer', active: 'Just now' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 4', designation: 'Team Lead', active: '1 day ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 5', designation: 'Developer', active: '2 hours ago' },
    { image: require('../../assets/Ron.png'), name: 'Group Member 6', designation: 'Designer', active: 'Just now' },
  ],
  }
 };
 
 // it shown the current data based on active tabs
 const currentData = chatData[activeMainTab][activeSubTab];
  return (
    <View style={{backgroundColor: '#FFFBF9'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.containerTxt}>Chat</Text>
          <Image
            style={{width: 13, height: 13}}
            source={require('../../assets/editbutton.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'FFFBF9',
          }}>
          <TouchableOpacity
            onPress={() => setActiveMainTab('personal')}
            style={[
              styles.button,
              activeMainTab === 'personal'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}>
            <Text
              // style={
              //   {fontSize: 16, fontWeight: '600',  color: '#FA4616',lineHeight: 26}
              //   }
              style={
                activeMainTab === 'personal'
                  ? styles.activeText
                  : styles.inactiveText
              }>
              Personal
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => setActiveMainTab('company')}
            style={[
              styles.button,
              activeMainTab === 'company'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}>
            <Text
              style={
                activeMainTab === 'company'
                  ? styles.activeText
                  : styles.inactiveText
              }
              // style={{fontSize: 16, fontWeight: '600', color: '#FA4616', lineHeight: 26}}
            >
              Company
            </Text>
          </TouchableOpacity> */}
        </View>
        <SearchBox />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 15,
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 6,
            paddingHorizontal: 9,
            borderColor: '#FA4616',
            borderWidth: 1,
            borderRadius: 7,
             backgroundColor: activeSubTab === 'All' ? '#FA4616' : 'transparent'
          }}
          onPress={() => setActiveSubTab('All')}
          >
          <Text style={{color: activeSubTab === 'All' ? '#FFF' : '#FA4616', fontSize: 12, fontWeight: '700'}}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 6,
            paddingHorizontal: 9,
            borderColor: '#FA4616',
            borderWidth: 1,
            borderRadius: 7,
             backgroundColor: activeSubTab === 'Group' ? '#FA4616' : 'transparent'
          }}
          onPress={() => setActiveSubTab('Group')}
          >
          <Text style={{color: activeSubTab === 'Group' ? '#FFF' : '#FA4616', fontSize: 12, fontWeight: '700'}}>
            Group
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      contentContainerStyle={{ paddingBottom: 260 }}>
        {currentData.map((item, index) => (
          <ListCarts
            key={index}
            image={item.image}
            name={item.name}
            designation={item.designation}
            active={item.active}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const SearchBox = () => {
  return (
    <View style={styles.SearchBoxcontainer}>
      {/* <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{justifyContent: 'center'}}><Image style={{width: 15, height: 15, }} source={require('../../assets/arrowleft.png')}/></TouchableOpacity> */}
      <View style={[styles.SearchBoxsubContainer, {marginLeft: '2%'}]}>
        <Image
          style={{width: 16.2, height: 16.2}}
          source={require('../../assets/searchIcon.png')}
        />
        <TextInput
          style={{fontSize: 14, fontWeight: '400'}}
          placeholder="Search"
          placeholderTextColor="#FFF3ED"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // width: 375,
    // height: 98,
    backgroundColor: '#FA4616',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 45,
    gap: 15,
  },
  containerTxt: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    // paddingHorizontal: 10,
  },

  SearchBoxcontainer: {
    flexDirection: 'row',
    // width: 375,
    // height: 98,
    // backgroundColor: '#FA4616',
    // justifyContent: 'space-between',
    // paddingVertical: 15,
    // paddingHorizontal: 10,
    // paddingTop: 40,
  },
  SearchBoxsubContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFB093',
    // alignSelf: 'center',
    width: '98%',
    backgroundColor: '#FF7441',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 50,
    backgroundColor: '#FFE5D5',
    paddingVertical: 7,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: '#FFE5D5',
  },
  inactiveButton: {
    backgroundColor: '#FFFBF9',
  },
  activeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FA4616',
    lineHeight: 26,
    textAlign: 'center',
  },
  inactiveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#706F6E',
    lineHeight: 26,
    textAlign: 'center',
  },
});
