import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { ADMINS } from "../utils/consts";
import { notify } from "../components/Toastify";

const registrContext = createContext();

export function useRegistrContext() {
  return useContext(registrContext);
}

const RegistrContext = ({ children }) => {
  const [user, setUser] = useState(true);

  async function register(email, password, displayName, photoURL) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName, photoURL });
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (e) {
      notify(e.code.split("/")[1], "error");
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
