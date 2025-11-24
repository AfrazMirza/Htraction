// import {Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
// import React, { useState } from 'react';
// import AllBtn from '../components/AllBtn';
// import Google from '../components/Google';
// import IdPass from '../components/IdPass';
// import { useTheme } from '../Context/ThemeContext';
// import { supabase } from '../lib/supabase';

// const SignIn = ({navigation}) => {

//   const { theme } = useTheme(); 
//   const [email, setEmail] = useState('')
//   const [emailError, setEmailError] = useState(false)

//   const [password, setPassword] = useState('')
//   const [passwordError, setPasswordError] = useState(false)

//   const [loading, setLoading] = useState(false); 

//   const handleSignIn = async () => {
//     let isValid = true;
//     setEmailError('');
//     setPasswordError('');

//     // Validate email
//     if (email.trim() === '') {
//       setEmailError('Please enter email');
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setEmailError('Please enter a valid email (e.g., user@example.com)');
//       isValid = false;
//     }

//     // Validate password
//     if (password.trim() === '') {
//       setPasswordError('Password is incorrect');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }
    
//   // if (isValid) {
//   //   // navigation.navigate('DrawerScreens');
//   //   // navigation.navigate('MyProfile');
//   //   navigation.navigate('MainTabs')
//   // }

//    if (isValid) {
//       setLoading(true);
//       try {
//         const response = await fetch('http://192.168.1.11:3000/api/v1/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: email.trim(),
//             password: password.trim(),
//           }),
//         });

//         const result = await response.json();
//          console.log('Response status:', response.status);

//            if (!response.ok) {
//       // Handle 400/401 errors from backend
//       if ([400, 401].includes(response.status)) {
//         setPasswordError(result.message || "Invalid credentials");
//       }
//       throw new Error(result.message || "Login failed");
//     }

//     // Save token to AsyncStorage (or use your preferred state management)
//     await AsyncStorage.setItem('token', result.token);

//         // ✅ Login success — navigate to MainTabs
//         navigation.navigate('MainTabs');
//       } catch (error) {
//         Alert.alert('Login Error', error.message);
//         console.error("Login failed:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <ScrollView style={{backgroundColor : theme === 'light' ? '#FFFFFF' : '#1E1E1E'}}>
//       <View style={styles.view1}>
//         <Image style={styles.img} source={require('../../assets/logo.png')} />
//         <View style={styles.view1V2}>
//           <Text style={[styles.V2Txt1, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Let's get started!</Text>
//           <Text style={styles.V2Txt2}>Enter your Email Id</Text>
//       {/* <Msg/> */}
//         </View>
//       </View>
//       <View style={styles.view2}>
//         <IdPass
//           source={require('../../assets/email.png')}
//           width={25}
//           height={25}
//           title="Email Id"
//           showError = {(text)=> setEmail(text)}
//           value={email}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         {emailError ? (
//           <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>
//             {emailError}
//           </Text>
//         ) : null}
//         <IdPass
//           source={require('../../assets/password.png')}
//           width={25}
//           height={25}
//           title="Password"
//           showError = {(text)=> setPassword(text)}
//           value={password}
//           isPassword={true}
//           secureTextEntry={true}
//         />
//         {passwordError ? (
//           <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>
//             {passwordError}
//           </Text>
//         ) : null}
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('ForgotPassword');
//           }}>
//           <Text style={[styles.view2Txt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Forgot Password</Text>
//         </TouchableOpacity>
//         <AllBtn
//           // title="Sign In"
//           // onTab={handleSignIn}
//           title={loading ? "Signing In..." : "Sign In"}
//           onTab={handleSignIn}
//           disabled={loading}
      
//         />
//         <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Or Continue With</Text>
//         <Google />
//         <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>
//           Don't have an account? 
//           <Text
//             style={[styles.pressableText, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}
//             onPress={() => {
//               navigation.navigate('SignUp');
//             }}>
//             SIGN UP
//           </Text>
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default SignIn;

