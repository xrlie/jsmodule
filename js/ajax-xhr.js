/* * * * * * * * * * * * *
 *      Verbos HTTP      *
 * * * * * * * * * * * * */

/*
C => Create
    => POST   => crear datos
R => Read
    => GET    => obtener datos
U => Update
    => PUT    => reemplazar datos
    => Patch  => actualizar datos
                (sólo las partes necesarias, sino existe, lo crea)
D => Delete
    => DELETE => eliminar datos
*/

// Nuevo Usuario
const url_db = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/'

let new_user = {
    id: 1,
    lastname: "Camarillo",
    name: "Jorge",
    url_photo: "https://loremflickr.com/320/240/person"
}

const creat_user = () => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('POST', `${url_db}users/.json`)
    request.send(
        JSON.stringify({
            id: 1,
            name: "Carlos",
            lastname: "Aviles",
            url_photo: "https://loremflickr.com/320/240/person"
        })
    )
}

const read_user = () => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('GET', `${url_db}users/.json`)
    request.send()
}

// PUT
const update_and_replace = (user_id) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('PUT', `${url_db}users/${user_id}.json`)
    request.send()
}

// PATCH
const update_and_modify = (user_id) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('PATCH', `${url_db}users/${user_id}.json`)
    request.send()
}

const delete_user = (user_id) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('DELETE', `${url_db}users/${user_id}.json`)
    request.send()
}

const my_url_db = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/.json'

const ajax_function = (user_url, method, data = {}) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open(method, `${user_url}`)
    if (method === 'GET' || method === 'DELETE') {
        request.send()
    } else {
        // put, patch, post
        request.send(JSON.stringify(data))
    }
}

// const showResponse = (response) => {
//     console.log(response)
// }

// requestAjax(
//     'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json',
//     showResponse,
//     'POST', 
//     {
//         id: 1
//         lastname: "Paez",
//         name: "Ale",
//         urlPhoto: "https://loremflickr.com/320/240/person"
//     }
// )