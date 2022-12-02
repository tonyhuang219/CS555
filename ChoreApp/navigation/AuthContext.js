import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [uid, setUid] = useState (undefined);
    const [type, setType] = useState (undefined);

    const login = async() => {
        console.log("login button pressed")
        setUid (await AsyncStorage.getItem('parentID'));
        setType(await AsyncStorage.getItem('type'));
        console.log("login: " + uid)
        console.log("login: " + type)
    }

    return (
    <AuthContext.Provider value = {{uid, type, login}} >
        {children}
    </AuthContext.Provider>
    );
}