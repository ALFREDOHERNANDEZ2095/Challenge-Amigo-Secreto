// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array
const listaDeAmigos=[];
const ulListaDeAmigos = document.getElementById("listaAmigos");

// Funcion agregar amigos
function agregarAmigo()
{
 const entradaAmigo= document.getElementById ('amigo');
 const nombreAmigo = entradaAmigo.value.trim();

    //Valida que el campo no esta vacio!!
    if (nombreAmigo === "") {
        alert ("Por favor ingresar un Nombre.");
        return;
    }
     // Valida los nombres de la lista
    if (listaDeAmigos.includes(nombreAmigo)){
        alert (`El nombre "${nombreAmigo}" Ya esta en la lista, Por favor ingrese otro nombre.`);
        return;
    }
    // Agrega los nombres de amigos a la lista y muestra la lista de amigos
   listaDeAmigos.push(entradaAmigo.value);
   ulListaDeAmigos.innerHTML += `<li>${entradaAmigo.value} </li>`;

   // Para Limpiar el campo input
   document.getElementById('amigo').value = "";
  
}

// Funcion actualizar lista

function actualizarLista(){
    const listaAmigos = document.getElementById ('listaAmigos');

    // Bucle, realiza el recorrido por toda la lista de amigos agregados

    for(let i=0; i <listaDeAmigos.length; i++);
    {
        const lis = document.createElement('lis');
        lis.textContent = listaDeAmigos[i];
        listaAmigos.appendChild(lis);
    }
   
}

// Funcion Sortear amigos

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert ("No Hay amigos disponibles para el sorteo. Agrega amigos a la lista");
        return;
    }

    // Genera Un numero aleatorio entre 0 y la cantidad de amigos de la lista agregados

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); 

    // Obtiene el numero Sorteado

    const amigoSorteados = listaDeAmigos [indiceAleatorio];

    // Muestra el resultado 

    const resultado = document.getElementById('resultado');
    
    
    resultado.innerHTML = `El Amigo sorteado es: <strong> ${amigoSorteados} </strong>`;
}

// Carlos Alfredo Hernandez !!!