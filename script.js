let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

function crearTarea(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";

  btnEliminar.addEventListener("click", function () {
  li.remove();

  tareas = tareas.filter(function (t) {
    return t !== texto;
  });

  localStorage.setItem("tareas", JSON.stringify(tareas));
});

  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);
}

btnAgregar.addEventListener("click", function () {
  const textoTarea = inputTarea.value.trim();

  if (textoTarea === "") {
    alert("Por favor escribe una tarea");
    return;
  }

  crearTarea(textoTarea);

  tareas.push(textoTarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  inputTarea.value = "";
});

tareas.forEach(function (tarea) {
  crearTarea(tarea);
});