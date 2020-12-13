



// Ejercicio 1
// Escribir una función que a partir del string
// -> "987"
// Imprima las tablas de multiplicar en ese orden
// tabla del 9
// tabla del 8
// tabla del 7

function any_number_table (number) {
    for (let i = 1; i < 11; ++i) {
        console.log(`Tabla del ${number}`)
        console.log(`${number} x ${i} = ${i * number}`)
    }
}

function table_from_string (number_string) {
    let array_numbers = []
    for (let j = 0; j < number_string.length; ++j) {
        any_number_table(number_string.charAt(j))
    }

}


// Ejercicio 2
// Escribir una función que dado un string como parámetro
// -> "anita lava la tina"
// verifique si es o no un palíndromo


function is_palindrome (text) {
    let word_without_space = ''
    let aux_array = []
    aux_array = text.split(' ', text.length)
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
        if(word_without_space.charAt(m).toLowerCase === wordaux2.charAt(m).toLowerCase) {
            ++aux4
        }
    }
    //console.log(aux4)
    aux4 === word_without_space.length ?
        console.log(`${text} es un palíndromo`)
        :
        console.log(`${text} no es un palíndromo`)
 }

 // Ejercicio 3
 // Escribir una función que dados 2 parámetros
 // me imprima en consola los tipos de datos que son
 // getDataType (1, "2")
 // -> number, string
 // typeof

 function get_data_type (random1, random2) {
     console.log(`Tus datos son ${typeof(random1)} y ${typeof(random2)}`)
 }