#alert("El script SI está cargando");

const fechaCumple = new Date();
fechaCumple.setDate(fechaCumple.getDate() + 10);


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


