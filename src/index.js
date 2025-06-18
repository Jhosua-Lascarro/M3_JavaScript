// // index.js

// let nameUser = prompt("Ingrese su nombre: ").trim();
// let ageUser = parseInt(prompt("Ingrese su edad: "));

// // Conversion a minusculas y
// nameUser = capitalizar(nameUser);
// ageUser = parseInt(ageUser);

// // capitalize
// function capitalizar(str) {
//   if (typeof str !== "string" || str.length === 0) {
//     return str;
//   }
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // Solicite al usuario su nombre y su edad
// function resultAlert(user, age) {
//   // Verificar si la edad es un número
//   if (isNaN(user)) {
//     console.error("Error: Debe ingresar un valor numérico válido.");

//     // Verifica si la edad esta en el rango esperado
//   } else if (age < 0 || age > 120) {
//     console.error("Error: La edad debe estar entre 0 y 120 años.");

//     // Verifica su es menor de edad
//   } else if (age < 18) {
//     alert(
//       `Hola ${user}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
//     );

//     // Verifica su es mayor de edad
//   } else {
//     alert(
//       `Hola ${user}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
//     );
//   }
// }

// resultAlert(nameUser, ageUser);

// prompt.js
function createPrompt(input) {
  return `Escribe un texto sobre: ${input}`;
}
module.exports = { createPrompt };
