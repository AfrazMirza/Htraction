import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WorkExp from '../components/WorkExp';
import {supabase} from '../lib/supabase';
import {useNavigation} from '@react-navigation/native';
const About = () => {
  const [profile, setProfile] = useState({});
  const navigation = useNavigation();
  // useEffect(() => {
  //   const loadProfile = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     const { data } = await supabase
  //       .from('profiles')
  //       .select('*')
  //       .eq('id', user.id)
  //       .single();

  //     if (data) setProfile(data);
  //   };

  //   loadProfile();
  // }, []);
  const fetchProfile = async () => {
    const {
      data: {user},
    } = await supabase.auth.getUser();
    if (!user) return;

    const {data, error} = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) console.error('Fetch error:', error);
    else setProfile(data);
  };

  useEffect(() => {
    fetchProfile();

    // Refresh data when screen comes into focus
    const unsubscribe = navigation.addListener('focus', fetchProfile);
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.mainContainer}>
      <View style={{paddingBottom: 20}}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
          {profile.about_me || 'No description added yet'}
        </Text>
      </View>
      <View style={{paddingBottom: 20}}>
        <Text style={styles.sectionTitle}>Contact Info</Text>
        <View style={{gap: 15}}>
          <View style={styles.container}>
            <View style={styles.infoContainers}>
              <Text style={styles.label}>Phone Number </Text>
              <Text style={styles.text}>
                {profile.contact_number || 'Not provided'}
              </Text>
            </View>
            <View style={styles.infoContainers}>
              <Text style={styles.label}>Email Address</Text>
              <Text style={styles.text}>{profile.email || 'Not provided'}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.infoContainers}>
              <Text style={styles.label}>Gender</Text>
              <Text style={styles.text}>
                {profile.gender || 'Not specified'}
              </Text>
            </View>
            <View style={styles.infoContainers}>
              <Text style={styles.label}>Find Me</Text>
              <View style={styles.socialIcons}>
                {profile.linkedin_url && (
                  <TouchableOpacity
                    style={{paddingHorizontal: 8}}
                    onPress={() => Linking.openURL(profile.linkedin_url)}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/linkedin1.png')}
                    />
                  </TouchableOpacity>
                )}
                {profile.instagram_url && (
                  <TouchableOpacity
                    style={{paddingHorizontal: 8}}
                    onPress={() => Linking.openURL(profile.instagram_url)}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/instagram.png')}
                    />
                  </TouchableOpacity>
                )}
                {profile.facebook_url && (
                  <TouchableOpacity
                    style={{paddingHorizontal: 8}}
                    onPress={() => Linking.openURL(profile.facebook_url)}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/facebook.png')}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Address</Text>
        {/* <View style={styles.infoContainers}>
          <Text style={styles.label}>Country</Text>
          <Text style={styles.text}>{profile.country || 'Not provided'}</Text>
          <Text style={styles.label}>State</Text>
          <Text style={styles.text}>{profile.state || 'Not provided'}</Text>
          <Text style={styles.label}>City</Text>
          <Text style={styles.text}>{profile.city || 'Not provided'}</Text>
          <Text style={styles.label}>Landmark</Text>
          <Text style={styles.text}>{profile.landmark || 'Not provided'}</Text>
          <Text style={styles.label}>Zip Code</Text>
          <Text style={styles.text}>{profile.zip_code || 'Not provided'}</Text>
        </View> */}

        <View style={styles.addressBox}>
          {['country', 'state', 'city', 'landmark', 'zip_code'].map(key => (
            <View key={key} style={styles.addressRow}>
              <Text style={styles.label}>
                {key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Text>
              <Text style={styles.text}>{profile[key] || 'Not provided'}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* <WorkExp title="Work Experience" experience="Add Experience" /> */}
      {/* <WorkExp title="Education" experience="Add Education" /> */}
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
  infoContainers: {
    flex: 1,
    backgroundColor: '#FFFBF9',
    paddingVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#FEC5B5',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5C5B5B',
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  socialIcons: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  icon: {
    width: 18,
    height: 18,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
    color: '#333333',
  },
  addressBox: {
    backgroundColor: '#FFFBF9',
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#FEC5B5',
  },
});
