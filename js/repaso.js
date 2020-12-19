const obj = {
    name: 'jorge',
    lastname: 'camarillo',
    set new_name (name) {
        this.name = name.valor1
    }
}

Object.defineProperty(obj, 'fullname', {
    get: function () {
        return this.name + ' ' + this.lastname
    }
})

let data_users = [
    {
        name: 'Jorge',
        lastname: 'Camarillo',
        role: 'Instructor',
        glasses: true,
        os: 'macOS'
    },
    {
        name: 'Carlos',
        lastname: 'Avilés',
        role: 'Koder',
        glasses: true,
        os: 'macOS'
    },
    {
        name: 'Alex',
        lastname: 'Contreras',
        role: 'Koder',
        glasses: true,
        os: 'Windows'
    },
    {
        name: 'Rubén',
        lastname: 'Flores',
        role: 'Koder',
        glasses: true,
        os: 'Linux'
    }
]
// data_users.forEach(user => {
//     Object.defineProperty(user, 'fullname', {
//         get: function () {
//             return this.name + ' ' + this.lastname
//         }
//     })
// })

data_users.forEach(user => {
    Object.defineProperties(user, {
        fullname: {
            get: function() { return this.name + ' ' + this.lastname }   
        },
        role_at_k: {
            get: function() { return this.name + ' es ' + this.role }
        },
        uses_glasses: {
            set: function(value) { this.glasses = value }
        },
        new_os: {
            set: function(system) { this.os = system }
        }
    })
})