function regCompleted(){

	var bandera=0;
	
	//Validaremos la lista multiple, cuando no se ha seleccionado nada
	//el valor es de -1 y el primer elemento de las lista es el 0
	if(document.getElementById("lista").selectedIndex != -1){
		document.getElementById("error_lista").style.visibility="hidden";
	}else{
		document.getElementById("error_lista").style.visibility="visible";
		bandera++;
	}
	
	var loquehay=document.compRegistro.nombre.value;
	alert(loquehay);
	
	/*//Validaremos el nombre
	if(/\w{4,20}/.test(document.compRegistro.nombre.value)){
		document.getElementById("error_nombre").style.visibility="hidden";
	}else{
		document.getElementById("error_nombre").style.visibility="visible";
		bandera++;
	}
	
	//Validaremos la direccion
	if(document.getElementById("direccion").value == null){
		document.getElementById("error_nombre").style.visibility="hidden";
	}else{
		document.getElementById("error_nombre").style.visibility="visible";
		bandera++;
	}
	*/
}

function validaForm(){

	var bandera=0;
	
	//Valida el nick en tamaño y contenido
	if(/\w{4,20}/.test(document.registro.nick.value)){
		document.getElementById("error_nick").style.visibility="hidden";
	}else{
		document.getElementById("error_nick").style.visibility="visible";
		bandera++;
	}
	
	
	//Valida el correo
	if(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w/.test(document.registro.mail.value)){
		document.getElementById("error_mail").style.visibility="hidden";
	}else{
		document.getElementById("error_mail").style.visibility="visible";
		bandera++;
	}

	//Valida la contraseña
	if(document.registro.pass.value == document.registro.pass2.value){
		document.getElementById("error_pass2").style.visibility="hidden";
	}else{
		document.getElementById("error_pass2").style.visibility="visible";
		bandera++;
	}

	// solo se envia si se cumplen las condiciones
	if(bandera==0){
		//Para validar en Html5
		document.registro.enviar.click();
	}
}

/* Para los radio
!document.registro.radio1.checked && !document.registro.radio2.checked
Para las listas
document.registro.lista.selectedIndex==0
document.registro.idDelElemento.value
*/