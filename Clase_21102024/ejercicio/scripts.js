/*  no Funciono este metodo Xd
function Agregart(value) {

    document.getElementById('ingresamos');
    
}

let saludar = nombre => "Saludos " + nombre;
console.log (saludar ("Esteban"));


// Referencias a los elementos del HTML
const inputTarea = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');
const mensajeError = document.getElementById('mensajeError');

// Crear un array para almacenar las tareas

*/


// Referencias a los elementos del HTML
const inputTarea = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');
const mensajeError = document.getElementById('mensajeError');

// Crear un array para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
const agregarTarea = () => {
    const tareaTexto = inputTarea.value.trim();  // Quitar espacios en blanco

    if (tareaTexto === '') {
        // Si el campo está vacío, mostramos el mensaje de error
        mensajeError.style.display = 'block';
    } else {
        // Ocultar el mensaje de error si no está vacío
        mensajeError.style.display = 'none';

        // Agregar tarea al array
        tareas.push(tareaTexto);

        // Actualizar la lista en la consola
        console.log('Lista de tareas:', tareas);

        // Limpiar el input
        inputTarea.value = '';

        // Actualizar visualmente la lista
        actualizarListaTareas();
    }
};

// Función para actualizar la lista de tareas en la pantalla
const actualizarListaTareas = () => {
    // Limpiar la lista visual antes de agregar tareas
    listaTareas.innerHTML = '';

    // Iterar sobre el array de tareas y crear los elementos de lista
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;

        // Crear botón para eliminar tarea
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarTarea(index);

        // Agregar botón al <li> y luego agregar <li> a la lista
        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });
};

// Función para eliminar una tarea
const eliminarTarea = (indice) => {
    // Eliminar tarea del array
    tareas.splice(indice, 1);

    // Actualizar la lista en la consola
    console.log('holastardes Actualizado:', tareas);

    // Actualizar la lista visualmente
    actualizarListaTareas();
};

// Evento de clic para agregar tarea
botonAgregar.addEventListener('click', agregarTarea);
