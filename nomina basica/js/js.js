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
	var o = parseInt(document.getElementById("heotq").value);
	var q = parseInt(document.getElementById("dtq").value);
	var z = (y/30)/8 ;
	var b = ((z*0.25)+z);
	var c = y/2;
	var e = ((z*0.75)+z);
	var g = ((z*1)+z);
	var i = ((z*1.5)+z);
	var l = 106454;
	var r = (q * (l/30));
	var j = c + r + (a*b) + (d*e) + (f*g) + (i*h) - 59546;
	var k = 53227;
	var m = 29773;
	var n = 29773;
	var p = (o*y)/192;
	document.getElementById("tq").value = r + " Pesos";
	document.getElementById("nombres").value = x;
	document.getElementById("basicom").value = y + " Pesos";
	document.getElementById("basicoq").value = c + " Pesos";
	document.getElementById("basicoq2").value = p + " Pesos por " + o + " Horas Trabajadas";
	document.getElementById("ho").value = z + " Pesos";
	document.getElementById("hediurna").value = b + " Pesos";
	document.getElementById("henocturna").value = e + " Pesos";
	document.getElementById("hddf").value = g + " Pesos";
	document.getElementById("hndf").value = i + " Pesos";
	document.getElementById("stm").value = l + " Pesos";
	document.getElementById("stq").value = k + " Pesos";
	document.getElementById("ds").value = m + " Pesos";
	document.getElementById("dp").value = n + " Pesos";
	document.getElementById("hed2").value = a*b + " Pesos";
	document.getElementById("hen2").value = d*e + " Pesos";
	document.getElementById("hddf2").value = f*g + " Pesos";
	document.getElementById("hendf2").value = i*h + " Pesos";
	document.getElementById("np").value = j + " Pesos";
	document.getElementById("std").value = l/30 + " Pesos";
}