// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore,addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCijYEVwIdyjPrqX5J78Fq9f3l99iyKhg8",
  authDomain: "facebook-clone-d36ce.firebaseapp.com",
  projectId: "facebook-clone-d36ce",
  storageBucket: "facebook-clone-d36ce.appspot.com",
  messagingSenderId: "504847121677",
  appId: "1:504847121677:web:1765debf446d1551efc444"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
const databseRef=collection(database, "post")
export const addPost=(post)=>{
    addDoc(databseRef,post)
}