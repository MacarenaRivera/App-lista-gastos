import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import {onAuthStateChanged } from "firebase/auth";

//Contexto global
const AuthContext = React.createContext();

//Hook para acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    //estado del usario
    const [user, setUser] = useState();

    //Estado para saber cuando termina de cargar la comprobación de onAuthStateChanged
    const [charging, setCharging] = useState(true);

    //Efecto para ejecutar la comprobación una sola vez
    useEffect(() =>{
        //Comprobamos si hay un usuario, si lo hay nos devolverá un objeto de lo contrario solo null
        const cancelSubscription = onAuthStateChanged(auth, (user)=>{
            setUser(user);
            //y mostrará los elementos hijos
            setCharging(false)
        });
        //Se ejecutará esta función al cerrar sesión
        return cancelSubscription;
    }, [])

    return ( 
        <AuthContext.Provider value={{user: user}}>
            {/*Cuando no nos encontremos cargando, muestra los elementos hijos */}
            { !charging && children} 
        </AuthContext.Provider>
     );
}
 
export {AuthContext, AuthProvider, useAuth};