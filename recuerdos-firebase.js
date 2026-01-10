import { db } from "./firebase.js";
import { collection, addDoc, getDocs } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const recuerdosRef = collection(db, "recuerdos");

function mostrarRecuerdos(recuerdos) {
  const contenedor = document.getElementById("listaRecuerdos");
  contenedor.innerHTML = "";

  recuerdos.forEach(texto => {
    const p = document.createElement("p");
    p.textContent = "🤍 " + texto;
    contenedor.appendChild(p);
  });
}

async function cargarRecuerdos() {
  const querySnapshot = await getDocs(recuerdosRef);
  const recuerdos = [];

  querySnapshot.forEach(doc => {
    recuerdos.push(doc.data().texto);
  });

  mostrarRecuerdos(recuerdos);
}

window.enviarFormulario = async function (e) {
  e.preventDefault();

  const texto = document.getElementById("textoRecuerdo").value.trim();
  if (texto === "") return;

  await addDoc(recuerdosRef, { texto });
  document.getElementById("textoRecuerdo").value = "";

  cargarRecuerdos();
};

window.onload = cargarRecuerdos;
