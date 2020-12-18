// Ejercicio 1
// dado el siguiente array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }
// let new_users = {}
// let fullname = 
// for(item in users) {
//     console.log(`${users[item].firstName} ${users[item].lastName}: ${users[item].role}`)
// }
// console.log(`${users[0].firstName} ${users[0].lastName}: ${users[0].role}`)

const add_users = users.reduce(((accumulator, user) => {
    let fullname = `${user.firstName} ${user.lastName}`
    accumulator[fullname] = user.role
    return accumulator
}), {})

// const new_Object = {

// }

// Ejercicio 2
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role

const is_role = (array_users, role) => {
    let new_users_array = []
    for(item in array_users) {
        for(item2 in array_users[item]) {
            if(array_users[item][item2] === role)
            new_users_array.push(array_users[item])
        }
    }
    return new_users_array
}

// for(item in person) {
//     if (item === 'location' || item === 'credential') {
//         for(item2 in person[item]) {
//             console.log(`${item}: ${person[item][item2]}`)
//         }
//     }
// }

// ejercicio 3
// tomando el siguiente array de objetos
let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
// obtener lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes
let voters = persons.filter(element => element.voted === true)
console.log(`La cantidad de personas que votaron fue de ${voters.length} personas`)
let age_sum = voters.reduce((accumulator, current_value) => {
    return accumulator + current_value.age
}, 0)
console.log(`El promedio de edad de los votantes es de ${(age_sum / voters.length).toFixed(0)} años`)