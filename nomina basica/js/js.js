function limpiar() {
	document.getElementById("miformulario").reset();
}

function calcular(){
	var x = document.getElementById("nombre").value;
	var y = parseInt(document.getElementById("salario").value);
	var a = parseInt(document.getElementById("hed").value);
	var d = parseInt(document.getElementById("hen").value);
	var f = parseInt(document.getElementById("heddf").value);
	var h = parseInt(document.getElementById("hendf").value);
	var z = (y/30)/8 ;
	var b = ((z*0.25)+z);
	var c = y/2;
	var e = ((z*0.75)+z);
	var g = ((z*1)+z);
	var i = ((z*1.5)+z);
	var j = c + (a*b) + (d*e) + (f*g) + (i*h) + 53227 - 59546;
	var k = 53227;
	var l = 106454;
	var m = 29773;
	var n = 29773;
	document.getElementById("nombres").innerHTML = x;
	document.getElementById("basicom").innerHTML = y + " Pesos";
	document.getElementById("basicoq").innerHTML = c + " Pesos";
	document.getElementById("basicoq2").innerHTML = c + " Pesos";
	document.getElementById("ho").innerHTML = z + " Pesos";
	document.getElementById("hediurna").innerHTML = b + " Pesos";
	document.getElementById("henocturna").innerHTML = e + " Pesos";
	document.getElementById("hddf").innerHTML = g + " Pesos";
	document.getElementById("hndf").innerHTML = i + " Pesos";
	document.getElementById("stm").innerHTML = l + " Pesos";
	document.getElementById("stq").innerHTML = k + " Pesos";
	document.getElementById("ds").innerHTML = m + " Pesos";
	document.getElementById("dp").innerHTML = n + " Pesos";
	document.getElementById("hed2").innerHTML = a*b + " Pesos";
	document.getElementById("hen2").innerHTML = d*e + " Pesos";
	document.getElementById("hddf2").innerHTML = f*g + " Pesos";
	document.getElementById("hendf2").innerHTML = i*h + " Pesos";
	document.getElementById("np").innerHTML = j + " Pesos";
	document.getElementById("stq2").innerHTML = k + " Pesos";
}