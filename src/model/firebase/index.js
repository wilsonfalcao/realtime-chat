import firebase from "firebase";


import "firebase/auth";

//Variável de Configuração
var firebaseConfig = {
    apiKey: "AIzaSyAvLsEvLA1wQTY109UnxFCO-Mueq46hU3c",
    authDomain: "chat-realtime-reactnative.firebaseapp.com",
    projectId: "chat-realtime-reactnative",
    storageBucket: "chat-realtime-reactnative.appspot.com",
    messagingSenderId: "991109383428",
    appId: "1:991109383428:web:9be865e40ef1a4535c7c51"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default{
  firebase,
  db,
};