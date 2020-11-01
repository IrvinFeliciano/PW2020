let pag1 = document.getElementById('pag1');
let pag2 = document.getElementById('pag2');
let pag3 = document.getElementById('pag3');
let pag4 = document.getElementById('pag4');
let pag5 = document.getElementById('pag5');

let i0 =document.getElementById('i0');
let i1 =document.getElementById('i1');
let i2 =document.getElementById('i2');
let i3 =document.getElementById('i3');
let i4 =document.getElementById('i4');
let i5 =document.getElementById('i5');
let i6 =document.getElementById('i6');
let i7 =document.getElementById('i7');
let i8 =document.getElementById('i8');

let p1 =document.getElementById('p1');
let p2 =document.getElementById('p2');
let p3 =document.getElementById('p3');
let p4 =document.getElementById('p4');
let p5 =document.getElementById('p5');
let p6 =document.getElementById('p6');
let p7 =document.getElementById('p7');
let p8 =document.getElementById('p8');
let p9 =document.getElementById('p9');

let asid = document.getElementById('asid');
let foot = document.getElementById('foot');



 pag1.style.display = 'none';
 pag2.style.display = 'none';
 pag3.style.display = 'none';
 pag4.style.display = 'none';
 pag5.style.display = 'none';
 
 i1.style.display = 'none';
 i2.style.display = 'none';
 i3.style.display = 'none';
 i4.style.display = 'none';
 i5.style.display = 'none';
 i6.style.display = 'none';
 i7.style.display = 'none';


function cambia(){		
p1.style.backgroundColor = 'none';
p2.style.backgroundColor = 'none';
i1.style.display = 'block';
asid.style.display = 'none';
foot.style.display = 'none';
}

function cambia2(){		
p3.style.backgroundColor = 'none';
i2.style.display = 'block';
p4.style.backgroundColor = 'none';
i3.style.display = 'block';
}

function cambia3(){		
p5.style.backgroundColor = 'none';
i4.style.display = 'block';
p6.style.backgroundColor = 'none';
i5.style.display = 'block';
}

function cambia4(){		
p7.style.backgroundColor = 'none';
p8.style.backgroundColor = 'none';
i6.style.display = 'block';
}

function cambia5(){		
p9.style.backgroundColor = 'none';
i7.style.display = 'block';
}



p1.addEventListener('mouseover', cambia);
p3.addEventListener('mouseover', cambia2);
p5.addEventListener('mouseover', cambia3);
p7.addEventListener('mouseover', cambia4);
p9.addEventListener('mouseover', cambia5);


function primera(){
	pag1.style.display = 'block';
	i0.style.display = 'none';
}

i0.addEventListener('mouseup', primera);

function segunda(){
	pag2.style.display = 'block';
	pag1.style.display = 'none';

}

i1.addEventListener('mouseup', segunda);

function tercera(){
	pag3.style.display = 'block';
	pag2.style.display = 'none';	
}

i3.addEventListener('mouseup', tercera);

function cuarta(){
	pag4.style.display = 'block';
	pag3.style.display = 'none';	
}

i5.addEventListener('mouseup', cuarta);

function quinta(){
	pag5.style.display = 'block';
	pag4.style.display = 'none';	
}

i6.addEventListener('mouseup', quinta);

function sexta(){
	i0.style.display = 'block';
	pag5.style.display = 'none';
	p1.style.backgroundColor = '';
	p2.style.backgroundColor = '';
	p3.style.backgroundColor = '';
	p4.style.backgroundColor = '';
	p5.style.backgroundColor = '';
	p6.style.backgroundColor = '';
	p7.style.backgroundColor = '';
	p8.style.backgroundColor = '';
	p9.style.backgroundColor = '';	
	i1.style.display = 'none';
	i2.style.display = 'none';
	i3.style.display = 'none';
	i4.style.display = 'none';
	i5.style.display = 'none';
	asid.style.display = 'block';
	foot.style.display = 'block';
}

i7.addEventListener('mouseup', sexta);