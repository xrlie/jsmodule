// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo

const NUMBER = parseInt(prompt('Ingresa un número entre 1 y 100'))

if (NUMBER % 11 === 0 && NUMBER % 2 === 0) {
    console.log(`El número ${NUMBER} es divisible entre 11 y 2`)
} else {
    console.log(`El número ${NUMBER} no es divisible entre 11 y 2`)
}
