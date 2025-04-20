import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import AllBtn from '../components/AllBtn';
import ManageAccessSheet from './ManageAccessSheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';
// import GroupChatCart from './GroupChatCart';

const Details = () => {
  const Cards = props => {
    return (
      <View style={styles.cardsContainer}>
        <Image
          style={styles.cardsImg}
          source={require('../../assets/profile1.png')}
        />
        <View>
          <Text style={styles.cardsTxt1}>{props.title}</Text>
          <Text style={styles.cardsTxt2}>{props.post}</Text>
        </View>
      </View>
    );
  };
  const panelRef = useRef(null);
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingBottom: 310}}>
        <View>
          <Text style={styles.containersTxt}>Overview</Text>
          <View style={styles.container}>
            <Text style={styles.subTxt1}>People access to this idea</Text>
            <TouchableOpacity
              onPress={() => panelRef.current.open()}
              style={styles.containerBtn}>
              <Text style={styles.containerTxt}>manage access</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsView}>
            <Cards title="Kumar rohit" post="Owner" />
            <Cards title="Edward collin" post="View" />
          </View>
          <Text style={styles.subTxt1}>Title</Text>
          <Text style={styles.subTxt}>Title that best reflects your idea</Text>
          <Text style={styles.subTxt1}>Domain</Text>
          <Text style={styles.subTxt}>
            Select a specific domain your idea relates to
          </Text>
        </View>

        <View style={styles.containers}>
          <Text style={styles.containersTxt}>Problem & Solutions</Text>
          <Text style={styles.subTxt1}>Identified Problem</Text>
          <Text style={styles.subTxt}>
            Clearly state and elaborate on the problem your idea aims to address
          </Text>
          <Text style={styles.subTxt1}>Solution Effectiveness</Text>
          <Text style={styles.subTxt}>
            Explain how effective your proposed solution is in addressing the
            identified problem.
          </Text>
          <Text style={styles.subTxt1}>Unique Value Proposition</Text>
          <Text style={styles.subTxt}>
            Describe the distinctive value your idea offers
          </Text>
        </View>
        <View style={styles.containers}>
          <Text style={styles.containersTxt}>Business Model & Competitors</Text>
          <Text style={styles.subTxt1}>Major Revenue Stream</Text>
          <Text style={styles.subTxt}>
            Specify the primary source through which your business generates
            revenue
          </Text>
          <Text style={styles.subTxt1}>Competitors</Text>
          <Text style={styles.subTxt}>
            List and analyze the key competitors in your idea.
          </Text>
          <Text style={styles.subTxt1}>Target Audience</Text>
          <Text style={styles.subTxt}>
            Describe the specific demographic or group your idea.
          </Text>
        </View>
      <AllBtn
        title="Finalize this idea"
        onTab={() => {
          navigation.navigate('MyProfile');
        }}
      />
      </ScrollView>

      {/* manage Access Component sheet  */}
      <RBSheet
        ref={panelRef}
        height={650} // Adjust height as needed
        openDuration={250}
        closeOnDragDown={false}
        customStyles={{
          container: {borderTopLeftRadius: 15, borderTopRightRadius: 15},
        }}>
        {/* <Text style={{ paddingVertical: 20 }}>Some random content</Text> */}
        <ManageAccessSheet panelRef={panelRef} />
      </RBSheet>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerBtn: {
    paddingVertical: 6,
    paddingHorizontal: 8.5,
    backgroundColor: '#FFF3ED',
    borderRadius: 5,
  },
  containerTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FA4616',
  },
  containers: {
    marginVertical: 10,
  },
  containersTxt: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEC7B9',
    padding: 10,
    paddingRight: 25,
    marginVertical: 10,
  },
  cardsImg: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  cardsTxt1: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
  },
  cardsTxt2: {
    fontSize: 10,
    fontWeight: '400',
    color: '#888',
  },
  cardsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTxt: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 25,
    color: '#747474',
  },
  subTxt1: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 26,
    color: '#383838',
  },
});
