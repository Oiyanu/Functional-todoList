// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc
 } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfqzsSGuSepu0e4O1x8eXRjqPasqK-j5w",
  authDomain: "todolist-bda46.firebaseapp.com",
  projectId: "todolist-bda46",
  storageBucket: "todolist-bda46.firebasestorage.app",
  messagingSenderId: "754607185374",
  appId: "1:754607185374:web:9a1fe962e692a949ab914f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'todolists');

onSnapshot(colRef, (snapshot) => {
  const todos = snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }))
});

