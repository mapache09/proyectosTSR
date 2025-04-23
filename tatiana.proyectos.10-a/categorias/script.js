function agregarTarea() {
    const tareaInput = document.getElementById("nueva-tarea");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = document.createElement("li");
nuevaTarea.classList.add("pendiente");
    nuevaTarea.innerHTML = `
       <span> ${tareaTexto} = <strong>${categoria}</strong></span> 
        <button class="eliminar" onclick="eliminarTarea(this)">Eliminar</button>
        <button class="pendiente" onclick="pendienteTarea(this)">pendiente</button>
    `;
   
    nuevaTarea.addEventListener("click", function() {
        nuevaTarea.classList.toggle("eliminar");
    
    });

    nuevaTarea.addEventListener("click", function() {
        nuevaTarea.classList.toggle("pendiente");
    });

    document.getElementById("lista-tareas").appendChild(nuevaTarea);

    tareaInput.value = "";
}


function eliminarTarea(boton) {
    const tarea = boton.parentElement;
    tarea.remove();
}


function pendiente(boton) {
    const tarea = boton.parentElement;
   
}