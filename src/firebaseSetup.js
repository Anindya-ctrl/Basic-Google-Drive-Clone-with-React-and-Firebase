import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// APP CONFIG
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// AUTHENTICATION INSTANCE
export const auth = app.auth();

// ACCESS TO DATABASE
const firestore = app.firestore();
export const DATABASE = {
    folders: firestore.collection('folders'),
    files: firestore.collection('files'),
    formatDoc: doc => {
        return {
            id: doc.id,
            ...doc.data(),
        }
    },
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
}

// ACCESS TO FILE STORAGE
export const STORAGE = app.storage();

export default app;
