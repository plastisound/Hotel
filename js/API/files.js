// files
function subirFoto(foto,nom){
	var options = new FileUploadOptions();
	options.fileKey="archivo";
	options.fileName="GerardoC";
	options.mimeType="text/plain";
	var ft = new FileTransfer();
	ft.upload(foto, "http://www.igitsoft.com/pgtest.php",function(r){
		navigator.notification.confirm("Los datos han sido registrados satisfactoriamente", function(btn){
				switch(btn){
					case 1:
						navigator.notification.vibrate(5000);
						break;
					case 2:
						navigator.notification.bepp(3);
						break;
					case 3:
						navigator.notification.alert(infoDisp()['modelo'],null,"Info","Si");
				}
				registro(nom);
				window.location.href="#page";
			}, "Registro",/*Tres Botones*/"Vibrar,Sonar,Info,Cancelar");
		},function(err){
			navigator.notification.alert("Error al subir el archivo: "+err.code, null, "Registro","Aceptar");
		}, options);
}