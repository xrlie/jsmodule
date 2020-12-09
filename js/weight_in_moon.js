// Ejercicio.
// Estar en la rama class/class-one
// Crear el archivo weight_in_moon.js
// 1. Pedir al usuario su peso en KG.
// 2. Arrojar en un alert cuál sería su peso en la luna

let weight_koder = prompt('¿Cuál es tu peso (en kgs)?')  // Se le pide su peso al usuario.
console.log("Tu peso en la tierra es de " + weight_koder + " kgs.") // Se imprime el peso en la Tierra en la consola.

const gravitational_force_earth = 9.81      // Variable constante de la fuerza gravitacional en la Tierra.
const gravitational_force_moon = 1.622      // Variable constante de la fuerza gravitacional de la Luna.

let weight_in_moon                          // Se inicializa la variable donde se guardará el peso del usuario en la Luna.

weight_in_moon = (weight_koder/gravitational_force_earth)*gravitational_force_moon  // Se hace la operación para calcular el peso del usuario en la Luna.
                                                                                    // Se guarda en la variable creada.


alert("Tu peso en la luna sería " + weight_in_moon.toFixed(2) + " kg.")     // Se manda un alerta para indicar el peso del usuario en la Luna.
console.log("Tu peso en la luna es de " + weight_in_moon + " kgs.")         // Se imprime en la consola el peso del usuario en la Luna.