async function buscarPerros(){

const raza = document.getElementById("breedInput").value.toLowerCase();
const resultados = document.getElementById("resultados");
const mensaje = document.getElementById("mensaje");

resultados.innerHTML="";
mensaje.innerHTML="Espere un momento, se están cargando las imágenes...";

try{

const lista = document.getElementById("breedList");
const respuesta = await fetch(`https://dog.ceo/api/breed/${raza}/images`);

const data = await respuesta.json();

if(data.status !== "success"){
mensaje.innerHTML=" La raza no fue encontrada.";
return;
}

mensaje.innerHTML=`Mostrando imágenes de: ${raza}`;

const imagenes = data.message.slice(0,10);

imagenes.forEach((img,index)=>{

const card = document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${img}" alt="perro">

<div class="card-body">
<h3>${raza}</h3>
<p>Imagen #${index+1}</p>
</div>
`;

resultados.appendChild(card);

});

}catch(error){

console.error("Error en buscarPerros:", error);
mensaje.innerHTML="Error al consultar la API. Intenta más tarde.";

}

}