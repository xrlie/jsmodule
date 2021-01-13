let user = document.querySelector('.user')

let id = new URLSearchParams(window.location.search)
console.log(id.get('id'))

if (user) {

    let list_data = ''
    let user_url = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/'

    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                let obj_data = JSON.parse(request.responseText)
                if (obj_data !== null) {
                    display_user(obj_data)
                }
            } else {
                if (obj_data === null && window.location.pathname === '/update_user.html') {
                    window.location.pathname = 'index.html'
                }
                console.log(JSON.parse(request.responseText))
            }
        }
    })

    request.open('GET', `${url_db}/users/${id.get('id')}.json`)
    request.send()

    const display_user = (arr_data) => {
        list_data += `<div class="row" id="${id.get('id')}" style="background-image: url(${arr_data.url_photo});">
            <div class="col-3" id="one">
            <p>${arr_data.name}</p>
            <img src="${arr_data.url_photo}" class="profile">
            </div>
            <div class="col-3 col-md-2" id="two">
            <p>${arr_data.lastname}</p>
            </div>
            <div class="col-4" id="two">
            <div class="card card-users">
            <img class="card-img-top" src="${arr_data.url_photo}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${arr_data.name} ${arr_data.lastname}</h5>
            <p class="card-text">Personal information goes here...</p>
            </div>
            </div>
            </div>
            <div class="col-2 col-md-3" id="three"></div>
            </div>`

        document.querySelector('.user').innerHTML = list_data
    }
}

let update_user_button = document.querySelector('#update_user')
if (update_user_button) {
    update_user_button.addEventListener('click', function () {
        window.location.pathname = `update_user.html`
    })
}

let update_user_button_form = document.querySelector('#update_form')
if (update_user_button_form) {
    update_user_button_form.addEventListener('click', function () {
        // window.location.pathname = 'user.html'
    })
}

let update_user_form = document.querySelector('.users_form')
if (update_user_form) {
    let list_data = ''
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                let obj_data = JSON.parse(request.responseText)
                if (obj_data !== null) {
                    display_update_form_data(obj_data)
                }
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('GET', `${url_db}/users/${id.get('id')}.json`)
    request.send()

    const display_update_form_data = (arr_data) => {
        document.querySelector('#u_name_form').value = arr_data.name
        document.querySelector('#u_lastname_form').value = arr_data.lastname
        document.querySelector('#u_url_photo_form').value = arr_data.url_photo
    }
    let aux = false

    const update_user = () => {
        let u_name_form = document.getElementById('u_name_form').value
        let u_lastname_form = document.getElementById('u_lastname_form').value
        let u_url_photo_form = document.getElementById('u_url_photo_form').value
        let user_updated = {
            name: u_name_form,
            lastname: u_lastname_form,
            url_photo: u_url_photo_form
        }
        console.log(user_updated)
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return
            } else {
                if (request.status >= 200 && request.status <= 299) {
                    console.log(JSON.parse(request.responseText))
                    console.log(true)
                    window.location.pathname = 'user.html'
                } else {
                    aux = false
                    console.log(JSON.parse(request.responseText))
                }
            }
        })
        request.open('PATCH', `${url_db}/users/${id.get('id')}.json`)
        request.send(JSON.stringify(user_updated))
        return aux
    }

    update_user_button_form.addEventListener('click', function () {
        update_user()
        //window.location.pathname = 'user.html'
    })

    window.addEventListener('load', function () {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return
            } else {
                if (request.status >= 200 && request.status <= 299) {
                    let obj_data = JSON.parse(request.responseText)
                    if (obj_data !== null) {
                        display_update_form_data(obj_data)
                    } else if (obj_data === null) {
                        window.location.pathname = 'index.html'
                    }
                } else {
                    // if (JSON.parse(request.responseText) === null) {
                    //     window.location.pathname = 'index.html'
                    // }
                    console.log(JSON.parse(request.responseText))
                }
            }
        })
        request.open('GET', `${url_db}/users/${id.get('id')}.json`)
        request.send()
    })


}