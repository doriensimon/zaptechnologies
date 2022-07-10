import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    query,
    orderBy,
    onSnapshot,
    collection,
    getDoc, 
    getDocs, 
    addDoc,
    updateDoc,
    doc, 
    serverTimestamp, 
    arrayUnion
} from "firebase/firestore";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDPibi5ZUjre8FdIc2L53VLYzLNMl_Hxdo",
    authDomain: "bolt-fa3b8.firebaseapp.com",
    projectId: "bolt-fa3b8",
    storageBucket: "bolt-fa3b8.appspot.com",
    messagingSenderId: "475894817920",
    appId: "1:475894817920:web:97ee64afcfcf1a54123265",
    measurementId: "G-WN0NZM8D45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

/* FIREBASE AUTH */
export const logInWithEmailAndPassword = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((value) => console.log(value))
        .catch((e) => {
            console.log(e);
            return e;
        });
};

export const registerWithEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((value) => console.log(value))
        .catch((e) => console.log(e));
};

export const streamCollection = (collectionName, snapshot, error) => {
    const collectionRef = collection(db, collectionName);

    return onSnapshot(collectionRef, snapshot, error);
}

// import { initializeApp } from "firebase/app";
// import {
//     getAuth,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
// } from "firebase/auth";

// import {
//     getFirestore,
//     query,
//     getDocs,
//     collection,
//     onSnapshot,
//     doc,
//     where,
//     addDoc,
//     GeoPoint,
// } from "firebase/firestore";
// import { LayoutAnimation } from "react-native";

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);