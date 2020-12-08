
console.log('Hola Koders')

// variables: var, let, const
var nombre_variable; // Esta forma no se va a utilizar mucho
let nombre_variable2 // Inicializa una variable vacía

let nombre_variable3 = 'Algo'
let numero = 1000
let boolean = false
let my_array = [1, '1', true] // Un array puede tener valores de diferente tipos
let my_object_koder = {
    nombre: 'Carlos'
}

// let, se utiliza para variables cuyo valor cambia
// const, se utiliza para variables cuyo valor NO cambia
const NAME_KODER = 'oscar'
let name_koder2 = 'oscar'

// Case Styles
// camelCase
// PascalCase
// snake_case

let name_koder = prompt('¿Cuál es tu nombre?') // la función promt, muestra una ventana emergente que pide datos.
console.log(name_koder) // Imprime en la consola el nombre que se guardó en la variable name_koder

let age_koder = prompt('¿Cuál es tu edad?')
console.log(age_koder)

/* Operadores Básicos */
// / división
// * multiplicación
// + suma
// - resta
// % residuo

let result_suma = parseInt(age_koder) + 5
let result_resta = parseInt(age_koder) - 5
let result_multi = parseInt(age_koder) * 5
let result_div = parseFloat(age_koder) / 5

console.log('suma: ', result_suma)
console.log('resta: ', result_resta)
console.log('multiplicación: ', result_multi)
console.log('división: ', result_div)

