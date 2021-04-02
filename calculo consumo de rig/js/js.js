function limpiar() {
	document.getElementById("miformulario").reset();
}

function calcular(){
	var a = parseInt(document.getElementById("watts").value);
	var b = parseInt(document.getElementById("horas").value);
	var c = parseInt(document.getElementById("precio").value);
	document.getElementById("resultado").value = (a*(b*30)*550) / ((1000));
}
