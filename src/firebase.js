// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDFoQ5_u0HLW6rQI561IXAWuSzE1SLydks",

  authDomain: "chat-app-aa7a3.firebaseapp.com",

  projectId: "chat-app-aa7a3",

  storageBucket: "chat-app-aa7a3.appspot.com",

  messagingSenderId: "285177861677",

  appId: "1:285177861677:web:96c930fb24c791d0014aa4",

  measurementId: "G-3RGJJKMC28"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
