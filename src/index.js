// Archivo: result.js
function result(user, age) {
  // Verificar si la edad es un número
  if (isNaN(age)) {
    console.error("Error: Debe ingresar un valor numérico válido.");
    return "Error Type";

    // Verifica si la edad está en el rango esperado
  } else if (age < 0 || age > 120) {
    console.error("Error: La edad debe estar entre 0 y 120 años.");
    return "Error Range";

    // Verifica si es menor de edad
  } else if (age < 18) {
    alert(
      `Hola ${user}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    );
    return "Child";

    // Verifica si es mayor de edad
  } else {
    alert(
      `Hola ${user}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    );
    return "Old";
  }
}

module.exports = result;