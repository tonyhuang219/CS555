import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, deleteDoc, collection, query, where, getDocs, DocumentSnapshot, getDoc, doc, updateDoc, arrayUnion, DocumentReference, onSnapshot } from 'firebase/firestore';
import Constants from 'expo-constants';
import 'firebase/auth'
import { getStorage, ref, uploadString } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAeTsGwq3g_hzvEE4iyLgDxQ2ssKSSUPRs",
    authDomain: "choreapp-509d1.firebaseapp.com",
    projectId: "choreapp-509d1",
    storageBucket: "choreapp-509d1.appspot.com",
    messagingSenderId: "457327985127",
    appId: "1:457327985127:web:ccf84e7c39bb4624b0fd42",
    measurementId: "G-CYJZSDWFHR"
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
        console.log("success");
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
