import React from 'react';
import {ReactComponent as LogoutIcon} from "../images/log-out.svg";
import Button from './Button';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const logout = async () => {
       try{
        await signOut(auth);  
        navigate("/login");
       } catch(error){
            console.log(error);
       }
    }

    return ( 
        <Button largeIcon as="button" onClick={logout}>
            <LogoutIcon />
        </Button>
     );
}
 
export default LogoutButton;