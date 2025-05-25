import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// Stack Screens
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import SetPassword from '../Screens/SetPassword';
import SplashScreen1 from '../Screens/SplashScreen1';
import SplashScreen2 from '../Screens/SplashScreen2';
import OTPVerification from '../Screens/OTPVerification';
import EditProfile from '../Screens1/EditProfile';
import ProgramDetails from '../Screens1/ProgramDetails';
import ContactDetails from '../Screens2/ContactDetails';
import PageDetails from '../Screens2/PageDetails';
import ComponyProfile from '../Screens1/ComponyProfile';
import Notification from '../Screens/Notification';
import EditIdeaDetails from '../IdeaHubScreens.js/EditIdeaDetails';
import GroupChats from '../IdeaHubScreens.js/GroupChats';
import CreateNewIdea from '../IdeaHubScreens.js/CreateNewIdea';

// Tab Screens
import IdeaHub from '../Screens2/IdeaHub';
import Home from '../Screens/Home';
import ChatScreen from '../Screens2/ChatScreen';
import Insights from '../Screens2/Insights';
import Setting from '../Screens2/Setting';

// Drawer Screens
import MyProfile from '../Screens1/MyProfile';
import CompanyDetails from '../Screens2/CompanyDetails';
import Connections from '../Screens1/Connections';
import NewMessage from '../Screens1/NewMessage';

// deeplinking the supabase database to our react native app 
import linking from '../config/deepLinking';
import AuthHandler from '../components/AuthHandler';
import { supabase } from '../lib/supabase';

// Bottom Tab Navigation
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false, // Hide default label
        tabBarStyle: {
          height: 86,
          borderColor: '#FFE5D5',
          borderTopWidth: 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderLeftColor: '#FFE5D5',
          borderLeftWidth: 0.2,
          borderRightColor: '#FFE5D5',
          borderRightWidth: 0.2,
          // borderTopColor: '#FFE5D5',
          // elevation: 0,
          // position: 'absolute',
          overflow: 'hidden',
          // paddingBottom: 10,
        },

        tabBarIcon: ({focused}) => {
          let iconSource;
          let label;

          switch (route.name) {
            case 'Home':
              iconSource = require('../../assets/Home.png');
              label = 'Home';
              break;
            case 'IdeaHub':
              iconSource = require('../../assets/greyBulb.png');
              label = 'IdeaHub';
              break;
            case 'ChatScreen':
              iconSource = require('../../assets/Chat.png');
              label = 'Chat';
              break;
            case 'Insights':
              iconSource = require('../../assets/automated.png');
              label = 'Insights';
              break;
          }

          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // flexDirection: 'column',
                width: 80,
                // backgroundColor: 'lime',
                marginTop: 40,
                position: 'absolute',
              }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#FA4616' : '#A1A1A1',
                  marginBottom: 4,
                }}
              />
              <Text
                style={{
                  marginTop: 4,
                  color: focused ? '#FA4616' : '#A1A1A1',
                  fontSize: 14,
                  fontWeight: focused ? '600' : '600',
                }}>
                {label}
              </Text>
            </View>
          );
        },
      })}>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Home" component={DrawerTabs} />
      <Tab.Screen name="IdeaHub" component={IdeaHub} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      {/* <Tab.Screen name="Insights" component={Insights} /> */}
    </Tab.Navigator>
  );
};

