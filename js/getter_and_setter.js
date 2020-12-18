/* * * * * * * 
 * Accesors  *
 * * * * * * */

let obj = {
    name: 'ruben',
    lastname: 'flores',
    age: 29,
    assignment: [
        {
            na: 'Español',
            ave: 90
        },
        {
            na: 'Matemáticas',
            ave: 100
        },
        {
            na: 'Ciencias',
            ave: 80
        },
    ],
    getfullname: function () {
        return this.name + ' ' + this.lastname
    },
    saltar: function () {
        return `${this.name} está saltando`
    },
    get_years_old: function () {
        return `${this.age} años`
    },
    get_average: function () {
        let assignments = this.assignment
        let average = assignments.reduce((acc, cv) => {
            return acc + cv.ave
        }, 0) / assignments.length
        return average
    }
}

// console.log(obj.getfullname())
// console.log(obj.saltar())
// console.log(obj.get_years_old())
// console.log(obj.get_average())

let koder = {
    first_name: 'Carlos',
    last_name: 'Avilés Ruiz',
    day_of_birth: 16,
    month_of_birth: 'Octubre',
    year_of_birth: 1991,
    age: 29,
    location: 'Mérida',
    bootcamp: 'Python',
    generation: 1,
    classes: [
        {
            topic: 'CSS',
            teacher: 'Fer'
        },
        {
            topic: 'Js',
            teacher: 'Jorge'
        },
        {
            topic: 'Git',
            teacher: 'Charles'
        },
        {
            topic: 'Linux',
            teacher: 'Alfredo'
        },
    ],
    get birthday (){
        return `Nació el ${this.day_of_birth} de ${this.month_of_birth} de ${this.year_of_birth}`
    },
    get origin (){
        if (this.location === 'CdMx') {
            return 'No es foráneo'
        }else {
            return 'Es foráneo'
        }
    },
    get teachers (){
        let classes = this.classes
        let teachers = classes.reduce((acc, cv) => {
            return `${acc} ${cv.teacher}`
        },[])
        return `Los maestros de ${this.first_name} son: ${teachers}`
    },
    get topics (){
        let classes = this.classes
        let topics = classes.reduce((acc, cv) => {
            return `${acc} ${cv.topic}`
        },[])
        return `Los temas vistos por ${this.first_name} son: ${topics}`
    },
    set new_bootcamp (new_value){
        this.bootcamp = new_value
    },
    set new_property (name_properties) {
        this[name_properties.name_property] = name_properties.value_property
    }
}

koder.new_property = {
    name_property: 'custom_prop',
    value_property: [1,2,3,4]
}

// console.log(koder.get_birthday())
// console.log(koder.get_origin())
// console.log(koder.get_teachers())
// console.log(koder.get_topics())