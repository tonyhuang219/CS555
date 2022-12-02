import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import {AuthStack, MainContainer, ChildContainer} from './MainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserStack(){

    const {uid, type}= useContext(AuthContext);
    
    // useEffect(() => {
    //     // 1. I'm not sure why you add a delay, It will probably only make your app appear sluggish
    //     // 2. Use effect callbacks should not be made async, see this post 
    //     // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
    //     async function fetchCredentials() {
    //         setUid (await AsyncStorage.getItem('parentID'));
    //         setType(await AsyncStorage.getItem('type'));
    //     }
    
    //     setInterval(async () => {
    //         console.log("test")
    //         await fetchCredentials();
    //     },1000);    
    // }, []);
    
    
    console.log("appNav uid: " + uid)
    console.log("appNav type: " + type)
    
    // let uid= null;
    // let type= "child";
    
    

    //should be determined by login
    let renderMultipleConditions = (uid, type) => {
        if(uid === undefined){
            return (<AuthStack></AuthStack>)
        }else if (type === "child"){
            return (<ChildContainer></ChildContainer>)
        }else{
            return (<MainContainer></MainContainer>)
        }
    }

    return (
        renderMultipleConditions(uid, type)
    )
}
  

export default UserStack