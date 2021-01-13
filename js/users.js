const url_db = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/'

let id = new URLSearchParams(window.location.search)
console.log(id.get('id'))

let list_data = ''
let user_url = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/'

const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {
            if(request.status >= 200 && request.status <= 299) {
                let obj_data = JSON.parse(request.responseText)
                display_user(obj_data)
            } else {
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('GET', `${url_db}/users/${id.get('id')}.json`)
    request.send()

const display_user = (arr_data) => {
        list_data +=`<div class="row" id="${id.get('id')}" style="background-image: url(${arr_data.url_photo});">
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
    