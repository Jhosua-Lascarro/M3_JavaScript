// result.js

// Función principal que valida el usuario y la edad, y muestra mensajes personalizados
function result(
  user, // Nombre de usuario (string)
  age // Edad del usuario (number))
) {
  // Validar que el usuario no esté vacío y sea un string válido
  if (!user || typeof user !== "string" || user.trim() === "") {
    console.error("Error: El nombre de usuario no puede estar vacío.");
    return "Error User";
  }
  // Validar que la edad sea un número válido
  else if (isNaN(age)) {
    console.error(
      "Error: Debe ingresar un valor numérico válido para la edad."
    );
    return "Error Type";
  }
  // Validar que la edad esté en el rango permitido
  else if (age < 0 || age > 120) {
    console.error("Error: La edad debe estar entre 0 y 120 años.");
    return "Error Range";
  }
  // Si el usuario es menor de edad
  else if (age < 18) {
    alert(
      `Hola ${user}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    );
    return "Child";
  } else {
    // Si el usuario es mayor de edad
    alert(
      `Hola ${user}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    );
    return "Old";
  }
}

// Exportar la función para su uso en otros módulos
module.exports = result;
