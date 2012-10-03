function permite(elEvento, permitidos) {
	// Variables que definen los caracteres permitidos
	var numeros = "0123456789";
	var caracteres = " abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ";
	var numeros_caracteres = numeros + caracteres;
	// 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
	var teclas_especiales = [8, 37, 39, 46];
	
	// Seleccionar los caracteres a partir del par�metro de la funci�n
	switch(permitidos) {
		case 'num':
		permitidos = numeros;
		break;
		case 'car':
		permitidos = caracteres;
		break;
		case 'num_car':
		permitidos = numeros_caracteres;
		break;
	}
	
	// Obtener la tecla pulsada
	var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
	var caracter = String.fromCharCode(codigoCaracter);
	
	// Comprobar si la tecla pulsada es alguna de las teclas especiales
	// (teclas de borrado y flechas horizontales)
	var tecla_especial = false;
	for(var i in teclas_especiales) {
		if(codigoCaracter == teclas_especiales[i]) {
			tecla_especial = true;
			break;
		}
	}
	
	// Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
	// o si es una tecla especial
	return permitidos.indexOf(caracter) != -1 || tecla_especial;
}
	/*
	S�lo n�meros
	<input type="text" id="texto" onkeypress="return permite(event, 'num')" />
	
	S�lo letras
	<input type="text" id="texto" onkeypress="return permite(event, 'car')" />
	
	S�lo letras o n�meros
	<input type="text" id="texto" onkeypress="return permite(event, 'num_car')" />
	*/
	
function comprobarPass(){

    var contra = document.getElementById("contra").value;
    var contra1 = document.getElementById("contra1").value;

    if (contra == contra1)
       //Las contrase�as son iguales
	    alert ("jaja si es icual");
		return true;
    else
       alert ("no idem");
	   return true;
} 