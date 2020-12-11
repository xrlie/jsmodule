/* * * * * *
 *  Cicles *
 * * * * * */

// Exercise 1
// Imprimir la tabla del 8 en reversa
console.log('Tabla del 8')
for (let i = 10; i > 0; --i) {
    console.log(`8 x ${i} = ${8 * i}`)
}

// Exercise 2
// Imprimir los números pares entre 1 y 100

console.log('Números pares entre 1 y 100')
let multiplos_pares = 'Múltiplos de 2: '
let aux = 0
for (let j = 1; j < 101; ++j) {
    if (j % 2 === 0) {
        ++aux
        if(aux === 1) {
            multiplos_pares = multiplos_pares.concat(j.toString())
        } else {
            multiplos_pares = multiplos_pares.concat(', ' + j.toString())
        }
    }
}
console.log(multiplos_pares)

/*
// Exercise 2 con while y do while
let multiplos_pares2 = '2 Múltiplos de 2: '
let counter = 1
let aux2 = 0
while (counter <= 100) {
    if (counter % 2 === 0) {
        ++aux2
        if (aux2 === 1) {
            multiplos_pares2 = multiplos_pares2.concat(counter.toString())
        } else {
            multiplos_pares2 = multiplos_pares2.concat(', ' + counter.toString())
        }
    }
    ++counter
}
console.log(multiplos_pares2)

let multiplos_pares3 = '3 Múltiplos de 2: '
let counter2 = 1
let aux3 = 0
do {
    if (counter2 % 2 === 0) {
        ++aux3
        if (aux3 === 1) {
            multiplos_pares3 = multiplos_pares3.concat(counter2.toString())
        } else {
            multiplos_pares3 = multiplos_pares3.concat(', ' + counter2.toString())
        }
    }
    ++counter2
} while (counter2 <= 100)
console.log(multiplos_pares3)
*/
// Exercise 3
// Dado un string, invertir el orden e imprimir en consola

let reverse_string = 'solrac'
let wordaux = ''
for (let k = reverse_string.length; k >= 0; --k){
    wordaux = wordaux.concat(reverse_string.charAt(k))
}
console.log(wordaux)

// Exercise 3 con while y do while
/*
let reverse_string2 = 'amor'
let wordaux3 = ''
let counter3 = reverse_string2.length
while (counter3 >= 0) {
    wordaux3 = wordaux3.concat(reverse_string2.charAt(counter3))
    --counter3
}
console.log(wordaux3)

let reverse_string3 = 'amo a roma'
let wordaux4 = ''
let counter4 = reverse_string3.length
do {
    wordaux4 = wordaux4.concat(reverse_string3.charAt(counter4))
    --counter4
} while (counter4 >= 0)
console.log(wordaux4)
*/
// Exercise 4
// Verificar si una palabra es palíndromo

let palindromo = 'atar a la rata'
let word_without_space = ''
let aux_array = []
aux_array = palindromo.split(' ', palindromo.length)
for (let n = 0; n < aux_array.length; ++n) {
    word_without_space = word_without_space.concat(aux_array[n])
}
//console.log(word_without_space)
let wordaux2 = ''
for (let l = word_without_space.length; l >= 0; --l) {
    wordaux2 = wordaux2.concat(word_without_space.charAt(l))
}
//console.log(wordaux2)
let aux4 = 0
for (let m = 0; m < word_without_space.length; ++m) {
    if(word_without_space.charAt(m) === wordaux2.charAt(m)) {
        ++aux4
    }
}
//console.log(aux4)
if(aux4 === word_without_space.length) {
    console.log(`${palindromo} es un palíndromo`)
} else {
    console.log(`${palindromo} no es un palíndromo`)
}