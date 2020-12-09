// Ejercicio 1
// 1. Estar en la rama de la clase.
// 2. Crear el archivo is_largest.js
// 3. Pedir al usuario que ingrese 2 números.
// 4. Imprimir en consola el mayor

console.log('is largest')

const NUMBER_ONE = parseInt(prompt('Ingresa un número:'))
const NUMBER_TWO = parseInt(prompt('Ingresa un número:'))

if (NUMBER_ONE > NUMBER_TWO) {
    console.log(`El ${NUMBER_ONE} es el mayor`)
} else if (NUMBER_ONE === NUMBER_TWO) {
    console.log(`El ${NUMBER_ONE} es igual al ${NUMBER_TWO}`)
}
else {
    console.log(`El ${NUMBER_TWO} es el mayor`)
}