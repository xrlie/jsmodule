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

const delete_user_old = (user_id) => {
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
                if (obj_data === null) {
                    window.location.pathname = 'index.html'
                }
                if (method !== 'POST' || method !== 'DELETE') {
                    display_data('users', obj_data)
                }
            } else {
                if (obj_data === null && window.location.pathname === '/update_user.html') {
                    window.location.pathname = 'index.html'
                }
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

/* * * * * * * * * * * * * * *
 *      index.html code      *
 * * * * * * * * * * * * * * */


const get_users = document.getElementById('get_users')
const delete_users_button = document.getElementById('delete_users_button')
const get_posts = document.getElementById('get_posts')
const delete_posts = document.getElementById('delete_posts')
const add_users_button = document.getElementById('add_users_button')

if(get_users) {
    get_users.addEventListener('click', function() {
        ajax_function(my_url_db,'GET',{})
        document.querySelector('#delete_users_button').classList.remove('d-none')
    })
}

const delete_data = (selector) => {
    document.querySelector(selector).innerHTML = ''
}

if(delete_users_button) {
    delete_users_button.addEventListener('click', function() {
        delete_data('.users')
        delete_data('.container')
        document.querySelector('#delete_users_button').classList.add('d-none')
    })
}

if(add_users_button) {
    add_users_button.addEventListener('click', function() {
        window.location.pathname = 'new_user.html'
        document.querySelector('.users_form').classList.remove('d-none')
    })
}

/* * * * * * * * * * * * * * * *
 *     new_user.html code      *
 * * * * * * * * * * * * * * * */

const submit_user = document.getElementById('submit_form')

const add_new_user = () => {
    let name_form = document.getElementById('name_form').value
    let lastname_form = document.getElementById('lastname_form').value
    let url_photo_form = document.getElementById('url_photo_form').value
    if(name_form === '') {
        console.log('El campo del nombre está vacío')
    } else if (lastname_form === '') {
        console.log('El campo del apellido está vacío')
    } else if (url_photo_form === ''){
        console.log('El campo del url está vacío')
    } else {
        let new_user = {
            lastname: lastname_form,
            name: name_form,
            url_photo: url_photo_form
        }
        console.log(new_user)
        ajax_function(my_url_db, 'POST', new_user)
        window.location.search = 'id='
        console.log('usuario agregado con éxito')
    }
}

if(submit_user) {
    submit_user.addEventListener('click', function () {
        // window.location.search = ''
        add_new_user()
        window.location.pathname = 'index.html'
        // window.location.search = 'id='
        /*
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
        */
    })
}

// ajax_function(url_db, 'POST', `{
//     lastname: "${name_form}",
//     name: "${name_form}",
//     url_photo: "${url_photo_form}"
// }`)

/* * * * * * * * * * * * * * * * *
 *     delete_user.html code     *
 * * * * * * * * * * * * * * * * */

let delete_user = document.getElementById('delete_user')

if(delete_user) {
    delete_user.addEventListener('click', function() {
        let id = url_aux.get('id')
        ajax_function(`${url_db}users/${id}.json`,'DELETE',{})
    })
}

let url_aux = new URLSearchParams(window.location.search)
if(window.location.pathname !== '/new_user.html'){
    if(window.location.search === '?id=') {
        ajax_function(my_url_db,'GET',{})
        document.querySelector('#delete_users_button').classList.remove('d-none')
    } else if(window.location.search !== '') {
        if ((window.location.pathname === "/index.html" && url_aux.get('id').charAt(0) === '-')
                    || (window.location.pathname === "/" && url_aux.get('id').charAt(0) === '-')) {
            window.location.search = '?id='
        }
    }
}
