import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAQp2MN7tAbVEcBKwieLmzzXCe8fscd2-c",
    authDomain: "test-769fd.firebaseapp.com",
    projectId: "test-769fd",
    storageBucket: "test-769fd.appspot.com",
    messagingSenderId: "41027413953",
    appId: "1:41027413953:web:2b497154a1c3e303e3f140",
    measurementId: "G-ZZJM30CB3G"
};


const fb = firebase.initializeApp(config);

export const db = fb.firestore();
export const storage = firebase.storage();
