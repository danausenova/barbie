import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxpSBM81kqoMfkGtvImYKuEjg35ZK1Ja0",
  authDomain: "react-barbie.firebaseapp.com",
  projectId: "react-barbie",
  storageBucket: "react-barbie.appspot.com",
  messagingSenderId: "352782328105",
  appId: "1:352782328105:web:00d94fa666cfa92e919738",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
