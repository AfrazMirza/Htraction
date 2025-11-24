// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import AllInputs from './AllInputs';
// import AllBtn from '../components/AllBtn';
// import {ScrollView} from 'react-native-gesture-handler';

// const BottomSheet = ({panelRef, navigation, isEditing}) => {
//   return (
//     <View>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => panelRef.current.close()}>
//           <Image
//             style={{width: 14, height: 14}}
//             source={require('../../assets/cross.png')}
//           />
//         </TouchableOpacity>
//         <Text style={{fontSize: 18, fontWeight: '600'}}>{isEditing ? 'Edit Education' : 'Add Education'}</Text>
//       </View>
//       <AllInputs title="Enter Institution Name" input="Institude Name" />
//       <AllInputs title="Enter Degree Name" input="Select Degree Name" />
//       <AllInputs title="Field of Study" input="Enter Field of Study" />
//       <AllInputs title="Start Month and Year" input="MM/YYYY" />
//       <AllInputs title="Graduation Date" input="MM/YYYY" />
//       {/* <AllInputs title="Description" input="Description" customeStyle={{textAlignVertical: 'top'}} isMultiline={true} /> */}
//       <AllBtn
//         title="Add"
//         onTab={() => {
//           navigation.navigate('MyProfile');
//         }}
//       />
//     </View>
//   );
// };

// export default BottomSheet;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 13,
//     paddingHorizontal: 12,
//     paddingTop: 20,
//     paddingBottom: 18,
//     backgroundColor: '#FFE5D5',
//   },
// });


// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const BottomSheet = ({panelRef, isEditing, educationId, onSubmit}) => {
//   const [formData, setFormData] = useState({
//     institude: '',
//     degree: '',
//     start: '',
//     end: '',
//   });

//   useEffect(() => {
//     if (isEditing && educationId) {
//       fetchEducationById();
//     } else {
//       resetForm();
//     }
//   }, [isEditing, educationId]);

//   const fetchEducationById = async () => {
//     try {
//       const response = await fetch(`https://192.168.1.11:3000/api/educations/${educationId}`);
//       const data = await response.json();
//       setFormData({
//         institude: data.institude || '',
//         degree: data.degree || '',
//         start: data.start || '',
//         end: data.end || '',
//       });
//     } catch (error) {
//       console.error('Error fetching education by ID:', error);
//       Alert.alert('Error', 'Could not load education data');
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       institude: '',
//       degree: '',
//       start: '',
//       end: '',
//     });
//   };

//   const handleChange = (key, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleFormSubmit = () => {
//     const {institude, degree, start, end} = formData;

//     if (!institude || !degree || !start || !end) {
//       Alert.alert('Validation Error', 'Please fill in all fields.');
//       return;
//     }

//     onSubmit(formData);
//     resetForm();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         {isEditing ? 'Edit Education' : 'Add Education'}
//       </Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Institute"
//         value={formData.institude}
//         onChangeText={text => handleChange('institude', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Degree"
//         value={formData.degree}
//         onChangeText={text => handleChange('degree', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Start Year"
//         value={formData.start}
//         onChangeText={text => handleChange('start', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="End Year"
//         value={formData.end}
//         onChangeText={text => handleChange('end', text)}
//       />

//       <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
//         <Text style={styles.submitText}>
//           {isEditing ? 'Update' : 'Add'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BottomSheet;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 12,
//   },
//   submitButton: {
//     backgroundColor: '#FA4616',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   submitText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Image,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const BottomSheet = ({panelRef, isEditing, educationId, onSubmit}) => {
//   const [formData, setFormData] = useState({
//     institude: '',
//     degree: '',
//     start: '',
//     end: '',
//   });

//   useEffect(() => {
//     if (isEditing && educationId) {
//       fetchEducationById();
//     } else {
//       resetForm();
//     }
//   }, [isEditing, educationId]);

//   const fetchEducationById = async () => {
//     try {
//       const response = await fetch(`https://192.168.1.11:3000/api/educations/${educationId}`);
//       const data = await response.json();
//       setFormData({
//         institude: data.institude || '',
//         degree: data.degree || '',
//         start: data.start || '',
//         end: data.end || '',
//       });
//     } catch (error) {
//       console.error('Error fetching education by ID:', error);
//       Alert.alert('Error', 'Could not load education data');
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       institude: '',
//       degree: '',
//       start: '',
//       end: '',
//     });
//   };

