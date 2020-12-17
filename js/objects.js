/* * * * * * *
 *  Objects  *
 * * * * * * */

// let obj = {
//     key: value,
//     key: value,
//     key: value
// }

// let person = {
//     nombre: 'nayeli',
//     is_koder: true,
//     age: 20,
//     location = {
//         street: 'lorem',
//         cp: '55778'
//     },
//     pets: ['puppy', 'scooby']
// }

// console.log(person['age'])
// console.log(person.age)
// console.log(person['location']['cp'])
// console.log(person.pets[1])

// let person2 = new Object()

let person = {
    name: 'Nayeli',
    location: {
        cp: '55778',
        street: 'asadaas'
    },
    credential: {
        key1: '55778',
        key2: 'asadaas'
    }
}

let person2 = {
    location: {
        cp: '55778',
        street: 'asadaas'
    }
}

// Instrucción para crear una nueva propiedad dentro de un objeto
// person.newvalue = 'nuevo' 

// Instrucción para eliminar una propiedad dentro de un objeto
// delete person.credential.key2

// console.log(`
//     Mi nombre es ${person.name} 
//     y vivo en la calle ${person.location.street} 
//     con el CP: ${person.location.cp}
// `)

// for(item in person) {
//     console.log(person[item])
// }

// imprimir cada uno de los valores de la propiedad location

for(item in person) {
    if (item === 'location' || item === 'credential') {
        for(item2 in person[item]) {
            console.log(`${item}: ${person[item][item2]}`)
        }
    }
}

let persons = [
    {
        name: 'Charlie',
        average: 10,
        credential: {
            key1: '1234',
            key2: '4321'
        }
    },
    {
        name: 'Nayeli',
        average: 7,
        location: {
            cp: '97139',
            street: 'asaddas'
        },
        credential: {
            key1: '1234',
            key2: '4321'
        }
    }
]

persons.forEach((current, index) => {
    console.log(current.average)
})

let sum = persons.reduce((accumulator, current_value) => {
    return accumulator + current_value.average
}, 0)
console.log(sum / persons.length)

let filter = persons.filter(current_value => {
    return current_value.average > 9
})
console.log(filter)

let filter2 = persons.filter(current_value => {
    if(current_value.location) {
        return current_value
    }
})
console.log(filter2)