function agregarTarea(){
    const tareaInput=document.getElementById("nueva-tarea");
    const tareaTexto=tareaInput.value.trim();
    
    if(tareaTexto ===""){
        alert("por favor, escribir una tarea");
        return;
    }
const nuevaTarea=document.getElementById("li")
 nuevaTarea.innerHTML=`
 $(tareaTexto)
 <button class="eliminar" onclick="eliminarTarea"(this)">eliminar</button>
 `;

 nuevaTarea.addEventListener("click", function(){

    nuevaTarea.classList.toggle("completado");
 });

document.getElementById("lista-tareas").appendChild(nuevaTarea);


tareaInput.value="";
}


function eliminarTarea(boton){
    const tarea=boton.parentElement;
    tarea.remove();
}