//   const handleChange = (key, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleFormSubmit = () => {
//     const {institude, degree, start, end} = formData;

//     if (!institude || !degree || !start || !end) {
//       Alert.alert('Validation Error', 'Please fill in all fields.');
//       return;
//     }

//     onSubmit(formData);
//     resetForm();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Close Button */}
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           {isEditing ? 'Edit Education' : 'Add Education'}
//         </Text>
//         <TouchableOpacity onPress={() => panelRef.current.close()}>
//           <Image
//             source={require('../../assets/cross.png')}
//             style={styles.closeIcon}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Input Fields */}
//       <Text style={styles.label}>Institute Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter institute name"
//         value={formData.institude}
//         onChangeText={text => handleChange('institude', text)}
//       />

//       <Text style={styles.label}>Degree</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter degree"
//         value={formData.degree}
//         onChangeText={text => handleChange('degree', text)}
//       />

//       <Text style={styles.label}>Start Year</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter start year"
//         value={formData.start}
//         onChangeText={text => handleChange('start', text)}
//       />

//       <Text style={styles.label}>End Year</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter end year"
//         value={formData.end}
//         onChangeText={text => handleChange('end', text)}
//       />

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
//         <Text style={styles.submitText}>
//           {isEditing ? 'Update' : 'Add'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BottomSheet;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   closeIcon: {
//     width: 14,
//     height: 14,
//     tintColor: '#000',
//   },
//   label: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 5,
//     marginTop: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 5,
//   },
//   submitButton: {
//     backgroundColor: '#FA4616',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   submitText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

import {Image, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import AllInputs from './AllInputs';
import AllBtn from '../components/AllBtn';

const BottomSheet = ({panelRef, navigation, isEditing, educationId, onSubmit}) => {
  const [formData, setFormData] = useState({
    institude: '',
    degree: '',
    field: '',
    start: '',
    end: '',
  });

  useEffect(() => {
    if (isEditing && educationId) {
      fetchEducationById();
    } else {
      resetForm();
    }
  }, [isEditing, educationId]);

  const fetchEducationById = async () => {
    try {
      const response = await fetch(`http://192.168.1.11:3000/api/educations/${educationId}`);
      const data = await response.json();
      setFormData({
        institude: data.institude || '',
        degree: data.degree || '',
        field: data.field || '',
        start: data.start || '',
        end: data.end || '',
      });
    } catch (error) {
      console.error('Error fetching education by ID:', error);
      Alert.alert('Error', 'Could not load education data');
    }
  };

  const resetForm = () => {
    setFormData({
      institude: '',
      degree: '',
      field: '',
      start: '',
      end: '',
    });
  };

  const handleChange = (key, value) => {
    setFormData(prev => ({...prev, [key]: value}));
  };

  const handleSubmit = () => {
    const {institude, degree, field, start, end} = formData;
    if (!institude || !degree || !field || !start || !end) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    onSubmit(formData); // send form data to parent
    resetForm();
    panelRef.current.close(); // close sheet after submit
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => panelRef.current.close()}>
          <Image
            style={styles.crossIcon}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>
          {isEditing ? 'Edit Education' : 'Add Education'}
        </Text>
      </View>

      <AllInputs
        title="Enter Institution Name"
        input="Institude Name"
        value={formData.institude}
        onChangeText={text => handleChange('institude', text)}
      />
      <AllInputs
        title="Enter Degree Name"
        input="Select Degree Name"
        value={formData.degree}
        onChangeText={text => handleChange('degree', text)}
      />
      <AllInputs
        title="Field of Study"
        input="Enter Field of Study"
        value={formData.field}
        onChangeText={text => handleChange('field', text)}
      />
      <AllInputs
        title="Start Month and Year"
        input="MM/YYYY"
        value={formData.start}
        onChangeText={text => handleChange('start', text)}
      />
      <AllInputs
        title="Graduation Date"
        input="MM/YYYY"
        value={formData.end}
        onChangeText={text => handleChange('end', text)}
      />

      <AllBtn title={isEditing ? 'Update' : 'Add'} onTab={handleSubmit} />
    </ScrollView>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#FFE5D5',
  },
  crossIcon: {
    width: 18,
    height: 18,
    tintColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
