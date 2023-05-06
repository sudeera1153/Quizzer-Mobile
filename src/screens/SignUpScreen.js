import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, SafeAreaView,ToastAndroid, Alert, TouchableOpacity,ScrollView, Image} from 'react-native';
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import {COLORS} from '../constants/theme';
import {signUp} from '../utils/auth';
import FormDropdown from '../components/shared/FormDropDown';
import FormDegreeDropdown from '../components/shared/FormDegreeDropdown';
import FormRadioButton from '../components/shared/FormRadioButton';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { Utils } from '@react-native-firebase/app';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [degree, setDegree] = useState('');
  const [intake, setIntake] = useState('');
  const [activities, setActivities] = useState('');
  const [accommodation, setAccomodation] = useState('');
  const [agegroup, setAgegroup] = useState('');
  const [univeristy, setUniversity] = useState('');
  const [contactno, setContactno] = useState('');
  const [secondaryemail, SetSecondaryemail] = useState('');
  const [imageUri, setImageUri] = useState('');
 


  const handleOnSubmit = async() => {

    if (email != '') {
      if (password == confirmPassword) {
        let imageUrl = '';

        if (imageUri != '') {
          const reference = storage().ref(
            `/images/profilepictures/profpic_${email}`,
          );
          await reference.putFile(imageUri).then(() => {
            console.log('Image Uploaded');
          });
          imageUrl = await reference.getDownloadURL();
        }
        
        signUp(email, password);
        
        firestore()
          .collection('users')
          .doc(email)
          .set({
              email:email, 
              usertype:'default user',
              name:name, 
              department:department, 
              degree:degree, 
              intake:intake, 
              accommodation:accommodation, 
              agegroup:agegroup,
              univeristy:univeristy,
              contactno:contactno,
              secondaryemail:secondaryemail,
              imageUrl:imageUrl
              })
          .then(() => {
              console.log('User added!');
              ToastAndroid.show('User saved', ToastAndroid.SHORT);
          });
      } else {
        Alert.alert('password did not match');
      }
    }
    else{
      Alert.alert('Please Fill out all Inputs');
    }
    console.log({activities})
  };

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      ({assets}) => {
        if (assets && assets.length > 0) {
          setImageUri(assets[0].uri);
          console.log(imageUri)
        }
      },
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
      }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 , width:390}}>
    
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          textAlign: 'center'
          
        }}>
        Glad you Decided to Join Quizzer!
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: COLORS.black,
          fontWeight: 'normal',
          marginTop:5,
          marginBottom: 25,
          textAlign: 'center'   
        }}>
        Please Fill The Form Below and Sign Up
      </Text>

      
      <FormInput
        labelText="Email"
        placeholderText="enter your email"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />


      <FormInput
        labelText="Password"
        placeholderText="enter your password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />

      <FormInput
        labelText="Confirm Password"
        placeholderText="enter your password again"
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry={true}
      />

{imageUri == '' ? (
            
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                marginBottom:10,
                backgroundColor: COLORS.primary + '20',
              }}
              onPress={selectImage}>
              <Text style={{opacity: 0.5, color: COLORS.primary}}>
                + Add Your Profile Picture
              </Text>
            </TouchableOpacity>
          ) : (
            <Image
              source={{
                uri: imageUri,
              }}
              resizeMode={'cover'}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 5,
              }}
            />
          )}


      <FormInput
        labelText="Name"
        placeholderText="enter your name"
        onChangeText={value => setName(value)}
        value={name}
      />

        
      <FormDropdown 
      options={["Plymouth University","NSBM","Victoria University","UCD"]}
      labelText='Your Affiliated Univeristy'
      placeholderText='Select Your Affiliated University'
      onChangeText={value => setUniversity(value)}
      value={univeristy}
      />

      <FormDropdown 
      options={["Com Sc and Soft Eng","Data Science","Networking","Computer Security","Info. Systems"]}
      labelText='Your Department'
      placeholderText='Select Your Department'
      onChangeText={value => setDepartment(value)}
      value={department}
      />

      <FormDegreeDropdown
      department={department}
      labelText='Your Degree'
      placeholderText='Select Your Degree'
      onChangeText={value => setDegree(value)}
      value={degree}/>

      <FormDropdown 
      options={["19.1","19.2","20.1","20.2","20.3"]}
      labelText='Your Intake'
      placeholderText='Select Your Intake'
      onChangeText={value => setIntake(value)}
      value={intake}
      />

      <FormDropdown 
      options={["No Activities","Clubs Only","Sports Only","Both"]}
      labelText='Extra Curricular Activity Status'
      placeholderText='Select Your Extra Curricular  Activity Status'
      onChangeText={value => setActivities(value)}
      value={activities}
      />

      <FormDropdown 
      options={["Home","External Hostel","University Hostel"]}
      labelText='Accomodation Status'
      placeholderText='Select Your Accomodation Status'
      onChangeText={value => setAccomodation(value)}
      value={accommodation}
      />

      <FormDropdown 
      options={["Below 18","18-20","20-22","Above 22"]}
      labelText='Age Group'
      placeholderText='Select Your Age Group'
      onChangeText={value => setAgegroup(value)}
      value={agegroup}
      />

      <FormInput
        labelText="Contact Number"
        placeholderText="enter you contact number"
        onChangeText={value => setContactno(value)}
        value={contactno}
      />

      <FormInput
        labelText="Secondary Email"
        placeholderText="enter you secondary email"
        onChangeText={value => SetSecondaryemail(value)}
        value={secondaryemail}
      />

      <FormButton
        labelText="Sign up"
        handleOnPress={handleOnSubmit}
        style={{width: '100%'}}
      />
      </ScrollView>

      

      {/* Footer */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20  , marginBottom: 15}}>
        <Text>Already have an account?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.primary}}
          onPress={() => navigation.navigate('SignInScreen')}>
          Sign in
        </Text>
      </View>
    </SafeAreaView>
    
  );
};

export default SignUpScreen;
