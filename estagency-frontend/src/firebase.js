import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDTbQ97k71cr5m3pG5zx3UjhOmlheZ08Gk",
    authDomain: "estagency-bf9ee.firebaseapp.com",
    databaseURL: "https://estagency-bf9ee-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "estagency-bf9ee",
    storageBucket: "estagency-bf9ee.appspot.com",
    messagingSenderId: "63629532336",
    appId: "1:63629532336:web:5d90433836c2e60939af75",
    measurementId: "G-L3QKEJ242Q"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export {
    database
}