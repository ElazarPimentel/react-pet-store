// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyAX2Gs14v4pumMeFf5HHxTlCjcJwK7-wCo",
  authDomain: "patapatagonia-store.firebaseapp.com",
  projectId: "patapatagonia-store",
  storageBucket: "patapatagonia-store.appspot.com",
  messagingSenderId: "740977056585",
  appId: "1:740977056585:web:d79ea632fe45d35be05898"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
