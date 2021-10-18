const nombre = document.getElementById("entername");
const apellidos = document.getElementById("enterlastname");
const correo = document.getElementById("enteremail");
const celular = document.getElementById("enterphone");
const contrasenia = document.getElementById("enterpassword");
const contrasenia2 = document.getElementById("enterpasswordagain");
const terminosYcondiciones = document.getElementById("AcceptTerms");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("entername", "Nombre no válido, intente de nuevo");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("enterlastname", "Apellido no válido, intente de nuevo");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("enteremail", "Correo electrónico no válido, intente de nuevo");
    condicion = false;
  }
  if (
    celular.value.length != 10 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("enterphone", "Número no válido, intente de nuevo");
    condicion = false;
  }
  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("enterpassword", "Contraseña no válida, intente de nuevo");
    condicion = false;
  }
  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("enterpasswordagain", "La contraseña no coincide, intente de nuevo");
    condicion = false;
  }
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("AcceptTerms", "Por favor, acepte los términos y condiciones");
    condicion = false;
  } else {
    mostrarMensajeError("AcceptTerms", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "¡Datos enviados correctamente!";
}