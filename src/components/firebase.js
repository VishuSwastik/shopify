// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAazM4Lg5lR1zzlAIrzKWarH7NVRSaRUrw",
  authDomain: "shopify-d9351.firebaseapp.com",
  projectId: "shopify-d9351",
  storageBucket: "shopify-d9351.firebasestorage.app",
  messagingSenderId: "817047918985",
  appId: "1:817047918985:web:8a9075067347ce5641a958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db = getFirestore(app)
export default app;