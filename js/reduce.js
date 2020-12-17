/* * * * * * * * * *
 *  Reduce method  *
 * * * * * * * * * */

// arr.reduce(callback(accumulator, current_value, [, index, [, array]]) ,[, initial_value])
// [1, 2, 3, 4]
// [1, 2, 3, 4]

const arr_reduce = [1, 2, 3, 4, 10, 20]
arr_reduce.reduce((accumulator, current_value) => {
    let sum = accumulator + current_value
    console.log(accumulator, current_value)
    return sum
}, 10)

arr_reduce.reduce((accumulator, current_value) => accumulator + current_value, 0)

// ['a', 'b', 'c', 'c', 'b']
// search_occurence(array, 'caracter')
// search_occurence(['a', 'b', 'c', 'c', 'b'], 'c')
// -> 2

//const arr_searched = ['a', 'b', 'c', 'c', 'b']

// const search = (arr_searched, find_char) => {
//     let aux = arr_searched.reduce((accumulator, current_value) => {
//         if (current_value === find_char) {
//             accumulator += 1
//         }
//         return accumulator
//     }, 0)
//     return aux
// }

const search = (arr_searched, find_char) => {
    let occurence = arr_searched.reduce((accumulator, current_value) => {
        return current_value === find_char ? accumulator + 1 : accumulator
    }, 0)
    return occurence
}

// construir un string desde un array
// ['en', 'algún', 'lugar', 'de', 'la', 'mancha']
// -> 'En algún lugar de la mancha'

const array_to_string = array_words => {
    let count_aux = array_words.length - 1
    let string_from_array = array_words.reduce((accumulator, current_value, index) => {
        return count_aux === index ? accumulator + current_value : accumulator + current_value + ' '
    }, '')
    return string_from_array
}