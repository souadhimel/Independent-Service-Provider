// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVMHXHE1EKLvsDBu7wuVXeCj7GBuF3lLA",
  authDomain: "independent-service-prov-34818.firebaseapp.com",
  projectId: "independent-service-prov-34818",
  storageBucket: "independent-service-prov-34818.appspot.com",
  messagingSenderId: "79590354320",
  appId: "1:79590354320:web:e952e8944ab8d66123d715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
