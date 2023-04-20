// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByVo4vpc84UAFgZt2xQidXN61zSxDQkMY",
  authDomain: "backstore-6ca27.firebaseapp.com",
  projectId: "backstore-6ca27",
  storageBucket: "backstore-6ca27.appspot.com",
  messagingSenderId: "615818244819",
  appId: "1:615818244819:web:bb75401d94d4ba0391da26",
  measurementId: "G-59JVX3CM3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore

export default db