const users_src = 'https://jsonplaceholder.typicode.com/users'
const user_id = document.getElementById('user_id')

const display_user = (selector, arr_data, id) => {
    let list_data = ''
    if (selector === 'users') {
            list_data +=`<div class="row" id="${arr_data[id].id}" style="background-image: url('../assets/img/bkg_${arr_data[id].id}.jpg');">
            <div class="col-3" id="one">
                <p>${arr_data[id].name}</p>
                <img src="assets/icons/user-tie-solid.svg" class="profile">
            </div>
            <div class="col-3 col-md-2" id="two">
                <p>${arr_data[id].username}</p>
            </div>
            <div class="col-4" id="two">
                <ul>
                    <li><i class="fas fa-envelope-square"></i>${arr_data[id].email.toLowerCase()}</li>
                    <li>Address:
                        <ul>
                            <li><i class="fas fa-road"></i>${arr_data[id].address.street}</li>
                            <li><i class="fas fa-house-user"></i>${arr_data[id].address.suite}</li>
                            <li><i class="fas fa-city"></i>${arr_data[id].address.city}</li>
                            <li><i class="fas fa-hashtag"></i>${arr_data[id].address.zipcode}</li>
                            <li><i class="fas fa-map-marked-alt"></i>geo:
                                <ul>
                                    <li><i class="fas fa-map-pin"></i>lat: ${arr_data[id].address.geo.lat}</li>
                                    <li><i class="fas fa-map-pin"></i>lng: ${arr_data[id].address.geo.lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><i class="fas fa-phone-square-alt"></i>${arr_data[id].phone.slice(0,arr_data[id].phone.indexOf(' '))}</li>
                    <li><a href="${arr_data[id].website}">Ir a mi sitio web</a></li>
                    <li><i class="fas fa-building"></i>Company:
                        <ul>
                            <li>${arr_data[id].company.name}</li>
                            <li><p class="s_cap">${arr_data[id].company.catchPhrase}</p></li>
                            <li><p class="s_cap">${arr_data[id].company.bs}</p></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="col-2 col-md-3" id="three"></div>
            </div>`
        document.querySelector('.user').innerHTML = list_data
    }
}

const display_div = (selector) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            document.querySelector('.user').innerHTML = 'Cargando...'
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const object_response = JSON.parse(response.responseText)
                if (parseInt(user_id.value) > object_response.length){
                    document.querySelector('.user').innerHTML = 'El usuario que elegiste no existe. Favor de ingresar otro id.'
                } else if (user_id.value === ''){
                    document.querySelector('.user').innerHTML = 'Esperando a que elijas un nuevo usuario...'
                } else {
                    let id = parseInt(user_id.value) - 1
                    display_user(selector, object_response,id)
                }
            }
        }
    })
    request.open('GET',selector === 'users'?users_src:posts_src)
    request.send()
}

const update_url = () => {
    console.log('entró a la función')
    if (0 < parseInt(user_id.value)) {
        console.log('entró al if')
        window.location.href = `http://127.0.0.1:5501/user.html?id=${user_id.value}`
    } else {
        console.log('entró al else')
        window.location.href = `http://127.0.0.1:5501/user.html`
    }
}

const user_from_search = () => {
    let id = new URLSearchParams(window.location.search)
    console.log(id.get('id'))
    user_id.value = id.get('id')
    display_div('users')
}

user_id.addEventListener('keyup', function () {
    display_div('users')
    //update_url()
})

user_id.addEventListener('focusout', update_url)

window.addEventListener('load', user_from_search)