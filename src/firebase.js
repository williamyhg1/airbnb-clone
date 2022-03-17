// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "airbnb-clone-6ff0c.firebaseapp.com",
  databaseURL: "https://airbnb-clone-6ff0c-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-6ff0c",
  storageBucket: "airbnb-clone-6ff0c.appspot.com",
  messagingSenderId: "747650000325",
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export default db;