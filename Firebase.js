// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRlZieqmZLlRUP6D9WPNonI7n_wD0-ss",
  authDomain: "shopper-web-app.firebaseapp.com",
  projectId: "shopper-web-app",
  storageBucket: "shopper-web-app.appspot.com",
  messagingSenderId: "1013941277059",
  appId: "1:1013941277059:web:8fc3bc13ebf98ae519a6b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);