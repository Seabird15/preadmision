document.getElementById("button").addEventListener("click", function () {
    document.getElementById("resultado").innerHTML = "Incorrecto";
  });
  
  document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("resultado").innerHTML = "Incorrecto";
  });
  
  document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("resultado").innerHTML = "Correcto!!";
  });
  
  //respuestas pregunta 2
  
  document.getElementById("respuesta").addEventListener("click", function () {
    document.getElementById("demo2").innerHTML = "Correcto!!";
  });
  
  document.getElementById("respuesta2").addEventListener("click", function () {
    document.getElementById("demo2").innerHTML = "Incorrecto";
  });
  
  document.getElementById("respuesta3").addEventListener("click", function () {
    document.getElementById("demo2").innerHTML = "Incorrecto";
  });
  document.getElementById("final").addEventListener("click", function () {
    alert("!Muchas gracias por participar!");
  });