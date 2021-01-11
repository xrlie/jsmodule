const display_data = (selector, arr_data) => {
    let list_data = ''
    if (selector === 'users') {
        arr_data.forEach(element => {
            list_data +=`<div class="row" id="${element.id}" style="background-image: url('../assets/img/bkg_${element.id}.jpg');">
            <div class="col-3" id="one">
                <p>${element.name}</p>
                <img src="assets/icons/user-tie-solid.svg" class="profile">
            </div>
            <div class="col-3 col-md-2" id="two">
                <p>${element.username}</p>
            </div>
            <div class="col-4" id="two">
                <ul>
                    <li><i class="fas fa-envelope-square"></i>${element.email.toLowerCase()}</li>
                    <li>Address:
                        <ul>
                            <li><i class="fas fa-road"></i>${element.address.street}</li>
                            <li><i class="fas fa-house-user"></i>${element.address.suite}</li>
                            <li><i class="fas fa-city"></i>${element.address.city}</li>
                            <li><i class="fas fa-hashtag"></i>${element.address.zipcode}</li>
                            <li><i class="fas fa-map-marked-alt"></i>geo:
                                <ul>
                                    <li><i class="fas fa-map-pin"></i>lat: ${element.address.geo.lat}</li>
                                    <li><i class="fas fa-map-pin"></i>lng: ${element.address.geo.lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><i class="fas fa-phone-square-alt"></i>${element.phone.slice(0,element.phone.indexOf(' '))}</li>
                    <li><a href="${element.website}">Ir a mi sitio web</a></li>
                    <li><i class="fas fa-building"></i>Company:
                        <ul>
                            <li>${element.company.name}</li>
                            <li><p class="s_cap">${element.company.catchPhrase}</p></li>
                            <li><p class="s_cap">${element.company.bs}</p></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="col-2 col-md-3" id="three"></div>
            </div>`
        })
        document.querySelector('.container').innerHTML = list_data
    } else if (selector === 'posts') {
        arr_data.forEach(element => {
            list_data += `<div class="card">
            <h5 class="card-header">POST ${element.id}</h5>
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.body}</p>
            </div>
          </div>`
        })
        document.querySelector('#second-cont').innerHTML = list_data

    }
}

const display_div = (selector) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            if(selector === 'users') {
                document.querySelector('.container').innerHTML = 'Cargando...'
            } else if(selector === 'posts') {
                document.querySelector('#second-cont').innerHTML = 'Cargando...'
            }
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const object_response = JSON.parse(response.responseText)
                display_data(selector, object_response)
            }
        }
    })
    request.open('GET',selector === 'users'?users_src:posts_src)
    request.send()
}

get_users.addEventListener('click', function(){
    display_div('users')
    document.querySelector('#delete_users').classList.remove('d-none')
})

get_posts.addEventListener('click', function(){
    display_div('posts')
    document.querySelector('#delete_posts').classList.remove('d-none')
})

const printing = () => {
    console.log(window.location.search)
}


