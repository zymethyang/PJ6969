import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDDf159T6umM7FccLTIC8VVuPDIpfyBK9E",
  authDomain: "pj6969-e7b76.firebaseapp.com",
  databaseURL: "https://pj6969-e7b76.firebaseio.com",
  projectId: "pj6969-e7b76",
  storageBucket: "pj6969-e7b76.appspot.com",
  messagingSenderId: "334385097492",
  appId: "1:334385097492:web:6e68c8b48b2a2a035c7001",
  measurementId: "G-WL29ETE8TC"
};
firebase.initializeApp(firebaseConfig);

export default firebase;