// ===============================
// ⏳ CUENTA ATRÁS
// ===============================
const fechaCumple = new Date(2026, 0, 26, 0, 0, 1);

function actualizarValor(id, nuevoValor) {
  const el = document.getElementById(id);
  if (!el) return;

  if (el.textContent !== String(nuevoValor)) {
    el.textContent = nuevoValor;
    el.classList.remove("contador-animado");
    void el.offsetWidth; // truco para reiniciar animación
    el.classList.add("contador-animado");
  }
}

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaCumple - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  // 🎬 Mostrar botón del video cuando llega a 0
if (diferencia <= 0) {
  const btnVideo = document.getElementById("btnVideo");
  if (btnVideo) {
    btnVideo.style.display = "inline-block";
  }
  return;
}

  actualizarValor("dias", dias);
  actualizarValor("horas", horas);
  actualizarValor("minutos", minutos);
  actualizarValor("segundos", segundos);
}

setInterval(actualizarContador, 1000);
actualizarContador();


// ===============================
// 🔒 BLOQUEO DE SECCIONES
// ===============================
const fechaInicio = new Date(2026, 0, 10);
const hoy = new Date();
const diasPasados = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));

function controlarBloqueos() {
  const btnFotos = document.getElementById("btn-fotos");

  // Seguridad: si el botón no existe, no hace nada
  if (!btnFotos) return;

  if (diasPasados < 3) {
    btnFotos.disabled = true;
    btnFotos.textContent = "📸 Fotos (pronto)";
    btnFotos.style.opacity = "0.4";
    btnFotos.style.cursor = "not-allowed";
  }
}

controlarBloqueos();


