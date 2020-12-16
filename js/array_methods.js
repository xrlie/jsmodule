/* * * * * * * * * * * * * *
 *  Métodos de un arreglo  *
 * * * * * * * * * * * * * */

/* * * * * * * * * * * * * *
 *         forEach         *
 * * * * * * * * * * * * * */ 

const array_cities = ['cdmx', 'monterrey', 'guadalajara']
//let string = 'algo'
//  array_cities.forEach(function(current_element,index) { 
//     // console.log(current_element)
//     if (current_element.startsWith('c') || current_element.startsWith('C')){
//         console.log(current_element)
//     }
//  })

array_cities.forEach(current_element => {
    if (current_element.startsWith('c') || current_element.startsWith('C')) {
        console.log(current_element)
    }
})

// Tablas de multiplicar

let array_numbers = [1, 2, 3, 4]
array_numbers.forEach(number => {
    console.log(`Tabla del ${number}`)
    for (let i = 1; i <= 10; ++i) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
})

// Function
// [1, 2, 3]
// -> [2, 4, 6]

const array_to_double = numbers => {
    let new_array = []
    numbers.forEach(element => {
        new_array.push(element * 2)
    })
    return new_array
}

// Function
// [1, 2, 3, 4]
// -> [2, 4]

const array_even_numbers = numbers => {
    let even_numbers = []
    numbers.forEach(element => {
        if (element % 2 === 0) {
            even_numbers.push(element)
        }
    })
    return even_numbers
}

// Function
// ['hola', 'mundo']
// -> ['ha', 'mo']

const array_first_and_last_letter = words => {
    let first_and_last = []
    words.forEach(word => {
        first_and_last.push(word.charAt(0).concat(word.charAt(word.length - 1)))
    })
    return first_and_last
}

/* * * * * * * * * * * * * *
 *           map           *
 * * * * * * * * * * * * * */
let variable_aux = [1,2,3]
const result = variable_aux.map(current_value => current_value * 2)