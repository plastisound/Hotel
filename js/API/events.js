// Eventos
$(document).ready(function (e) {
	/*alert("s");*/
	/*$('#regFot').hide();*/
	document.addEventListener("deviceready",function(){
		if(!isLogin())
			window.location.href = '#login';
		$('#regSend').tap(function(){
			if($('#regNom').val() !=='' && $('#regTel').val() !=='' && $('#regMail').val() !==''){
				var nom = $('#regNom').val();
				var tel = $('#regTel').val();
				var mail = $('#regMail').val();
				navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel", "Aceptar" );
			}else{
				navigator.notification.alert('Todos los campos son requeridos', null, "Hotel", "Aceptar");
			}
		});
	}, false);
});
function isLogin(){
	return false;
}