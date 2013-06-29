// Storage // Almacenamiento

function registro(usuario){
	if(window.localStorage.getItem('id')==undefined){
		window.localStorage.setItem('usuario',usuario);
		window.localStorage.setItem('id',infodisp()['id']);
	}		
}
// Access DB
function accesoBD(){
	var bd = window.openDatabase('Hotel','1.0','Hotel',2000000);
	return bd;
}
function guardarReserva(th, ha, di, pe){	
	accesoDB().transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, ha, di, pe)');
    tx.executeSql('INSERT INTO reservas (th, ha, di, pe) VALUES ("'+th+'", "'+ha+'", "'+di+'", "'+pe+'")');
	}, function (err) {
		alert("Error processing SQL: "+err);
	}, function () {
		navigator.notification.alert("Esperando conexion con servidor...", null, "Guardado", "Aceptar");
	});
}
function guardarHistorial(th, ha, di, pe){	
	accesoDB().transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, th, ha, di, pe)');
    tx.executeSql('INSERT INTO historial (th, ha, di, pe) VALUES ("'+th+'", "'+ha+'", "'+di+'", "'+pe+'")');
	}, function (err) {
		alert("Error processing SQL: "+err);
	}, function () {
		navigator.notification.alert("Hecho", null, "Guardado", "Aceptar");
	});
}