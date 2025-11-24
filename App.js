import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { ThemeProvider } from './src/Context/ThemeContext';
// import { AuthProvider } from './src/Context/AuthContext';
import AuthHandler from './src/components/AuthHandler';
// import { ThemePorvider } from './src/ThemeChanger/DarkLightMode';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/Context/UserContext';

const App = () => {
  return (
    <>    
    <UserProvider>
    <ThemeProvider>
    <AppNavigator/>
    </ThemeProvider>
    </UserProvider>
    </>

  );
};

export default App;

const styles = StyleSheet.create({});