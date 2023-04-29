// import { View, Text } from 'react-native'
// import React, { useContext } from 'react'
// import UserContext from '../context/UserContext'
// import { signOut } from '../utils/auth'

// export default function HomeScreen() {

//   const usermail = useContext(UserContext)
//   return (
//     <View>
//     <Text onPress={signOut}>Logout</Text>
//       <Text>{usermail}</Text>
//     </View>
//   )
// }

import React, { useState , useContext} from 'react';
import { View, Text ,TextInput, Button } from 'react-native';
import UserContext from '../context/UserContext'
import {signOut} from '../utils/auth'

export default function MyComponent() {
  const usermail = useContext(UserContext)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  // const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    db.collection('users').add({
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: usermail
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  };

  return (
    <View>
    <Button title= "Click" onPress={signOut} /> 
    <Text > {usermail} </Text>
      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
      />
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="Last Name"
      />
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Age"
        keyboardType="numeric"
      />
      {/* <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        keyboardType="email-address"
      /> */}
      <Button title="Add User" onPress={handleButtonClick} />
    </View>
  );
}
