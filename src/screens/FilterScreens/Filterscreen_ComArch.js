import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import {signOut} from '../../utils/auth';
import FormButton from '../../components/shared/FormButton';
import {COLORS} from '../../constants/theme';
import {getQuizzes} from '../../utils/database';
import { Card } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { width } = Dimensions.get('window');

  
  const getAllQuizzes = async () => {
    setRefreshing(true);
    const quizzes = await getQuizzes();

    // Transform quiz data
    let tempQuizzes = [];
    await quizzes.docs.forEach(async quiz => {
      await tempQuizzes.push({id: quiz.id, ...quiz.data()});
    });
    await setAllQuizzes([...tempQuizzes]);

    setRefreshing(false);
  };

  /*{Horizontal Flatlist Data}*/
  const dummyData = [
    {
      id: 1,
      name: "Beginner",
      color: "green",
    },
    {
      id: 2,
      name: "Intermidiate",
      color: "orange",
    },
    {
      id: 3,
      name: "Pro",
      color: "red",
    },
    {
      id: 4,
      name: "Master",
      color: "black",
    }
  ];



  useEffect(() => {
    getAllQuizzes();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: 120,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    flatList: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    cardContainer: {
      height: 50,
      width: width * 0.3,
      marginRight: 8,
    },
    card: {
      height: 40,
      width: width * 0.3,
      borderRadius: 12,
      padding: 10
    },
    text: { color: "white", fontWeight: 'bold' , textAlign:'center'}
  });

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative',
      }}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

      <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        elevation: 4,
        paddingHorizontal: 20,
      }}
    >
      <Text 
        style={{
          flex: 1,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#000000',
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 20
        }}
      >
        Welcome to Quizzer!
      </Text>
    </View>
    <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={dummyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => console.log("pressed")}
            >
              <Card style={[styles.card, {backgroundColor: item.color}]}>
                <Text style={styles.text}>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          paddingLeft: 20,
          paddingBottom: 5,
          paddingTop: 5
        }}
      >
        Recent Quizzes
      </Text>
      <FlatList
        data={allQuizzes}
        onRefresh={getAllQuizzes}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: 10,
        }}
        renderItem={({item: quiz}) => (
          <View
            style={{
              padding: 20,
              borderRadius: 5,
              marginVertical: 5,
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: COLORS.white,
              elevation: 2,
            }}>
            <View style={{flex: 1, paddingRight: 10}}>
              <Text style={{fontSize: 18, color: COLORS.black}}>
                {quiz.title}
              </Text>
              {quiz.description != '' ? (
                <Text style={{opacity: 0.5}}>{quiz.description}</Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 50,
                backgroundColor: COLORS.primary + '20',
              }}
              onPress={() => {
                navigation.navigate('PlayQuizScreen', {
                  quizId: quiz.id,
                });
              }}>
              <Text style={{color: COLORS.primary}}>Play</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Button */}
      {/* <FormButton
        labelText="Create Quiz"
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderRadius: 50,
          paddingHorizontal: 30,
        }}
        handleOnPress={() => navigation.navigate('CreateQuizScreen')}
      /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
