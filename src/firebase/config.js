import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();





// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "a-firegram.firebaseapp.com",
    databaseURL: process.env.REACT_DATABASE_URL,
    projectId: "a-firegram",
    storageBucket: "a-firegram.appspot.com",
    messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
