import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializationFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializationFirebase;
