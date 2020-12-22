// ejercicio
const add_elements = (selector, number_elements, arr_names) => {
    ul_elements = ''
    arr_names.forEach((element, index) => {
        if(index + 1 <= number_elements) {
            ul_elements += `<li>Koder ${index + 1}: ${element}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = ul_elements
}
const koders_arr = ['ale','oscar','ruben','brian']
//add_elements('#lista', 4, koders_arr)

// Ejercicio,
// crear una función que dado un caracter filtre un arreglo

// mi solución
const show_elements = (selector, number_elements, arr_names, special) => {
    ul_elements = ''
    arr_names.forEach((element, index) => {
        if (index + 1 < number_elements)
        switch(special) {
            case 'Todos':
                ul_elements += `<li>Koder ${index + 1}: ${element}</li>`
                break
            case 'A':
                if(element.startsWith('a')) {
                    ul_elements += `<li>Koder ${index + 1}: ${element}</li>`
                }
                break
            case 'O':
                if(element.startsWith('o')) {
                    ul_elements += `<li>Koder ${index + 1}: ${element}</li>`
                }                break
            case 'R':
                if(element.startsWith('r')) {
                    ul_elements += `<li>Koder ${index + 1}: ${element}</li>`
                }                break
            default:
                alert('Hubo un error')
                break
        }
    })
    document.querySelector(''+selector).innerHTML = ul_elements
}

// mejor solución
const filter_koders = letter => {
    let filtered = koders_arr3.filter(koder => {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    add_elements('#lista', filtered.length, filtered)
}

// tarea
const koders_arr2 = ['ale','oscar','ruben','brian']

// onchange()
// document.getElementById('orden').value
// 1 función
// 1 método
// usar innerHTML