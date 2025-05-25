// import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import React, { useState } from 'react';
// import Google from '../components/Google';
// import AllBtn from '../components/AllBtn';
// import IdPass from '../components/IdPass';
// import { useTheme } from '../Context/ThemeContext';
// import { supabase } from '../lib/supabase';

// const SignUp = ({navigation}) => {
 
//   // Theme Changer Dark and Light

//   const {theme} = useTheme();

//   const [name, setName] = useState('')
//   const [nameError, setNameError] = useState(false)

//   const [email, setEmail] = useState('')
//   const [emailError, setEmailError] = useState(false)

//   const [password, setPassword] = useState('')
//   const [passwordError, setPasswordError] = useState(false)

//   const [confirmPass, setConfirmPass] = useState('')
//   const [confirmPassError, setConfirmPassError] = useState(false)

//   const [loading, setLoading] = useState(false);
  
//   const handleSignUp = async () => {
//     let isValid = true
//     setNameError('');
//     setEmailError('');
//     setPasswordError('');
//     setConfirmPassError('');

//     if (name.trim() === '') {
//       setNameError('Please enter a name')
//       isValid = false;
//     }else{
//       setNameError(false)
//     }

//     if (email.trim() === '') {
//       setEmailError('Please enter email')
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setEmailError('Please enter a valid email (e.g., user@example.com)');
//       isValid = false;
//     }

//     if (password.trim() === '') {
//       setPasswordError('Please enter password')
//       isValid = false;
//     } else {
//       // Check password strength
//       const hasUpperCase = /[A-Z]/.test(password);
//       const hasNumber = /[0-9]/.test(password);
//       const hasSpecialChar = /[!@#$%&*]/.test(password);
//       const isLongEnough = password.length >= 8;
      
//       let errorMessages = [];
      
//       if (!isLongEnough) errorMessages.push('at least 8 characters');
//       if (!hasUpperCase) errorMessages.push('one uppercase letter');
//       if (!hasNumber) errorMessages.push('one number');
//       if (!hasSpecialChar) errorMessages.push('one special character (!@#$%&*)');
      
//       if (errorMessages.length > 0) {
//         setPasswordError(`Password must contain: ${errorMessages.join(', ')}`);
//         isValid = false;
//       }
//     }

//     if (confirmPass.trim() === '') {
//       setConfirmPassError('Please confirm your password');
//       isValid = false;
//   } else if (password !== confirmPass) {
//       setConfirmPassError('Passwords do not match');
//       isValid = false;
//   }
//     // if(isValid){
//     //   navigation.navigate('MainTabs')
//     // }
//     if (isValid) {
//       // try {
//       //   setLoading(true);
        
//       //   // First sign up the user
//       //   const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
//       //     email: email.trim(),
//       //     password: password.trim(),
//       //     options: {
//       //       data: {
//       //         full_name: name.trim(),
//       //       }
//       //     }
//       //   });

//       //   if (signUpError) {
//       //     throw signUpError;
//       //   }

//       //   // Then insert additional user data into a public.users table
//       //   const { error: profileError } = await supabase
//       //     .from('users')
//       //     .insert([
//       //       { 
//       //         id: signUpData.user.id,
//       //         email: email.trim(),
//       //         full_name: name.trim(),
//       //         created_at: new Date().toISOString()
//       //       }
//       //     ]);

//       //   if (profileError) {
//       //     throw profileError;
//       //   }

//       //   // Navigate to home if successful
//       //   navigation.navigate('MainTabs');
        
//       // } catch (error) {
//       //   Alert.alert('Sign Up Error', error.message);
//       // } finally {
//       //   setLoading(false);
//       // }
//       try {
//         setLoading(true);
//         const { error } = await supabase.auth.signUp({
//           email: email.trim(),
//           password: password.trim(),
//           options: {
//             data: { full_name: name.trim() },
//             emailRedirectTo: 'h-traction://verify-email'
//           }
//         });
  
//         if (error) throw error;
//         navigation.navigate('VerifyEmail', { userEmail: email });
        
