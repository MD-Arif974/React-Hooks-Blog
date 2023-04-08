import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBRvl7odx110YT4dBofeyB9j0MFxk2KDdU",
    authDomain: "react-hooks-blog-deee4.firebaseapp.com",
    projectId: "react-hooks-blog-deee4",
    storageBucket: "react-hooks-blog-deee4.appspot.com",
    messagingSenderId: "1087566711652",
    appId: "1:1087566711652:web:98295dc046d39b81bfc871"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();