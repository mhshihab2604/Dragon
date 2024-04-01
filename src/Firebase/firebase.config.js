// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUV1cQk8JPYoewYqgd5Za3nrQYIenDqkM",
  authDomain: "moha-milon-ad0d6.firebaseapp.com",
  projectId: "moha-milon-ad0d6",
  storageBucket: "moha-milon-ad0d6.appspot.com",
  messagingSenderId: "688791258815",
  appId: "1:688791258815:web:f6b81392e25f404574280a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;