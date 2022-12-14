import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, deleteDoc, collection, where, getDocs, DocumentSnapshot, getDoc, doc, updateDoc, arrayUnion, DocumentReference, onSnapshot, query } from 'firebase/firestore';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'firebase/auth'
import { getStorage, ref, uploadString } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAeTsGwq3g_hzvEE4iyLgDxQ2ssKSSUPRs",
    authDomain: "choreapp-83385.firebaseapp.com",
    projectId: "choreapp-83385",
    storageBucket: "choreapp-83385.appspot.com",
    messagingSenderId: "465424772715",
    appId: "1:465424772715:web:3b478948cb5be29708cb2e",
    measurementId: "G-5Y4ZPHM377"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// AUTHENTICATION // ---------------------------------------------------------
let user = auth.currentUser;


onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("on auth change: "+ user)
      const uid = user.uid;
      const items: [string,string][] = [['parentID',"uid"], ["type", "parent"]]
    //   await AsyncStorage.multiSet(
    //     items
    //   );
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

export const signUpWithEmail = async (fName: string, lName: string, email: string, password: string) => {
    try {
        let result = await createUserWithEmailAndPassword(auth, email, password);
        user = result.user;
        await updateProfile(user, {
            displayName: fName + ' ' + lName,
        });
        console.log(user);
        let code = (Math.random() + 1).toString(36).substring(7);
        await addNewUser(fName, lName, email, code);
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
        console.log("The user: ")
        console.log(user)
        const uid = await getIdFromEmail(email);
        const items: [string,string][] = [['parentID',uid], ["type", "parent"]]
        
        await AsyncStorage.multiSet(
            items
        );
        console.log("setting login:" +await AsyncStorage.getItem('parentID'))
        console.log("setting login:" +await AsyncStorage.getItem('type'))
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
const addNewUser = async (fName: string, lName: string, email: string, code: string) => {
    try {
        const userData = {
            first_name: fName,
            last_name: lName,
            email: email,
            cart: [],
            childlogin: code
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

//not used
export const getUserType = async (uid) => {
    
    const parentDocRef = doc(firestore, "parent", uid);
    const docParentSnap = await getDoc(parentDocRef);

    const childDocRef = doc(firestore, "child", uid);
    const docChildSnap = await getDoc(childDocRef);


    if (docParentSnap.exists) {
      console.log('User is a parent');
      return "parent"
    } 
    if (docChildSnap.exists) {
        console.log('User is a child');
        return "child"
    }
}

export const getIDFromCode = async( code: string) =>{
    let querySnapshot = await getDocs(collection(firestore, 'users'));
    let id = "";
    querySnapshot.forEach((doc) => {
        if(doc.data().childlogin === code){
            id= doc.id
        }})
    if (id === ""){
        throw "invalid code"
    }else{
        return id;
    } 
}

export const getCodeFromId = async( id) =>{
    let querySnapshot = await getDocs(collection(firestore, 'users'));
    let code = "";
    querySnapshot.forEach((doc) => {
        if(doc.id  === id){
            code =  doc.data().childlogin
        }})
    if (code === ""){
        throw "invalid id"
    }else{
        return code;
    } 
}


export const getIdFromEmail = async( email: string) =>{
    let querySnapshot = await getDocs(collection(firestore, 'users'));
    let id = "";
    querySnapshot.forEach((doc) => {
        if(doc.data().email === email){
            id= doc.id
        }})
    if (id === ""){
        throw "invalid code"
    }else{
        return id;
    } 
}

// TASKADD // ------------------------------
export const addTaskDB = async (taskName: string, reward: string, note: string, date: Date, parentID: string) => {
    try {
        const taskDate = {
            Task_Name: taskName,
            Reward: reward,
            Note: note,
            Date: date,
            Username: parentID
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

export const getAllTasks = async (id:string) =>{
    console.log("id: " + id)
    let tasklist = []
    let querySnapshot = await getDocs(collection(firestore, 'tasks'));
    querySnapshot.forEach((doc) => {
        if(doc.data().Username === id){
            tasklist.push({...doc.data(), id: doc.id})
        }})


    return tasklist;
}
