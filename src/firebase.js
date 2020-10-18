// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvNvdP3Ncg-ZfghfiGFLFb2Pa7J5vwvPk",
    authDomain: "grocery-delivery-7dc79.firebaseapp.com",
    databaseURL: "https://grocery-delivery-7dc79.firebaseio.com",
    projectId: "grocery-delivery-7dc79",
    storageBucket: "grocery-delivery-7dc79.appspot.com",
    messagingSenderId: "1013772130055",
    appId: "1:1013772130055:web:8e988bf1269f0542ec57a2",
    measurementId: "G-PCXZN46F25"
  };

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();

const auth = firebase.auth();

export {auth,db};