// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp3d86rZ7pTu3gPzRvxXF3uuecpg5ScIc",
  authDomain: "gettingstartedwithfireba-b19d6.firebaseapp.com",
  projectId: "gettingstartedwithfireba-b19d6",
  storageBucket: "gettingstartedwithfireba-b19d6.appspot.com",
  messagingSenderId: "495852026334",
  appId: "1:495852026334:web:35f1911cb3ff20f92f054f",
  measurementId: "G-BV531LXM4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)