//       } catch (error) {
//         Alert.alert('Error', error.message);
//       } finally {
//         setLoading(false);
//       }
    
//     }

//   }
//   return (
//     <View style={[styles.mainContainer, {backgroundColor : theme === 'light' ? '#FFFFFF' : '#1E1E1E'} ]}>
//       <ScrollView style={{flex: 1}}>
//         <View style={styles.view1}>
//           <Image style={styles.img} source={require('../../assets/logo.png')} />
//           <View style={{alignItems: 'center', gap: 6}}>
//             <Text style={[styles.view1Text1, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Create an Account</Text>
//             <Text style={styles.view1Text2}>
//               Your journey starts here. Create your account today
//             </Text>
//           </View>
//         </View>
//         <View style={styles.view2}>
//           <IdPass
//             source={require('../../assets/profile.png')}
//             width={25}
//             height={25}
//             title="Full Name"
//             value={name}
//             showError={(text)=> setName(text)}
//           />
//           {nameError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{nameError}</Text> : null}
//           <IdPass
//             source={require('../../assets/email.png')}
//             width={25}
//             height={25}
//             title="Email Id"
//             showError={(text)=> setEmail(text)}
//             value={email}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           {emailError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{emailError}</Text> : null}
//           <IdPass
//             source={require('../../assets/password.png')}
//             width={25}
//             height={25}
//             title="Password"
//             showError={(text)=>setPassword(text)}
//             value={password}
//             isPassword={true}
//             secureTextEntry={true}
//           />
//           {passwordError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{passwordError}</Text> : null}
//           <IdPass
//             source={require('../../assets/password.png')}
//             width={25}
//             height={25}
//             title="Confirm password"
//             showError={(text)=>setConfirmPass(text)}
//             value={confirmPass}
//             isPassword={true}
//             secureTextEntry={true}
//           />
//           {confirmPassError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{confirmPassError}</Text> : null}
//           <AllBtn
//             // title="Sign Up"
//             // onTab={handleSignUp}
//             title={loading ? "Signing Up..." : "Sign Up"}
//             onTab={handleSignUp}
//             disabled={loading}
//           />

//           <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Or Continue With</Text>
//           <Google />
//           <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>
//             Already have an account?
//             <Text onPress={()=> {navigation.navigate('SignIn')}} style={{color: theme === 'light' ?'#FA4616' : '#FF5722', fontSize: 12}}>SIGN IN</Text>
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   view1: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   view1Text1: {color: '#333333', fontWeight: '700', fontSize: 24},
//   view1Text2: {
//     fontWeight: '400',
//     padding: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#A4A4A4',
//   },
//   view2: {
//     gap: 20,
//     marginTop: 29,
//     marginBottom: 60,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#333333',
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


import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Google from '../components/Google';
import AllBtn from '../components/AllBtn';
import IdPass from '../components/IdPass';
import { useTheme } from '../Context/ThemeContext';
import { supabase } from '../lib/supabase';

