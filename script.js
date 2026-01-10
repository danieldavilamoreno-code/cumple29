const fechaCumple = new Date(2026, 0, 26, 0, 0, 0);

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaCumple - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

const fechaInicio = new Date(2026, 0, 10);
const hoy = new Date();
const diasPasados = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));

function controlarBloqueos() {
  const btnFotos = document.getElementById("btn-fotos");

  if (diasPasados < 3) {
    btnFotos.disabled = true;
    btnFotos.textContent = "📸 Fotos (pronto)";
    btnFotos.style.opacity = "0.4";
  }
}

controlarBloqueos();



