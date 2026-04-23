const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", function () {
  const textoTarea = inputTarea.value.trim();

  if (textoTarea === "") {
    alert("Por favor escribe una tarea");
    return;
  }

  const li = document.createElement("li");
  li.textContent = textoTarea;

  listaTareas.appendChild(li);
  inputTarea.value = "";
});