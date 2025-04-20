import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useTheme } from '../Context/ThemeContext';
// import { useTheme } from '../ThemeChanger/DarkLightMode';


const Setting = () => {

  const showToggleTheme = true;
  const {theme, toggleTheme} = useTheme();

  const renderToggleThemeButtom = () => {
    if (showToggleTheme) {

      return(
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
          {theme == 'light' ? <Text style={{ color: "white", fontWeight: "bold" }}>Dark</Text> : <Text style={{ color: "white", fontWeight: "bold" }}>Light</Text>}
        </TouchableOpacity>
      )
    }
  }
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{alignSelf: 'center',fontSize: 30, fontWeight: '700', color: '#FA4616'}}>
        Setting
      </Text>
      <View style={{flexDirection: 'row', justifyContent
        : 'space-between', marginHorizontal: 10
      }}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#383838'}}>Change To Dark Mode</Text>
        {/* <TouchableOpacity><Text>💡</Text></TouchableOpacity> */}
        {renderToggleThemeButtom()}
      </View>
      <View style={{flexDirection: 'row', justifyContent
        : 'space-between', marginHorizontal: 10
      }}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#383838'}}>Change To Hindi</Text>
        <TouchableOpacity><Text></Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#383838",
  },
  toggleButton: {
    backgroundColor: "#FA4616",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
