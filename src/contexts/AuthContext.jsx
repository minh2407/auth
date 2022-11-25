import React, {useContext} from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext()


//function to use useContext
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
    
    }

    //firebase have own way to notify you whenever use gets set
    const value = {
        currentUser
    }

    return (

    )
}