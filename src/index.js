

// src/index.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
// import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { 
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

import {
  createEmail,
  createPassword,
  createAcctBtn
} from "./createAcct.html";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBQiD0QmWyl_-4SHfUoFFsILPxJ8F5tHKA",
    authDomain: "cody-cooks.firebaseapp.com",
    databaseURL: "https://cody-cooks-default-rtdb.firebaseio.com",
    projectId: "cody-cooks",
    storageBucket: "cody-cooks.appspot.com",
    messagingSenderId: "860432436020",
    appId: "1:860432436020:web:d76240c51638608eea7361",
    measurementId: "G-XL8XSHVV7Z"});
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
  console.log("success");
  const loginEmail = createEmail.value;
  const loginPassword = createPassword.value;

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
}

createAcctBtn.addEventListener("click", loginEmailPassword);