const CustomDrawerContent = props => {
  const {navigation} = props;
 const [userName, setUserName] = useState('Guest');
   useEffect(() => {
      // Fetch user data when component mounts
      const fetchUser = async () => {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          
          if (user) {
            // Try to get the full name from the user_metadata first
            const name = user.user_metadata?.full_name || 'User';
            setUserName(name);
            
            // If not found in metadata, try to fetch from public.users table
            if (!name || name === 'User') {
              const { data, error } = await supabase
                .from('users')
                .select('full_name')
                .eq('id', user.id)
                .single();
              
              if (data && data.full_name) {
                setUserName(data.full_name);
              }
            }
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
      
      fetchUser();
      
      // Set up a listener for auth state changes
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          const name = session.user.user_metadata?.full_name || 'User';
          setUserName(name);
        } else if (event === 'SIGNED_OUT') {
          setUserName('Guest');
        }
      });
      
      return () => {
        if (authListener?.unsubscribe) {
          authListener.unsubscribe();
        }
      };
    }, []);

  return (
    <View style={{flex: 1}}>
      {/* Close Button on Top Right */}

      {/* <View style={{alignItems: 'flex-end', padding: 10}}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}> 
      <Image
            style={{width: 18, height: 18}}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
      </View> */}

      {/* 👉 Custom Header Section */}
      <View style={styles.drawerHeader}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              backgroundColor: '#FFF',
              paddingVertical: 30,
              paddingHorizontal: 20,
              borderRadius: 22,
            }}>
            <Image
              style={{width: 55, height: 55}}
              source={require('../../assets/KumarRohit.png')}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.name}>{userName}</Text>
              <Text style={styles.email}>Aspiring Entrepreneur</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}

      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <View style={styles.menuContainer}>
          {/* 🔹 Drawer Item - My Profile */}
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('MyProfile')}>
            {/* <Ionicons name="person-circle-outline" size={24} color="#555" /> */}
            <View
              style={{
                backgroundColor: '#FA4616',
                padding: 10,
                borderRadius: 30,
              }}>
              <Image
                source={require('../../assets/man.png')}
                style={styles.drawerImage}
              />
            </View>
            <Text style={styles.drawerLabel}>My Profile</Text>
            <Image
              source={require('../../assets/rightDetails.png')}
              style={[{width: 7, height: 12, marginLeft: 105}]}
            />
          </TouchableOpacity>

          {/* 🔹 Drawer Item - Company Profile */}
          {/* <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('CompanyProfile')}>
            {/* <Ionicons name="business-outline" size={24} color="#555" /> */}
          {/* <View
              style={{
                backgroundColor: '#FA4616',
                padding: 10,
                borderRadius: 30,
              }}>
              <Image
                source={require('../../assets/CompanyProfile.png')}
                style={styles.drawerImage}
              />
            </View>
            <Text style={styles.drawerLabel}>Company Profile</Text>
            <Image
              source={require('../../assets/rightDetails.png')}
              style={[{width: 7, height: 12, marginLeft: 55}]}
            />
          </TouchableOpacity> */}

          {/* 🔹 Drawer Item - Settings */}
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('Setting')}>
            {/* <Ionicons name="settings-outline" size={24} color="#555" /> */}
            <View
              style={{
                backgroundColor: '#FA4616',
                padding: 10,
                borderRadius: 30,
              }}>
              <Image
                source={require('../../assets/Setting.png')}
                style={styles.drawerImage}
              />
            </View>
            <Text style={styles.drawerLabel}>Settings</Text>
            <Image
              source={require('../../assets/rightDetails.png')}
              style={[{width: 7, height: 12, marginLeft: 115}]}
            />
          </TouchableOpacity>
          {/* <View style={{alignSelf: 'center', marginTop: 150}}> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            style={{
              alignSelf: 'center',
              marginTop: 150,
              flexDirection: 'row',
              paddingHorizontal: 40,
              paddingVertical: 8,
              borderRadius: 30,
              backgroundColor: '#FA4616',
            }}>
            <Image
              style={{width: 24, height: 24, marginRight: 10}}
              source={require('../../assets/singnOut.png')}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 27,
              }}>
              Sign-out
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

// DrawerTab Navigations

const DrawerTabs = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="CompanyProfile" component={ComponyProfile} />
      {/* <Drawer.Screen name="Marketplace" component={Marketplace} />
      <Drawer.Screen name="Discover" component={Discover} />
      <Drawer.Screen name="Cohort" component={Cohort} /> */}
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="SplashScreen1"
        screenOptions={{headerShown: false}}>
        {/* Auth Screens  */}
        <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Connections" component={Connections} />
        <Stack.Screen name="NewMessage" component={NewMessage} />
        {/* Bottom Tab Screens */}
        {/* <Stack.Screen name='Home' component={Home}/> */}
        <Stack.Screen name="MainTabs" component={BottomTabs} />

        {/* Others Screens  */}
        <Stack.Screen name="Notification" component={Notification} />
        {/* <Stack.Screen name='MyProfile' component={MyProfile}/> */}
        <Stack.Screen name="EditProfile" component={EditProfile} />
        {/* <Stack.Screen name='CompanyProfile' component={ComponyProfile}/> */}
        <Stack.Screen name="ProgramDetails" component={ProgramDetails} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
        <Stack.Screen name="PageDetails" component={PageDetails} />

        {/* Idea hub Screen  */}
        <Stack.Screen name="EditIdeaDetails" component={EditIdeaDetails} />
        <Stack.Screen name="CreateNewIdea" component={CreateNewIdea} />
        {/* <Stack.Screen name='IdeaHub' component={IdeaHub}/> */}
        <Stack.Screen name="GroupChats" component={GroupChats} />
        {/* <Stack.Screen name="Setting" component={Setting} /> */}

        {/* AuthHandler for the supabase  */}
        <Stack.Screen name="AuthHandler" component={AuthHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#FA4616',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 15,
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FA4616',
    // lineHeight: 131
  },
  email: {
    fontSize: 14,
    fontWeight: '400',
    color: '#696969',
  },
  menuContainer: {
    flex: 1,
    // paddingVertical: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  drawerImage: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
  drawerLabel: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 27,
    color: '#333',
  },
});
