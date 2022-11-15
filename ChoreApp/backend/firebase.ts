import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, deleteDoc, collection, query, where, getDocs, DocumentSnapshot, getDoc, doc, updateDoc, arrayUnion, DocumentReference, onSnapshot } from 'firebase/firestore';
import Constants from 'expo-constants';
import 'firebase/auth'
import { getStorage, ref, uploadString } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVhpJbSSTXzxJGSgN1S69a5U47PSt-8ag",
    authDomain: "cs555-25b5d.firebaseapp.com",
    projectId: "cs555-25b5d",
    storageBucket: "cs555-25b5d.appspot.com",
    messagingSenderId: "849138197372",
    appId: "1:849138197372:web:4c70131c9cbd8276067af9",
    measurementId: "G-3GSCYTDXGB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// AUTHENTICATION // ---------------------------------------------------------
let user = auth.currentUser;

export const signUpWithEmail = async (fName: string, lName: string, email: string, password: string) => {
    try {
        let result = await createUserWithEmailAndPassword(auth, email, password);
        user = result.user;
        await updateProfile(user, {
            displayName: fName + ' ' + lName,
        });
        console.log(user);
        await addNewUser(fName, lName, email);
        return 'success'
    } catch (e) {
        console.log(e);
       
        return e;
    }
}

export const logInWithEmail = async (email: string, password: string) => {
    try {
        let result = await signInWithEmailAndPassword(auth, email, password);
        user = result.user;
        return 'success'
    } catch (e) {
        console.log(e);
        return e;
    }
}

export const logOut = async () => {
    try {
        await signOut(auth);
        user = auth.currentUser;
        console.log(user)
        return 'success'
    } catch (e) {
        console.log(e);
    }
}

// FIRESTORE // --------------------------------------------------------------
const addNewUser = async (fName: string, lName: string, email: string) => {
    try {
        const userData = {
            first_name: fName,
            last_name: lName,
            email: email,
            cart: [],
        }
        const docRef = await addDoc(collection(firestore, "users", ), userData);
        console.log(docRef.id);
    } catch (e) {
        console.log(e);
    }
}

export const getEmail = async () => {
    let email = user?.email;
    let email_one = "this";

    if (email == null) {
        email_one = 'null'
    }
    else if (email == undefined) {
        email_one = 'undefined'
    }
    else {
        email_one = email;
    }

    return email_one;
}

export const getFirstName = async () => {
    let name = user?.displayName;
    let name_one = "this";

    if (name == null) {
        name_one = 'null'
    }
    else if (name == undefined) {
        name_one = 'undefined'
    }
    else {
        name_one = name;
    }

    return name_one;
}

// TASKADD // ------------------------------
export const addTaskDB = async (taskName: string, reward: string, note: string, date: Date) => {
    try {
        const taskDate = {
            Task_Name: taskName,
            Reward: reward,
            Note: note,
            Date: date,
        }
        const docRef = await addDoc(collection(firestore, "tasks" ), taskDate);
        return docRef;  //  console.log(docRef.id);
    } catch (e) {
        throw e;
    }
}


export const deleteTaskDB = async (id) => {
    const docRef = doc(firestore, "tasks", id);
    const deleteInfo = await deleteDoc(docRef);
}

export const getAllTasks = async () =>{
    let querySnapshot = await getDocs(collection(firestore, 'tasks'));
    return querySnapshot;
}
