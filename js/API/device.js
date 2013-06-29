// Dispositivos // Device

function infoDisp(){
	//Array // Declaración de Arreglo
	/*var arr = new Array();*/ // Forma técnica
	var arr = [];
	arr['nombre'] = device.model;
	arr['phonegap'] = device.cordova;
	arr['plataforma'] = device.platform;
	arr['id'] = device.uuid;
	arr['version'] = device.version;
	arr['modelo'] = device.model;
	
	return arr;
}