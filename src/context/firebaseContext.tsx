import { createContext } from "react";
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../firebaseConfig";

const fb_app = initializeApp(firebaseConfig);

const FirebaseContext = createContext(fb_app);

export default FirebaseContext;