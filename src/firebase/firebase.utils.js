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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;