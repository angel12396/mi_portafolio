//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;
function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos ==0){
        intervalo = setInterval(actualizarContador, 60);
    }
}


function actualizarContador() {
    // Verifica si hemos llegado a 50
    if (proyectos <= 50) {
        // Muestra el valor actual del contador en el elemento con id "contador"
        document.getElementById("contProyectos").textContent = proyectos;
        // Incrementamos el contador en 1
        proyectos++;
    } else {
        // Si ahllegado a 50, detenemos el intervalo
        clearInterval(intervalProyectos);
    }
    // Verificamos si hemos llegado a 30
    if (clientes <= 30) {
        // Muestra el valor actual del contador en el elemento con id "contador"
        document.getElementById("contClientes").textContent = clientes;
        // Incrementa el contador en 1
        clientes++;
    } else {
        // Si ah llegado a 50, detenemos el intervalo
        clearInterval(intervalclientes);
    }
    // Verificamos si hemos llegado a 40
    if (cursos <= 40) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementa el contador en 1
        cursos++;
    } else {
        // Si ah llegado a 50, detenemos el intervalo
        clearInterval(intervalCursos);
    }
}
//detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    animacionNumeros();
    animacionesSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills(){
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 400){
        document.getElementById("html").className = " progreso html";
        document.getElementById("css").className = " progreso css";
        document.getElementById("python").className = " progreso python";
        document.getElementById("english").className = " progreso english";
    }
}