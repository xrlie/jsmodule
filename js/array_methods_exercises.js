// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> [4]

// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

const highest_number = number => {
    let aux = 0
    number.forEach(element => {
        if (aux < element) {
            aux = element
        }
        return aux
    })
    return aux
}



// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

const number_to_string = num_array => {
    return string_num = num_array.map(current_value => current_value.toString())
}

// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]

const capitalize = rand_array => {
    return capital = rand_array.map(current_value => 
        typeof(current_value) === 'string' ? 
        current_value.charAt(0).toUpperCase() + current_value.slice(1).toLowerCase() 
        : 
        current_value)
}


// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]

const no_repeated_num = num_array => {
    return new_array = num_array.filter(element => {
        let count_aux = 0
        for (let i = 0; i < num_array.length; ++i) {
            if (element === num_array[i]) {
                ++count_aux
            }
        }
        if (count_aux < 2) {
            return element
        }
    })
}


// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]

// const repeated_num = num_array => {
//     let aux = 0
//     return new_array = num_array.filter(element => {
//         console.log(new_array.length)
//         let count_aux = 0
//         for (let i = 0; i < num_array.length; ++i) {
//             if (element === num_array[i]) {
//                 ++count_aux
//             }
//         }
//         if (count_aux > 1) {
//             ++aux
//             if (aux <2) {
//                 return element
//             }
//         }
//     })
// }

// // const repeated_num = num_array => {
// //     let new_array = [] 
// //     aux_array = num_array.filter(element => {
// //         let aux = 0
// //         let count_aux = 0
// //         for (let i = 0; i < num_array.length; ++i) {
// //             if (element === num_array[i]) {
// //                 ++count_aux
// //             }
// //         }
// //         if (count_aux > 1) {
// //             ++aux
// //             if (aux <2) {
// //                 return element
// //             }
// //         }
// //     })

// //     new_array = aux_array.filter((element, index) => {
// //         let count_aux = 0
// //         for (let i = 0; i < aux_array.length; ++i) {
// //             if (element === aux_array[i]) {
// //                 ++count_aux
// //             }
// //             if ()
// //         }
// //     })
// //     return new_array
// // }

// ejercicio 6 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const is_leap_year = years_array => {
    return leap_years = years_array.filter(year => {
        if(year % 4 === 0) {
            if(year % 100 === 0) {
                if (year % 400 === 0) {
                    return year
                }
            } else { return year}
        }
    })
}