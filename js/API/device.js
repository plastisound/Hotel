// Dispositivos // Device
	//Array // Declaración de Arreglo
	/*var arr = new Array();*/ // Forma técnica
	function infoDisp(){
	var arr = [];
	arr['nombre']=device.model;
	arr['phonegap']=device.cordova;
	arr['plataforma']=device.platform;
	arr['id']=device.uuid;
	arr['version']=device.version;

	return arr;
}