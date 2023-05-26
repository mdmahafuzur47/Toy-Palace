import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../fireBase/fireBase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //Google Sign In
  const googleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  // sign Up
  const register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign In
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // on auth change

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo);
      setLoader(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    register,
    login,
    logOut,
    loader,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
