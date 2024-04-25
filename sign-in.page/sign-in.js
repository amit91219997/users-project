import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCkSu9yL8BsuUCBHJkAAU4d3fhAV-QNgCU",
    authDomain: "usersproject-d4fa1.firebaseapp.com",
    projectId: "usersproject-d4fa1",
    storageBucket: "usersproject-d4fa1.appspot.com",
    messagingSenderId: "819724240692",
    appId: "1:819724240692:web:ab14d7b8de15cd99d2c761",
    measurementId: "G-S7GP4GMF2B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);


let btnLogin = document.querySelector(".login");


window.signInWithEmail = async () => {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log('Signed in:', userCredential.user);

    } catch (error) {
        console.error('Sign-in error:', error);
    }
};

btnLogin.addEventListener("click", signInWithEmail);

onAuthStateChanged(auth, user => {
    if (user) {

        window.location.href = '/users.page/user-page.html';

    } else {

        console.log("Please log in.");
    }
});
