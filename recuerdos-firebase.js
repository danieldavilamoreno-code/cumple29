import { db } from "./firebase.js";
import { collection, addDoc } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.enviarFormulario = async function (e) {
  e.preventDefault();

  const texto = document.getElementById("textoRecuerdo").value.trim();
  if (texto === "") {
    alert("Escribe algo primero 🤍");
    return;
  }

  try {
    await addDoc(collection(db, "recuerdos"), {
      texto: texto
    });

    alert("Recuerdo guardado en la nube 🤍");
    document.getElementById("textoRecuerdo").value = "";

  } catch (error) {
    console.error("Error al guardar:", error);
    alert("Algo salió mal 💔");
  }
};
