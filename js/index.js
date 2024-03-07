// Seleccionamos los elementos que serán interactivos.

// Seleccionamos el input.
const task = document.getElementById('new-task')
// Seleccionamos el botón.
const addButton = document.getElementById('btn-add-task')
// Seleccionamos el div donde insertaremos el elemento task.
const list = document.getElementById('main-wrapper')
// Seleccionamos el span donde sumaremos al contador.
const pendingTasks = document.getElementsByTagName('span')[0]
/* Esta variable se inicializa en 0 al principio del programa. 
Luego, cada vez que se agrega una nueva tarea, se incrementa en 1.
Se utiliza para mostrar el número total de tareas pendientes en el elemento pendingTasks del HTML.
Mantiene un registro del número total de tareas creadas*/
var taskCounter = 0
// Asegura que cada botón de borrado tenga un ID único.
var buttonCounter = 1 

// Insertamos a span el valor 0 para el contador.
pendingTasks.innerText = taskCounter

// Asignamos la función addTodo al hacer click en el botón.
addButton.onclick = addTodo

// Ejecutamos la función addTodo al hacer click en el botón.
function addTodo() {
  // Creamos un div para la tarea que contendrá el valor del input y un botón para borrar la tarea insertada.
  let newTodo = document.createElement('div')
  // Creamos un span, insertamos el valor del input y un botón de borrado con id = "btn- + n con valor contador"
  newTodo.innerHTML = '<span>' + task.value + '</span> <button id="btn-' + buttonCounter + '">Delete</button>'
  // Insertamos en el div la tarea en el último lugar dentro del div principal.
  list.appendChild(newTodo)
  // Limpiamos el input.
  task.value = ''

  // Seleccionamos el botón apenas creado.
  const deleteButton = document.getElementById('btn-' + buttonCounter)
  // Asignamos la función deleteTodo al hacer click en el botón delete.
  deleteButton.onclick = deleteTodo

  // Creamos la clase delete-button en el botón de borrado.
  deleteButton.classList.add('delete-button')
  // Sumo al contador.
  pendingTasks.innerText = ++taskCounter
  // Sumo para la clase del botón próximo.
  buttonCounter++
}

// Función para borrar la tarea.
function deleteTodo(e) {
  // Detectamos con e el botón detectado y su padre.
  list.removeChild(e.currentTarget.parentNode)
  // Restamos 1 al contador.
  pendingTasks.innerText = --taskCounter
}

// Para poder activar addTodo con ENTER.
task.onkeydown = function (e) {
  if (e.key === 'Enter') {
    addTodo()
  }
}