console.log('Homework')

// Exercise 1
// Imprimir en consola la tabla del 7
// 7 x 1 = 7

for (let i = 1; i < 11; ++i) {
    console.log(`7 x 1 = ${i * 7}`)
}

// Exercise 2
// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....

let multiplos = 'múltiplos de 3 o 7: '
let aux1 = 0
let wordaux = ''
for (let j = 1; j < 100; ++j) {
    if (j % 3 === 0 || j % 7 === 0) {
        ++aux1
        if (aux1 === 1) {
           wordaux = multiplos.concat(j.toString())
        } else {
           wordaux = wordaux.concat(', ' + j.toString())
        }
    }
}
console.log(wordaux)


// Exercise 3
// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5

const SPACE_IN_STRING = 'En un dos por tres de la mancha'
let counting_spaces = SPACE_IN_STRING.split(' ',SPACE_IN_STRING.length)
console.log(counting_spaces.length - 1)

// Exercise 4
// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4

const COUNTING_VOCALS = 'Mi nombre es carlos'
let aux = 0
for (let k = 0; k < COUNTING_VOCALS.length; ++k) {
    switch (COUNTING_VOCALS.charAt(k)) {
        case('a'):
        case('e'):
        case('i'):
        case('o'):
        case('u'):
            ++aux;
            break
        default:
            break;    
    }
}
console.log(`${COUNTING_VOCALS} -> ${aux}`)