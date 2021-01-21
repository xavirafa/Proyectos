var edad1 = document.getElementById("edad");
var boton_a = document.getElementById("boton");
var año1 = document.getElementById("año"); 
var año3 = document.getElementById("año2"); 
boton_a.addEventListener("click", prueba);

function prueba()
{
	var p = parseInt(año3.value);
	var x = parseInt(edad1.value);
	var y = parseInt(año1.value);
	var z = p + x - y;
	alert("Tu edad en el año " + p + " sera de " + z + " años.");
}