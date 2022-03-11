// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtrmlR_Kc3bTPLMZQlww4PhDMp_zq3zhM",
  authDomain: "airbnb-clone-6ff0c.firebaseapp.com",
  databaseURL: "https://airbnb-clone-6ff0c-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-6ff0c",
  storageBucket: "airbnb-clone-6ff0c.appspot.com",
  messagingSenderId: "747650000325",
  appId: "1:747650000325:web:071d5709c733c2f9b757ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// async function getListings(db) {
//   const listings = collection(db, 'DATA');
//   const listingsSnapshot = await getDocs(listings);
//   const listingsList = listingsSnapshot.docs.map(doc => doc.data());
//   return listingsList;
// }

export default db;