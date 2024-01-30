// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHWRqp6KYkdw28iYSeALvze7xjpbr5o0I",
  authDomain: "chatapp2-yone.firebaseapp.com",
  projectId: "chatapp2-yone",
  storageBucket: "chatapp2-yone.appspot.com",
  messagingSenderId: "697356852344",
  appId: "1:697356852344:web:274400b451e7ff31efa18d",
  measurementId: "G-ESH674PVMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
