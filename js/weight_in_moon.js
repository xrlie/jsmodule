let weight_koder = prompt('¿Cuál es tu peso (en kgs)?') 
console.log(weight_koder)

const gravity = 9.81
const gravitational_force = 1.622

let weight_in_moon

weight_in_moon = (weight_koder/gravity)*gravitational_force


alert("Tu peso en la luna sería " + weight_in_moon.toFixed(2) + " kg.")