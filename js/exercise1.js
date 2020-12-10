// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"

const GRADE = parseInt(prompt('Ingresa la calificación de tu examen (de 0 a 100)'))

if (GRADE >= 90) {
    console.log('A')
} else if (GRADE < 90 && GRADE >= 80) {
    console.log('B')
} else if (GRADE < 80 && GRADE >= 70) {
    console.log('C')
} else if (GRADE < 70 && GRADE >= 60) {
    console.log('D')
} else if (GRADE < 60 && GRADE >= 50) {
    console.log('E')
} else if (GRADE < 50 && GRADE >= 0) {
    console.log('F')
} else {
    console.log('Ingresa un número válido')
}