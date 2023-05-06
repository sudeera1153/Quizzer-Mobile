import React,{ useState , useContext, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import UserContext from '../context/UserContext';
import {signOut} from '../utils/auth';
import firestore from '@react-native-firebase/firestore';

// const Drawer = createDrawerNavigator();


const CustomDrawer = props => {
  const user = useContext(UserContext)
  
  const [usrdetails, setUsrdetails] = useState('');
  const [pfp, setpfp] = useState('');
  const [isProfilePicSet, SetisProfilePicSet] = useState(false)
  let isLoadinged = false
  let id = null

  const fetchData = async() => {
       const data = await getImageUri();
       
  }

  const getImageUri = async() =>{
    await firestore()
      .collection('users')
      .doc(user && user.email)
      .get()
      .then(
        documentSnapshot => {
          console.log(documentSnapshot.data())
          id = documentSnapshot.data().imageUrl
          console.log(id)
          if(id != null || id != '')
          setpfp(id);
          {isLoadinged = true}
          console.log(isLoadinged)

        }
      ) 
  }

  useEffect(() => {
    fetchData();
  },[]);



  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={{uri: pfp}}
            // source={isLoadinged?{uri: id.imageUrl}:require('../assets/defaul_pfp.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {user && user.email}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 Coins
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text onPress={signOut}
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;