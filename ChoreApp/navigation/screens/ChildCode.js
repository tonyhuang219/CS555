import React, { useState, useEffect } from "react";
import { getCodeFromId } from "../../backend/firebase";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  Text
} from "react-native";

export default function ChildCode({navigation}) {

    const [code, setCode] = useState()
   

    const isFocused = useIsFocused();
    async function fetchData(){
      try {
        const uid = await AsyncStorage.getItem('parentID');
        
        console.log("child uuid: " +uid);
        let childLoginCode = await getCodeFromId(uid);
        console.log("childLogin: " + childLoginCode)
        
        setCode(childLoginCode); // setState inside useEffect will create an infinite loop. Causes firebase to query too many reads
        //fetchData() called after navigating back from taskListm
        
  
      } catch (error) {
        console.log("err: " + error)
      }
     }
  
    //called when screen is open or when back on the screen
    useEffect( () =>{
      
       fetchData();
    }, [isFocused])
      
    
  return (
    <>
    <Text style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            top: 60
          }} >{code}</Text>
    </>
  );
}
