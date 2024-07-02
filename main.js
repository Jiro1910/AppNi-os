let num1, num2, operador;

function generarProblema() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  operador = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  document.getElementById(
    "problema"
  ).innerText = `¿Cuánto es ${num1} ${operador} ${num2}?`;
}

function verificarRespuesta() {
  const respuestaUsuario = parseFloat(
    document.getElementById("respuesta").value
  );
  let resultadoCorrecto;
  switch (operador) {
    case "+":
      resultadoCorrecto = num1 + num2;
      break;
    case "-":
      resultadoCorrecto = num1 - num2;
      break;
    case "*":
      resultadoCorrecto = num1 * num2;
      break;
    case "/":
      resultadoCorrecto = num1 / num2;
      break;
  }
  if (respuestaUsuario === resultadoCorrecto) {
    document.getElementById("resultado").innerText =
      "¡Correcto! Buen trabajo.";
      //cambia el color del texto que aparece en caso correcto
      document.getElementById("resultado").style.color = "green";
  } else {
    document.getElementById("resultado").innerText =
      "😥Incorrecto, intenta de nuevo.";
      //cambia el color del texto que aparece en caso error
      document.getElementById("resultado").style.color = "red";
      

  }
  generarProblema();
}

// Iniciar la aplicación generando el primer problema
generarProblema();
