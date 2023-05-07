import firestore from '@react-native-firebase/firestore';

export const createQuiz = (currentQuizId, title, description) => {
  return firestore().collection('Quizzes').doc(currentQuizId).set({
    title,
    description,
  });
};

// Create new question for current quiz
export const createQuestion = (currentQuizId, currentQuestionId, question) => {
  return firestore()
    .collection('Quizzes')
    .doc(currentQuizId)
    .collection('QNA')
    .doc(currentQuestionId)
    .set(question);
};

// Create New User in Firestore
export const createUser = (email) => {
  return firestore()
    .collection('users')
    .doc('JzrsQ4ZPT8J5oG1OHPOs')
    .set(email);
};


// Get All Quizzes
export const getQuizzes = () => {
  return firestore().collection('Quizzes').get();
};

export const getQuizzes_CS = () => {
  return firestore().collection('Quizzes').where("title","==","12").get();
};

export const getQuizzes_ComArch = () => {
  return firestore().collection('Quizzes').where("title","==","ss").get();
};


// Get Quiz Details by id
export const getQuizById = currentQuizId => {
  return firestore().collection('Quizzes').doc(currentQuizId).get();
};

// Get Questions by currentQuizId
export const getQuestionsByQuizId = currentQuizId => {
  return firestore()
    .collection('Quizzes')
    .doc(currentQuizId)
    .collection('QNA')
    .get();
};
