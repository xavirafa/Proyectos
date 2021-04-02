function limpiar() {
	document.getElementById("miformulario").reset();
}

function calcular(){
	var a = parseInt(document.getElementById("p").value);
	var b = parseInt(document.getElementById("v").value);
	var c = a/b;
	document.getElementById("resultado").value = c.toFixed(3);
}
 