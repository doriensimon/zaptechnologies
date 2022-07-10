console.log("hello");
import * as firebase from "firebase/app"


// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// // Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//     apiKey: "AIzaSyDPibi5ZUjre8FdIc2L53VLYzLNMl_Hxdo",
//     authDomain: "bolt-fa3b8.firebaseapp.com",
//     projectId: "bolt-fa3b8"
//   });
  
// var db = firebase.firestore();

// // var 
// fetch("./dummy-charger-data.json", { mode: "no-cors" }) // disable CORS because path does not contain http(s)
//       .then((res) => res.json())
//       .then((data) => console.log(data));


// menu.forEach(function(obj) {
//     db.collection("menu").add({
//         id: obj.id,
//         name: obj.name,
//         description: obj.description,
//         price: obj.price,
//         type: obj.type
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });