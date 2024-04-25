import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
let btnRegister = document.getElementById("register");


const signUp = async () => {
    const signUpEmail = email.value;
    const signUpPassword = password.value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        console.log("User created with ID: ", userCredential.user.uid);
    
       

        await addValue(userCredential.user.uid, name.value, email.value, password.value);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
    }
};

async function addValue(userId, userName, userEmail, userPassword) {

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: userName,
            email: userEmail,
            id: userId,
            password: userPassword
        });
        console.log("Document written with ID: ", docRef.id);
        alert("user successfully created");
        name.value = '';
        email.value = '';
        password.value = '';
  
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error adding document: " + error.message);
    }
}

btnRegister.addEventListener("click", signUp);


