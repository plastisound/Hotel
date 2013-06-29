// Eventos
$(document).ready(function (e) {
	/*alert("s");*/
	/*$('#regFot').hide();*/
	document.addEventListener("deviceready",function(){
		if(!isLogin())
			window.location.href = '#login';
		$('#regSend').tap(function(){
			if($('#regNom').val() !=='' && $('#regTel').val() !=='' && $('#regMail').val() !=='' && $('#regFoto').attr('rel')!=undefined){
				var nom = $('#regNom').val();
				var tel = $('#regTel').val();
				var mail = $('#regMail').val();
				var foto = $('#regFoto').attr('rel');
				enviarDatos(nom, tel, mail, foto)
				/*navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel", "Aceptar" );*/
				
			}else{
				navigator.notification.alert('Todos los campos son requeridos', null, "Hotel", "OK");
			}
		});
		$('#regFoto').tap(function(){
			tomarFoto();
		});
	}, false);
});
function isLogin(){
	if(window.localStorage.getItem('id')!=undefined)
		return true;
	else
		return false;
}