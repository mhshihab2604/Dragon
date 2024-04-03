import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
        .catch()
    } 
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
        .catch()
    } 
    const authInfo = {
        registerUser,
        loginUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;