// Variables y funciones globales
let options = {
    method: 'GET'
}

const go_home = () => {
    window.location.href = 'http://127.0.0.1:5501/index.html?id='
}

// Create
const add_new_users_button = document.querySelector('#add_users_button')
if(add_new_users_button) {
    add_new_users_button.addEventListener('click', function() {
        window.location.pathname = 'new_user.html'
    })
}

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
        fetch(`https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/.json`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(new_user)
        })
        .then(response => {
            return response.json()
        })
        .then(created_user => {
            console.log(created_user)
            console.log('usuario agregado con éxito')
            go_home()
        })
    }
}
const submit_new_user_button = document.querySelector('#submit_new_form')
if(submit_new_user_button) {
    submit_new_user_button.addEventListener('click', function() {
        add_new_user()
    })
}

// Read
const read_users = (selector) => {
    fetch('https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/.json', options)
        .then(response => {
            return response.json()
        })
        .then(users => {
            let display = display_data(selector, users)
            console.log(users)
            return display
        })
        .catch(err => {
            console.log(err)
        })
}

const read_users_button = document.querySelector('#get_users')
if (read_users_button) {
    read_users_button.addEventListener('click', function () {
        read_users('users')
        document.querySelector('#delete_users_button').classList.remove('d-none')
    })
}

// fetch(url,{}).then(response => {
//     console.log(response)
// })

const display_data = (selector, arr_data) => {
    let list_data = ''
    if (selector === 'users') {
        for (user in arr_data) {
            list_data += `<div class="row" id="${user}" style="background-image: url(${arr_data[user].url_photo});">
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
    return list_data
}

// delete
const delete_user = (id_user) => {
    fetch(`https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/${id_user}.json`, {
            method: 'DELETE'
        })
        .then(response => {
            return response.json()
        })
        .then(user_deleted => {
            console.log(user_deleted)
            go_home()
        })
        .catch(err => {
            console.log(err)
        })
}
const delete_users_button = document.querySelector('#delete_user')
if (delete_users_button) {
    delete_users_button.addEventListener('click', function () {
        let id = new URLSearchParams(window.location.search)
        delete_user(id.get('id'))
    })
}

// update
const updating_form = (id_user) => {
    fetch(`https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/${id_user}.json`, options)
        .then(response => {
            return response.json()
        })
        .then(user => {
            document.querySelector('#u_name_form').value = user.name
            document.querySelector('#u_lastname_form').value = user.lastname
            document.querySelector('#u_url_photo_form').value = user.url_photo
        })
        .catch(err => {
            console.log(err)
        })
}
let update_users_form = document.querySelector('.u_users_form')
if (update_users_form) {
    let id = new URLSearchParams(window.location.search)
    updating_form(id.get('id'))
}

const update_user_data = (id_user) => {
    let u_name_form = document.getElementById('u_name_form').value
    let u_lastname_form = document.getElementById('u_lastname_form').value
    let u_url_photo_form = document.getElementById('u_url_photo_form').value
    let user_updated = {
        name: u_name_form,
        lastname: u_lastname_form,
        url_photo: u_url_photo_form
    }
    console.log(user_updated)
    fetch(`https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/${id_user}.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(user_updated)
    })
    .then(response => {
        return response.json()
    })
    .then(updated_user => {
        console.log(updated_user)
        go_home()
    })
    return id_user
}
let update_user_data_button = document.querySelector('#update_form')
if (update_user_data_button) {
    update_user_data_button.addEventListener('click', function() {
        let id = new URLSearchParams(window.location.search)
        let user_updated = update_user_data(id.get('id'))
    })
}

// Limpiar usuarios
const close_users = document.querySelector('.close_users')
if(close_users) {
    close_users.addEventListener('click', function () {
        document.querySelector('.container').innerHTML = ''
        document.querySelector('#delete_users_button').classList.add('d-none')
    })
}

window.addEventListener('load', function () {
    let url_pathname = window.location.pathname
    let url_search = window.location.search
    let url_href = window.location.href
    if( url_pathname === '/index.html') {
        let id = new URLSearchParams(url_search)
        if(id.get('id')) {
            window.location.search = '?'
        } else if (url_href.indexOf('?') !== -1) {
            read_users('users')
            document.querySelector('#delete_users_button').classList.remove('d-none')
        }
    }
    if (url_pathname === '/index.html' && url_search === '?id=') {
        read_users('users')
        console.log('texto prueba')
        document.querySelector('#delete_users_button').classList.remove('d-none')
    }
})