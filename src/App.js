// // import React, {useState, useEffect} from 'react';
// // import firebase from '@react-native-firebase/app';
// // import {NavigationContainer} from '@react-navigation/native';
// // import AuthStackNavigator from './navigators/AuthStackNavigator';
// // import auth from '@react-native-firebase/auth';
// // import AppStackNavigator from './navigators/AppStackNavigator';

// // import UserContext from './context/UserContext';


// // const App = () => {
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [user, setUser] = useState(null);

// //   const onAuthStateChanged = async user => {
// //     await setCurrentUser(user);
// //     setIsLoading(false);
// //   };

// //   useEffect(() => {
// //     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
// //       setUser(user);
// //     });

// //     return unsubscribe;
// //   }, []);

// //   useEffect(() => {
// //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
// //     return subscriber;
// //   }, []);

// //   if (isLoading) {
// //     return null;
// //   }

// //   return (
// //     <UserContext.Provider value={user?.email}>
// //     <NavigationContainer>
// //       {currentUser ? <AppStackNavigator /> : <AuthStackNavigator />}
// //     </NavigationContainer>
// //     </UserContext.Provider>
    
// //   );
// // };

// // export default App;


// import 'react-native-gesture-handler';
// import React, {useState, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import AuthStackNavigator from './navigators/AuthStackNavigator';
// import auth from '@react-native-firebase/auth';
// import AppStackNavigator from './navigators/AppStackNavigator';
// import DrawerNavigator from './navigators/DrawerNavigator';
// import UserContext from './context/UserContext';

// // import 'react-native-gesture-handler'

// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   const onAuthStateChanged = async user => {
//     await setCurrentUser(user);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   if (isLoading) {
//     return null;
//   }

//   return (

//     <NavigationContainer>
//       {currentUser ? <DrawerNavigator /> : <AuthStackNavigator />}
//     </NavigationContainer>

//   );
// };

// export default App;

import React, {useState, useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import auth from '@react-native-firebase/auth';
import AppStackNavigator from './navigators/AppStackNavigator';

import UserContext from './context/UserContext';
import DrawerNavigator from './navigators/DrawerNavigator';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <UserContext.Provider value={user}>
    <NavigationContainer>
      {currentUser ? <DrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
    </UserContext.Provider>
    
  );
};

export default App;