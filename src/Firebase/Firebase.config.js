// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD0DygYtkD_NPMAvmGvgjlYmANxuTiTvg",
  authDomain: "conference-335d4.firebaseapp.com",
  projectId: "conference-335d4",
  storageBucket: "conference-335d4.appspot.com",
  messagingSenderId: "406610016478",
  appId: "1:406610016478:web:0ae6ad8811b4209d98ea4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth