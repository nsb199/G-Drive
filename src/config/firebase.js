import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhdeQPIQAJmej1dYWLoFvCW_lcX1fJ5kU",
    authDomain: "g-drive-self.firebaseapp.com",
    projectId: "g-drive-self",
    storageBucket: "g-drive-self.appspot.com",
    messagingSenderId: "601285073147",
    appId: "1:601285073147:web:f0a8b3edbe80ca127bb85e"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
