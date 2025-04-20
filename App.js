import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { ThemeProvider } from './src/Context/ThemeContext';
// import { ThemePorvider } from './src/ThemeChanger/DarkLightMode';

const App = () => {
  return (
    <ThemeProvider>
    <AppNavigator/>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});