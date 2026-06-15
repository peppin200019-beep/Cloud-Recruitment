import { db } from './firebase.js';

import {
collection,
addDoc,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const jobForm = document.getElementById('jobForm');

if(jobForm){

jobForm.addEventListener('submit', async (e)=>{

e.preventDefault();

const title = document.getElementById('title').value;

const company = document.getElementById('company').value;

const location = document.getElementById('location').value;

const salary = document.getElementById('salary').value;

const description =
document.getElementById('description').value;

try{

await addDoc(collection(db, "jobs"),{

title,
company,
location,
salary,
description

});

alert("Job Posted Successfully");

jobForm.reset();

}catch(error){

alert(error.message);

}

});

}