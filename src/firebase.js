import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTvf63qgHrVsueblxAcBGvTDvk5KFgpyk",
    authDomain: "tinder-clone-f26cb.firebaseapp.com",
    databaseURL: "https://tinder-clone-f26cb.firebaseio.com",
    projectId: "tinder-clone-f26cb",
    storageBucket: "tinder-clone-f26cb.appspot.com",
    messagingSenderId: "890567596384",
    appId: "1:890567596384:web:c39345cf9706395440a605",
    measurementId: "G-TW8KWHN6SL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;