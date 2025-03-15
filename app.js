//Array de almacen de nombres de amigos
let amigos = [];

//Funcion de actualizacion para la busqueda de amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    //Validacion de espacio no vacio
    
    if(nombreAmigo === "" ){
        alert("Inserte un nombre porfavor");
        return; //detener ejecucion de funcion 
    }

    //validar que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)) {
        alert(`el nombre "${nombreAmigo}" ya esta en la lista, favor de escoger uno diferente`);
        return;

    }

    //agregar al array el nombre de amigos
    amigos.push(nombreAmigo);

    //limpiar el campo de entrada
    inputAmigo.value = "";

    //actualizar lista de html
    actualizarLista();
    
}

//funcion para actualizar la lista de amigos en la interfaz 

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiar el contenido actual de la lista 
    listaAmigos.innerHTML = "";

    //recorrer con for
    for (let i = 0; i < amigos.length; i++) {
     const li = document.createElement('li');
     li.textContent = amigos[i];
     listaAmigos.appendChild(li);

    }
}

//funcion para seleccionar un amigo aleatorio 

function sortearAmigo() {
    //validar amigos disponibles
    if(amigos.length === 0) { //comprueba si el array amigos esta vacio
    alert("no hay amigos disponibles, agrega al menos uno porfavor");
    return;
    }
//indice aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length); 

//nombre sorteado 
const amigoSorteado = amigos[indiceAleatorio];

//Resultado en HTML 
const resultado = document.getElementById('resultado');
resultado.innerHTML = `Amigo sorteado: <Strong>${amigoSorteado}</strong>`;


}