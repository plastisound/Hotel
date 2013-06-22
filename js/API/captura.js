// Captura
function tomarFoto(){
	navigator.device.capture.captureImage(function(c){
		var cant = c.lenght;
		for(i=0; i < cant; i++)
			c[i].fullPath;
			$('#regFoto').attr('rel',foto);
			$('#mFoto').html('<img src="'+foto+'" width="100%" />').css("border","#000 solid 1px")
	}, function(err){
		navigator.notification.alert("Error: "+err.code, null, "Captura", "Aceptar");
		
	}, { limit:2});
}