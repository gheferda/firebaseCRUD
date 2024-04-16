import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
/*FIRESTORE DATABASE*/
 import { getFirestore, collection, getDocs, } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';
/*import { app, db, collection, getDocs, getDatabase } from './firebase.js';*/
const firebaseConfig = {
  apiKey: "AIzaSyBg0dLmPT-UwWriQw-iK_4AKJLeVNhwRfs",
  authDomain: "crud-app-8aede.firebaseapp.com",
  projectId: "crud-app-8aede",
  storageBucket: "crud-app-8aede.appspot.com",
  messagingSenderId: "949411850095",
  appId: "1:949411850095:web:08684b7a218f9955ddea9a",
  measurementId: "G-S3D1KBWYJS"
};
const app = initializeApp(firebaseConfig)
const dbFirestore = getFirestore(app)

const usersCollection = collection(dbFirestore, "users");
//console.log(usersCollection)


const getUsers = async () => {
  const data = await getDocs(usersCollection)
  const results = data._snapshot
  console.log(data)
  
};
window.onload = getUsers();

