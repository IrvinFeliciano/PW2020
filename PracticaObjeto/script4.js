let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3002/archivo.txt');

xhr.send();

xhr.onload = function(){
	if (xhr.status != 200){
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
	} else{
	  alert(`Listo, se recibieron ${xhr.response.length} bytes`);
	}
};

xhr.onprogress = function(event) {
	if(event.lengthComputable) {
     alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	} else{
	 alert(`Recibidos ${event.loaded} bytes`);	
	}
};

xhr.onerror = function() {
	alert("Fallo solicitud");
};