// const styles = StyleSheet.create({
//   view1: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     // marginTop: 98,
//     // marginBottom: 25
//     // backgroundColor: 'red'
//   },
//   view1V2: {
//     alignItems: 'center',
//     // justifyContent: 'center',
//     // marginTop: 45,
//     // backgroundColor: 'red'
//   },
//   V2Txt1: {
//     color: '#333333',
//     fontWeight: '700',
//     fontSize: 24,
//     marginBottom: 11,
//   },
//   V2Txt2: {
//     fontWeight: '400',
//     fontSize: 18,
//     color: '#A4A4A4',
//   },
//   view2: {
//     gap: 20,
//     marginTop: 29,
//     // backgroundColor: 'lime'
//   },
//   view2Txt: {
//     fontWeight: '400',
//     fontSize: 14,
//     color: '#FA4616',
//     alignSelf: 'flex-end',
//     marginRight: 11,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#333333',
//   },
//   pressableText: {
//     color: '#FA4616',
//     fontSize: 12,
//   },
//   img: {
//     width: 181,
//     height: 35,
//     marginTop: 80,
//     marginBottom: 78,
//   },
//   errorTxt: {
//     color: '#FA4616', 
//     marginHorizontal: 15
//   }
// });


import {Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import React, { useState } from 'react';
import AllBtn from '../components/AllBtn';
import Google from '../components/Google';
import IdPass from '../components/IdPass';
import { useTheme } from '../Context/ThemeContext';

// const Msg = () => {
//   const [isHungry, setIsHungry] = useState(true);
//   return (
//     <View>
//       <Text>My name is Charulata. I am {isHungry ? "Hungry !" : "now full !"}</Text>
//       <Button onPress={()=>{setIsHungry(false)}}
//       title= {isHungry ? "I am Hungry give me some food" : "ThankYou"}
//       />
//     </View>
//   )
// }


const SignIn = ({navigation}) => {

  const { theme } = useTheme(); 
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const handleSignIn = () => {
    let isValid = true;

    // Validate email
    if (email.trim() === '') {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    // Validate password
    if (password.trim() === '') {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    // If both valid, navigate
    if (isValid) {
      // navigation.navigate('DrawerScreens');
      // navigation.navigate('MyProfile');
      navigation.navigate('MainTabs')
    }
  };

  return (
    <ScrollView style={{backgroundColor : theme === 'light' ? '#FFFFFF' : '#1E1E1E'}}>
      <View style={styles.view1}>
        <Image style={styles.img} source={require('../../assets/logo.png')} />
        <View style={styles.view1V2}>
          <Text style={[styles.V2Txt1, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Let's get started!</Text>
          <Text style={styles.V2Txt2}>Enter your Email Id</Text>
      {/* <Msg/> */}
        </View>
      </View>
      <View style={styles.view2}>
        <IdPass
          source={require('../../assets/email.png')}
          width={25}
          height={25}
          title="Email Id"
          showError = {(text)=> setEmail(text)}
        />
        {emailError ? <Text style={styles.errorTxt}>Please Enter Email</Text> : null}
        <IdPass
          source={require('../../assets/password.png')}
          width={25}
          height={25}
          title="Password"
          showError = {(text)=> setPassword(text)}
          isPassword={true}
        />
        {passwordError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Please Enter Password</Text> : null}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={[styles.view2Txt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>Forgot Password</Text>
        </TouchableOpacity>
        <AllBtn
          title="Sign In"
          onTab={handleSignIn}
        />
        <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Or Continue With</Text>
        <Google />
        <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>
          Don't have an account? 
          <Text
            style={[styles.pressableText, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
             SIGN UP
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  view1: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop: 98,
    // marginBottom: 25
    // backgroundColor: 'red'
  },
  view1V2: {
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 45,
    // backgroundColor: 'red'
  },
  V2Txt1: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 11,
  },
  V2Txt2: {
    fontWeight: '400',
    fontSize: 18,
    color: '#A4A4A4',
  },
  view2: {
    gap: 20,
    marginTop: 29,
    // backgroundColor: 'lime'
  },
  view2Txt: {
    fontWeight: '400',
    fontSize: 14,
    color: '#FA4616',
    alignSelf: 'flex-end',
    marginRight: 11,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
  },
  pressableText: {
    color: '#FA4616',
    fontSize: 12,
  },
  img: {
    width: 181,
    height: 35,
    marginTop: 80,
    marginBottom: 78,
  },
  errorTxt: {
    color: '#FA4616', 
    marginHorizontal: 15
  }
});