const SignUp = ({navigation}) => {
 
  // Theme Changer Dark and Light

  const {theme} = useTheme();

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [confirmPass, setConfirmPass] = useState('')
  const [confirmPassError, setConfirmPassError] = useState(false)

  const [loading, setLoading] = useState(false);
  
  const handleSignUp = async () => {
    let isValid = true
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPassError('');

    if (name.trim() === '') {
      setNameError('Please enter a name')
      isValid = false;
    }else{
      setNameError(false)
    }

    if (email.trim() === '') {
      setEmailError('Please enter email')
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email (e.g., user@example.com)');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter password')
      isValid = false;
    } else {
      // Check password strength
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%&*]/.test(password);
      const isLongEnough = password.length >= 8;
      
      let errorMessages = [];
      
      if (!isLongEnough) errorMessages.push('at least 8 characters');
      if (!hasUpperCase) errorMessages.push('one uppercase letter');
      if (!hasNumber) errorMessages.push('one number');
      if (!hasSpecialChar) errorMessages.push('one special character (!@#$%&*)');
      
      if (errorMessages.length > 0) {
        setPasswordError(`Password must contain: ${errorMessages.join(', ')}`);
        isValid = false;
      }
    }

    if (confirmPass.trim() === '') {
      setConfirmPassError('Please confirm your password');
      isValid = false;
  } else if (password !== confirmPass) {
      setConfirmPassError('Passwords do not match');
      isValid = false;
  }
    // if(isValid){
    //   navigation.navigate('MainTabs')
    // }
    if (isValid) {
      // try {
      //   setLoading(true);
        
      //   // First sign up the user
      //   const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      //     email: email.trim(),
      //     password: password.trim(),
      //     options: {
      //       data: {
      //         full_name: name.trim(),
      //       }
      //     }
      //   });

      //   if (signUpError) {
      //     throw signUpError;
      //   }

      //   // Then insert additional user data into a public.users table
      //   const { error: profileError } = await supabase
      //     .from('users')
      //     .insert([
      //       { 
      //         id: signUpData.user.id,
      //         email: email.trim(),
      //         full_name: name.trim(),
      //         created_at: new Date().toISOString()
      //       }
      //     ]);

      //   if (profileError) {
      //     throw profileError;
      //   }

      //   // Navigate to home if successful
      //   navigation.navigate('MainTabs');
        
      // } catch (error) {
      //   Alert.alert('Sign Up Error', error.message);
      // } finally {
      //   setLoading(false);
      // }
      try {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password.trim(),
          options: {
            data: { full_name: name.trim() },
            emailRedirectTo: 'h-traction://verify-email'
          }
        });
  
        if (error) throw error;
        navigation.navigate('VerifyEmail', { userEmail: email });
        
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    
    }

  }
  return (
    <View style={[styles.mainContainer, {backgroundColor : theme === 'light' ? '#FFFFFF' : '#1E1E1E'} ]}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.view1}>
          <Image style={styles.img} source={require('../../assets/logo.png')} />
          <View style={{alignItems: 'center', gap: 6}}>
            <Text style={[styles.view1Text1, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Create an Account</Text>
            <Text style={styles.view1Text2}>
              Your journey starts here. Create your account today
            </Text>
          </View>
        </View>
        <View style={styles.view2}>
          <IdPass
            source={require('../../assets/profile.png')}
            width={25}
            height={25}
            title="Full Name"
            value={name}
            showError={(text)=> setName(text)}
          />
          {nameError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{nameError}</Text> : null}
          <IdPass
            source={require('../../assets/email.png')}
            width={25}
            height={25}
            title="Email Id"
            showError={(text)=> setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{emailError}</Text> : null}
          <IdPass
            source={require('../../assets/password.png')}
            width={25}
            height={25}
            title="Password"
            showError={(text)=>setPassword(text)}
            value={password}
            isPassword={true}
            secureTextEntry={true}
          />
          {passwordError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{passwordError}</Text> : null}
          <IdPass
            source={require('../../assets/password.png')}
            width={25}
            height={25}
            title="Confirm password"
            showError={(text)=>setConfirmPass(text)}
            value={confirmPass}
            isPassword={true}
            secureTextEntry={true}
          />
          {confirmPassError ? <Text style={[styles.errorTxt, {color: theme === 'light' ? '#FA4616' : '#FF5722'}]}>{confirmPassError}</Text> : null}
          <AllBtn
            // title="Sign Up"
            // onTab={handleSignUp}
            title={loading ? "Signing Up..." : "Sign Up"}
            onTab={handleSignUp}
            disabled={loading}
          />

          <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>Or Continue With</Text>
          <Google />
          <Text style={[styles.text, {color: theme === 'light' ? '#333333' : '#E0E0E0'}]}>
            Already have an account?
            <Text onPress={()=> {navigation.navigate('SignIn')}} style={{color: theme === 'light' ?'#FA4616' : '#FF5722', fontSize: 12}}>SIGN IN</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  view1Text1: {color: '#333333', fontWeight: '700', fontSize: 24},
  view1Text2: {
    fontWeight: '400',
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#A4A4A4',
  },
  view2: {
    gap: 20,
    marginTop: 29,
    marginBottom: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
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
