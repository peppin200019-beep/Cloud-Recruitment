import { auth, db } from './firebase.js';

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* REGISTER */

const registerForm = document.getElementById('registerForm');

if(registerForm){

registerForm.addEventListener('submit', async (e)=>{

e.preventDefault();

const name = document.getElementById('name').value;

const email = document.getElementById('email').value;

const password = document.getElementById('password').value;

const role = document.getElementById('role').value;

try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await setDoc(doc(db, "users", userCredential.user.uid),{

name,
email,
role

});

alert("Registration Successful");

window.location.href = "login.html";

}catch(error){

alert(error.message);

}

});

}

/* LOGIN */

const loginForm = document.getElementById('loginForm');

if(loginForm){

loginForm.addEventListener('submit', async (e)=>{

e.preventDefault();

const email = document.getElementById('email').value;

const password = document.getElementById('password').value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Login Successful");

window.location.href = "dashboard.html";

}catch(error){

alert(error.message);

}

});

}