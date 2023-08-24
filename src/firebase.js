// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth" ;
import { getFirestore} from "@firebase/firestore" ;


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEkoJkMBzEt8Lub2karA4v1BAIqSKMVIg",
  authDomain: "video-app-f34c8.firebaseapp.com",
  projectId: "video-app-f34c8",
  storageBucket: "video-app-f34c8.appspot.com",
  messagingSenderId: "201117158293",
  appId: "1:201117158293:web:b1a85f18cbf3cca3f1849c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app) ;

// Firestore
export const firestore = getFirestore(app) ;


export default app ;
