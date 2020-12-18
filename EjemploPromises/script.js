let myProm1 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("Ejemplo No. 1:"); }, 3000);
});

myProm1.then(function(value) {
  document.getElementById("Demo1").innerHTML = value;
});

let myProm2 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("Esto es una Promesas en JS."); }, 4000);
});

myProm2.then(function(value) {
  document.getElementById("Demo2").innerHTML = value;
});

let myProm3 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("Empleada en la Programación Web."); }, 5000);
});

myProm3.then(function(value) {
  document.getElementById("Demo3").innerHTML = value;
});