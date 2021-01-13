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
                let obj_data = JSON.parse(request.responseText)
                console.log(obj_data)
                display_data('users', obj_data)
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
    return request
}
{ //Codigo de apoyo
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
}

const display_data = (selector, arr_data) => {
    let list_data = ''
    let user_url = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/'
    if (selector === 'users') {
        for(user in arr_data) {
            list_data +=`<div class="row" id="${user}" style="background-image: url(${arr_data[user].url_photo});">
            <div class="col-3" id="one">
                <p>${arr_data[user].name}</p>
                <img src="${arr_data[user].url_photo}" class="profile">
            </div>
            <div class="col-3 col-md-2" id="two">
                <p>${arr_data[user].lastname}</p>
            </div>
            <div class="col-4" id="two">
            <div class="card card-users">
                <img class="card-img-top" src="${arr_data[user].url_photo}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${arr_data[user].name} ${arr_data[user].lastname}</h5>
                <p class="card-text">Personal information goes here...</p>
                <p class="card-text"><small class="text-muted"><a href="user.html?id=${user}">Ver usuario</a></small></p>
                </div>
            </div>
            </div>
            <div class="col-2 col-md-3" id="three"></div>
            </div>`
        }
        document.querySelector('.container').innerHTML = list_data
    } 
    { // Code for more selectors
        // else if (selector === 'posts') {
        //     arr_data.forEach(element => {
        //         list_data += `<div class="card">
        //         <h5 class="card-header">POST ${element.id}</h5>
        //         <div class="card-body">
        //         <h5 class="card-title">${element.title}</h5>
        //           <p class="card-text">${element.body}</p>
        //         </div>
        //       </div>`
        //     })
        //     document.querySelector('#second-cont').innerHTML = list_data
    
        // }
    }
}

const get_users = document.getElementById('get_users')
const delete_users = document.getElementById('delete_users')
const get_posts = document.getElementById('get_posts')
const delete_posts = document.getElementById('delete_posts')
const add_users = document.getElementById('add_users')
const submit_user = document.getElementById('submit_form')

get_users.addEventListener('click', function() {
    ajax_function(my_url_db,'GET',{})
    document.querySelector('#delete_users').classList.remove('d-none')
})

const delete_data = (selector) => {
    document.querySelector(selector).innerHTML = ''
}

delete_users.addEventListener('click', function() {
    delete_data('.users')
    delete_data('.container')
    document.querySelector('#delete_users').classList.add('d-none')
})

add_users.addEventListener('click', function() {
    document.querySelector('.users_form').classList.remove('d-none')
})

submit_user.addEventListener('click', function (evt) {
    let name_form = document.getElementById('name_form').value
    let lastname_form = document.getElementById('lastname_form').value
    let url_photo_form = document.getElementById('url_photo_form').value
    if(name_form !== '' && lastname_form !== '' && url_photo_form !== '') {
        console.log(name_form)
        console.log(lastname_form)
        console.log(url_photo_form)
        console.log(`{
            lastname: ${lastname_form},
            name: ${name_form},
            url_photo: ${url_photo_form}
        }`)
        let new_user = {
            lastname: lastname_form,
            name: name_form,
            url_photo: url_photo_form
        }
        ajax_function(my_url_db, 'POST', new_user)
        console.log('usuario agregado con éxito')
        document.querySelector('.users_form').classList.add('d-none')
    } else {
        if(name_form === '') {
            console.log('El campo del nombre está vacío')
        } else if (lastname_form === '') {
            console.log('El campo del apellido está vacío')
        } else {
            console.log('El campo del url está vacío')
        }

    }

})

// ajax_function(url_db, 'POST', `{
//     lastname: "${name_form}",
//     name: "${name_form}",
//     url_photo: "${url_photo_form}"
// }`)