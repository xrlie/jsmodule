/* * * * * * * * * * * * * * * * * *
 *              AJAX               *
 * Asynchronous JavaScript And XML *
 * * * * * * * * * * * * * * * * * */

// Actualiza una página web sin la necesidad de recargar la página
// Sirve para recibir o enviar información a un servidor

// JSON
// XML

// console.log(request)

// 0 = Petición no ha sido inicializada // No inicializado
// 1 = Petición ha sido establecida     // Cargando
// 2 = Petición ha sido enviada         // Cargado
// 3 = Petición está siendo procesada   // Interactivo
// 4 = Petición ha sido finalizada      // Completado
const users_src = 'https://jsonplaceholder.typicode.com/users'
const posts_src = 'https://jsonplaceholder.typicode.com/posts'

// const load_users = () => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState !== 4) {
//             return
//         } else {
//             if (request.status >= 200 && request.status <= 299) {
//                 const response = request
//                 const object_response = JSON.parse(response.responseText)
//                 let list_users = ''
//                 object_response.forEach(user => {
//                     list_users += `<li>${user.name}, ${user.phone} <a href="${user.phone}">Ir a su sitio web</a></li>`
//                 });
//                 document.querySelector('.users').innerHTML = list_users
//             }
//         }
//     })
//     request.open('GET', users_src)
//     request.send()
// }
// // load_users()
// window.addEventListener('load', load_users)

/* * * * * * * * * * * * * * * * *
 *      Ejercicio en clase       *
 * * * * * * * * * * * * * * * * */

 // Reciclar la función anterior para llamar a usuario y posts
const get_users = document.getElementById('get_users')
const delete_users = document.getElementById('delete_users')
const get_posts = document.getElementById('get_posts')
const delete_posts = document.getElementById('delete_posts')

const get_data = (selector) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const object_response = JSON.parse(response.responseText)
                selec_data(selector, object_response)
            }
        }
    })
    request.open('GET',selector === 'users'?users_src:posts_src)
    request.send()
}

const selec_data = (selector, arr_data) => {
    let list_data = ''
    if (selector === 'users') {
        arr_data.forEach(element => {
            list_data += `<li>${element.name}, ${element.phone} <a href="${element.phone}">Ir a su sitio web</a></li>`    
        })
        document.querySelector('.users').innerHTML = list_data
    } else {
        arr_data.forEach(element => {
            list_data += `<li><h1>${element.title}</h1><p>${element.body}</p></li>`
        })
        document.querySelector('.posts').innerHTML = list_data
    }
}
// get_users.addEventListener('click', function(){
//     get_data('users')
//     document.querySelector('#delete_users').classList.remove('d-none')
// })
// get_posts.addEventListener('click', function(){
//     get_data('posts')
//     document.querySelector('#delete_posts').classList.remove('d-none')
// })

const delete_data = (selector) => {
    document.querySelector(selector).innerHTML = ''
}

delete_users.addEventListener('click', function() {
    delete_data('.users')
    delete_data('.container')
    document.querySelector('#delete_users').classList.add('d-none')
})

delete_posts.addEventListener('click', function() {
    delete_data('.posts')
    delete_data('#second-cont')
    document.querySelector('#delete_posts').classList.add('d-none')
})