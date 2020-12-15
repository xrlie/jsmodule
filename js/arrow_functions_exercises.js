const my_array = [1, 4, 7]

for (let i = 0; i < my_array.length; ++i) {
    console.log(`Tabla del ${my_array[i]}`)
    for (let j = 1; j <= 10; ++j) {
        console.log(`${my_array[i]} x ${j} = ${my_array[i] * j}`)
    }
}

// Imprimir en consola el resultado de la suma
// de todos los elementos de un array
// [1, 2, 3, 4]
// -> 10

const array_sum_number = [1, 2, 3, 4]
let total_array = 0
for (let count = 0; count < array_sum_number.length; ++count) {
    total_array += array_sum_number[count]
}
console.log(total_array)