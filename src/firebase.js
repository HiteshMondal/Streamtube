import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7oGlTOCq31hLF7-JioEdaliGnsLb2JqM",
  authDomain: "streamtube-862f0.firebaseapp.com",
  projectId: "streamtube-862f0",
  storageBucket: "streamtube-862f0.firebasestorage.app",
  messagingSenderId: "1063076865352",
  appId: "1:1063076865352:web:8bf36ceac24e7d98f1bf7d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            authProvider: "local",
            name,
            email,
            password,
        });
    } catch (error) {
        console.error("Error signing up:", error);
        alert(error);
    }
}

const login = async (email, password)=> {
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch (error){
        console.log(error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}
export {auth, db, login, signup, logout};