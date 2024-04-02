import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
} from "firebase/auth";

import {
    uName,
    createEmail,
    createPassword,
    signUpButton
} from "./createAcct.html";

const firebaseConfig = {
    apiKey: "AIzaSyBQiD0QmWyl_-4SHfUoFFsILPxJ8F5tHKA",
    authDomain: "cody-cooks.firebaseapp.com",
    databaseURL: "https://cody-cooks-default-rtdb.firebaseio.com",
    projectId: "cody-cooks",
    storageBucket: "cody-cooks.appspot.com",
    messagingSenderId: "860432436020",
    appId: "1:860432436020:web:d76240c51638608eea7361",
    measurementId: "G-XL8XSHVV7Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(app);

connectAuthEmulator(auth, "http://localhost:9099");

//signup
const loginEmailPassword = async () => {
    const loginEmail = createEmail.value;
    const loginPassword = createPassword.value;
}

signUpButton.addEventListener("click", loginEmailPassword);
console.log(userCredential.user);

const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);