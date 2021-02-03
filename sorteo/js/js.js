var personas = [
				"Roger Gomez",
				"Javier Perez",
				"Diana Peralta"
				];

var mi_ramdom = Math.floor(Math.random()*personas.length);

var ganador = personas[mi_ramdom];

function aleatorio(){
	document.getElementById("ejemplo").innerHTML = (ganador);
}