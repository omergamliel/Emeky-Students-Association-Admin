// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOPhxhdk2G013Po_7-AZXF-oy7u7PX9I4",
  authDomain: "agudaapp.firebaseapp.com",
  projectId: "agudaapp",
  storageBucket: "agudaapp.firebasestorage.app",
  messagingSenderId: "235417015449",
  appId: "1:235417015449:web:373f6681997a7d75a4d408",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
