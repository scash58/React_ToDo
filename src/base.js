import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyCiRfBfVOH8Hjq3uQQmZ-miVC2PvTp0wzE",
    // authDomain: "reacttodo-f0e79.firebaseapp.com",
    // projectId: "reacttodo-f0e79",
    // storageBucket: "reacttodo-f0e79.appspot.com",
    // messagingSenderId: "52208623074",
    // appId: "1:52208623074:web:4f4e485d0547f13343adbb"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})

export const authResult = firebase.auth();

export default firebaseApp;
