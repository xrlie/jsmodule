
// Arreglo de koders a utilizar
const koders_arr = ['Carlos',
                     'Alex',
                     'Brian',
                     'André',
                     'Nayeli',
                     'Ale',
                     'Oscar',
                     'Ruben',
                     'Omar',
                     'Ramón',
                     'Ronaldo',
                     'Oswaldo',
                     'Obama',
                     'Ofelia',
                     'Renata',
                     'Regina'
                    ]


// Función para agregar elementos al DOM
const add_elements = (selector, number_elements, arr_names) => {
    ul_elements = ''
    arr_names.length === 0 ? ul_elements = '<li>Su búsqueda no obtuvo ningún resultado</li>' : 
    arr_names.forEach((element, index) => {
        if(index + 1 <= number_elements) {
            ul_elements += `<li>Koder ${index + 1}: ${element}</li>`
        }
    })
    document.getElementById(selector).innerHTML = ul_elements
}

// Función para agregar elementos al filtrado por letras
const add_filter_elements = (selector, number_elements, arr_names) => {
    let filter_elements = '<option value="">Seleccionar</option>'
    aux_array = [...arr_names]
    aux_array.sort()
    aux_array2 = []
    let aux_array3 = []
    aux_array.forEach((element, index) => {
        if (index + 1 <= number_elements) {
            aux_array2.push(element.charAt(0).toLowerCase())
        }
    })
    aux_array3 = aux_array2.filter((element, index, arr) =>  {
        if( arr.indexOf(element) === index ) {
            return element
        }
    })
    aux_array3.forEach((element,index) => {
        if(index + 1 <= number_elements) {
            filter_elements += `<option value="${element.charAt(0).toLowerCase()}">${element.charAt(0).toLowerCase()}</option> `
        }

    })
    document.getElementById(selector).innerHTML = filter_elements
}

let variable_aux = []
// Función para filtrar el arreglo de koders
const filter_koders = letter => {
    let filtered = koders_arr.filter(koder => {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    add_elements('lista', filtered.length, filtered)
    variable_aux = [...filtered]
}

// Función para ordenar ascendente o descendentemente
const ordering_koders = (option, alpha) => {
    if (alpha === '') {
        let aux_array = [...koders_arr]
        if (option === 'a') {
            aux_array.sort()
            add_elements('lista', aux_array.length, aux_array)
        } else if(option === 'd') {
            aux_array.sort().reverse()
            add_elements('lista', aux_array.length, aux_array)
        } else {
            add_elements('lista', koders_arr.length, koders_arr)
        }
    } else {
        let aux_array = [...variable_aux]
        if (option === 'a') {
            aux_array.sort()
            add_elements('lista', aux_array.length, aux_array)
        } else if(option === 'd') {
            aux_array.sort().reverse()
            add_elements('lista', aux_array.length, aux_array)
        } else {
            add_elements('lista', variable_aux.length, variable_aux)
        }
    } 
}

