// Server 
function enviarDatos(nom, tel, email, foto){
	$.ajax({
  		type: "POST",
  		url: "http://igitsoft.com/pgtest.php",
  		data: "nom="+nom+"&tel="+tel+"&mai="+email
	}).done(function( msg ) {
  		if(msg=1){
			//upload image
			subirFoto(foto);
		}else{
			navigator.notification.alert("Error al Registrar", null, "Registro", "Aceptar");
		}
	});
}