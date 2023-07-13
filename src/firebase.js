import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa97ZfQi89HzjMTwQXRzt6V8naMmNrqjA",
  authDomain: "librarymanagement-88304.firebaseapp.com",
  projectId: "librarymanagement-88304",
  storageBucket: "librarymanagement-88304.appspot.com",
  messagingSenderId: "117788276122",
  appId: "1:117788276122:web:0afb88cbeed96931dd3623",
  measurementId: "G-8PZVQY7EY3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {app};