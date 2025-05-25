import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AllInputs from '../HomeComponents/AllInputs';
import AllBtn from '../components/AllBtn';
import {useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
// import { Keyboard } from 'react-native';


const EditProfile = () => {

  // InputWithPlaceholder for AllInputs that is used in the editprofile 
const InputWithPlaceholder = ({
  title,
  value,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  ...props
}) => {
  return (
    <AllInputs
      title={title}
      input={value || placeholder}
      onChangeText={onChangeText}
      editable={true}
      keyboardType={keyboardType}
      {...props}
    />
  );
};

  const navigation = useNavigation();
  
  const [formData, setFormData] = useState({
    id: '', 
    full_name: '',
    entrepreneur_type: '',
    about_me: '',
    contact_number: '',
    gender: '',
    email: '',
    linkedin_url: '',
    instagram_url: '',
    facebook_url: '',
    country: '',
    state: '',
    city: '',
    landmark: '',
    zip_code: '',
    created_at: '',
    updated_at: ''
  });
  const [loading, setLoading] = useState(false);


   // Load existing profile data
   useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (data) setFormData(data);
      if (data) {
        console.log('Fetched profile data:', data);
        setFormData(data);
      }
    };
    
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) throw userError;
      if (!user) throw new Error('No user logged in');
  
      // Create update payload
      const updatePayload = {
        full_name: formData.full_name,
        entrepreneur_type: formData.entrepreneur_type,
        about_me: formData.about_me,
        contact_number: formData.contact_number,
        gender: formData.gender,
        email: formData.email,
        linkedin_url: formData.linkedin_url,
        instagram_url: formData.instagram_url,
        facebook_url: formData.facebook_url,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        landmark: formData.landmark,
        zip_code: formData.zip_code,
        updated_at: new Date().toISOString()
      };
  
      console.log('Update payload:', updatePayload);
  
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          ...updatePayload,
          id: user.id
        }, {
          returning: 'representation', // Change to 'representation' to get updated data
          onConflict: 'id'
        });
  
      if (error) throw error;
  
      console.log('Update successful');
      Alert.alert('Success', 'Profile updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
      
    } catch (error) {
      console.error('Save error:', error);
      Alert.alert('Error', error.message || 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView 
  //   keyboardShouldPersistTaps="handled"
  // onScrollBeginDrag={Keyboard.dismiss}
  >
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
            Edit Profile
          </Text>
        </View>

        <InputWithPlaceholder
  title="Your name"
  placeholder="Enter your name"
  value={formData.full_name} // Changed from formData.id
  onChangeText={text => setFormData({...formData, full_name: text})}
/>

        <InputWithPlaceholder
  title="I am:"
  placeholder="Entrepreneur"
  value={formData.entrepreneur_type}
  onChangeText={text => setFormData({...formData, entrepreneur_type: text})}
/>

<InputWithPlaceholder
  title="About me"
  placeholder="About me"
  value={formData.about_me}
  onChangeText={text => setFormData({...formData, about_me: text})}
  customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}
/>


<InputWithPlaceholder
  title="Contact number"
  placeholder="+91 1234567890"
  value={formData.contact_number}
  onChangeText={text => setFormData({...formData, contact_number: text})}
/>
<InputWithPlaceholder
  title="Email Address"
  placeholder="Enter your email"
  value={formData.email}
  onChangeText={text => setFormData({...formData, email: text})}
/>

<InputWithPlaceholder
  title="Your Gender:"
  placeholder="Your Gender"
  value={formData.gender}
  onChangeText={text => setFormData({...formData, gender: text})}
/>
<InputWithPlaceholder
  title="Your LinkedIn profile URL"
  placeholder="Your LinkedIn profile URL"
  value={formData.linkedin_url}
  onChangeText={text => setFormData({...formData, linkedin_url: text})}
/>

<InputWithPlaceholder
  title="Your Instagram profile URL"
  placeholder="Your Instagram profile URL"
  value={formData.instagram_url}
  onChangeText={text => setFormData({...formData, instagram_url: text})}
/>
<InputWithPlaceholder
  title="Your Facebook profile URL"
  placeholder="Your Facebook profile URL"
  value={formData.facebook_url}
  onChangeText={text => setFormData({...formData, facebook_url: text})}
/>
<InputWithPlaceholder
  title="Country"
  placeholder="Entry Country Name"
  value={formData.country}
  onChangeText={text => setFormData({...formData, country: text})}
/>

<InputWithPlaceholder
  title="State"
  placeholder="State"
  value={formData.state}
  onChangeText={text => setFormData({...formData, state: text})}
/>
<InputWithPlaceholder
  title="City"
  placeholder="City"
  value={formData.city}
  onChangeText={text => setFormData({...formData, city: text})}
/>
<InputWithPlaceholder
  title="Landmark"
  placeholder="Landmark"
  value={formData.landmark}
  onChangeText={text => setFormData({...formData, landmark: text})}
  customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}
/>

<InputWithPlaceholder
  title="ZipCode"
  placeholder="ZipCode"
  value={formData.zip_code}
  onChangeText={text => setFormData({...formData, zip_code: text})}
/>
        {/* <AllInputs title="Your name" input="Your name" />
        <AllInputs title="I am:"  input={formData.entrepreneur_type}
      onChangeText={text => setFormData({...formData, entrepreneur_type: text})} /> */}
        {/* <AllInputs title="Quick Introduction" input="someting" /> */}
        {/* <AllInputs title="About me"  input={formData.about_me}
      onChangeText={text => setFormData({...formData, about_me: text})} customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
        <AllInputs title="Contact number"  input={formData.contact_number}
      onChangeText={text => setFormData({...formData, contact_number: text})} />
        <AllInputs title="Email Address"  input={formData.email}  
  onChangeText={text => setFormData({...formData, email: text})} />
        <AllInputs title="Your Gender:"  input={formData.gender}
      onChangeText={text => setFormData({...formData, gender: text})}/>
        <AllInputs title="Your LinkedIn profile URL"  input={formData.linkedin_url}
      onChangeText={text => setFormData({...formData, linkedin_url: text})} /> */}
        {/* <AllInputs title="Your X profile URL" input="X profile URL" /> */}
        {/* <AllInputs
          title="Your Instagram profile URL"
          input={formData.instagram_url}
          onChangeText={text => setFormData({...formData, instagram_url: text})}
        />
        <AllInputs
          title="Your Facebook profile URL"
          input={formData.facebook_url}
          onChangeText={text => setFormData({...formData, facebook_url: text})}
        />
        <Text style={styles.txt}>Address</Text>
        <AllInputs title="Country"  input={formData.country}
      onChangeText={text => setFormData({...formData, country: text})} />
        <AllInputs title="State"  input={formData.state}
      onChangeText={text => setFormData({...formData, state: text})} />
        <AllInputs title="City"  input={formData.city}
      onChangeText={text => setFormData({...formData, city: text})} />
        <AllInputs title="Landmark"  input={formData.landmark}
      onChangeText={text => setFormData({...formData, landmark: text})} customStyle={{ height: 150, textAlignVertical: 'top', }} isMultiline= {true}  />
        <AllInputs title="Zip Code"  input={formData.zip_code}
      onChangeText={text => setFormData({...formData, zip_code: text})} /> */}

        <AllBtn
         onTab={handleSave}  // Directly use handleSave function
         title={loading ? "Saving..." : "Save Changes"}
         disabled={loading}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;

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
