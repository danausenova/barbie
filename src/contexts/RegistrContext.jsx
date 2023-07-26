import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { ADMINS } from "../utils/consts";

const registrContext = createContext();

export function useRegistrContext() {
  return useContext(registrContext);
}

const RegistrContext = ({ children }) => {
  const [user, setUser] = useState(true);

  async function register(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  function isAdmin() {
    if (!user) {
      return false;
    }
    return ADMINS.includes(user.email);
  }

  const value = {
    user,
    register,
    login,
    logout,
    isAdmin,
  };

  return (
    <registrContext.Provider value={value}>{children}</registrContext.Provider>
  );
};

export default RegistrContext;
