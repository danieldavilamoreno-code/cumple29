// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Tu configuración (REEMPLAZA con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyDVf2aqLH5kte0RYwxki43eJVwKPApSEs0",
  authDomain: "cumple29-2871f.firebaseapp.com",
  projectId: "cumple29-2871f",
  storageBucket: "cumple29-2871f.firebasestorage.app",
  messagingSenderId: "109039407228",
  appId: "1:109039407228:web:13ac3e5b54c129e097b9f9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);
