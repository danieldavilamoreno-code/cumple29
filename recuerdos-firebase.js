import { db } from "./firebase.js";
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const recuerdosRef = collection(db, "recuerdos");

function mostrarRecuerdos(recuerdos) {
  const contenedor = document.getElementById("listaRecuerdos");
  contenedor.innerHTML = "";

  recuerdos.forEach(recuerdo => {
    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";
    item.style.marginBottom = "8px";

    const texto = document.createElement("p");
    texto.textContent = "🤍 " + recuerdo.texto;
    texto.style.margin = "0";

    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.style.width = "auto";
    btn.style.padding = "6px 10px";
    btn.style.fontSize = "12px";

    btn.onclick = () => borrarRecuerdo(recuerdo.id);

    item.appendChild(texto);
    item.appendChild(btn);
    contenedor.appendChild(item);
  });
}

async function cargarRecuerdos() {
  const querySnapshot = await getDocs(recuerdosRef);
  const recuerdos = [];

  querySnapshot.forEach(docSnap => {
    recuerdos.push({
      id: docSnap.id,          // 👈 ID DEL DOCUMENTO
      texto: docSnap.data().texto
    });
  });

  mostrarRecuerdos(recuerdos);
}

async function borrarRecuerdo(id) {
  const confirmar = confirm("¿Seguro que quieres borrar este recuerdo? 🤍");
  if (!confirmar) return;

  await deleteDoc(doc(db, "recuerdos", id));
  cargarRecuerdos();
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
