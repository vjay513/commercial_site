import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_nmd47MWwo6bcPqzpyTJGRImC1YRWl0Q",
  authDomain: "owl-db-dd59f.firebaseapp.com",
  databaseURL: "https://owl-db-dd59f.firebaseio.com",
  projectId: "owl-db-dd59f",
  storageBucket: "owl-db-dd59f.appspot.com",
  messagingSenderId: "916301964459",
  appId: "1:916301964459:web:1b8140647eca8bae4b83ee",
  measurementId: "G-H31V2H87RP"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;