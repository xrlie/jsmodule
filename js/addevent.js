/*
Temas vistos:
window DOM, BOM
screen
history
navigator
cookie
location
*/

/* * * * * * * * * * * * *
 *           BOM         *
 *  Browser Object Model *
 * * * * * * * * * * * * */

// Mediante el evento resize
// resolución ancho <= 767
// Aparecer contenido mobile
// Desaparecer contenido desktop
// sino
// Desaparecer contenido mobile
// Aparecer contenido desktop
// window.innerWidth

// if (document.getElementById('my_check').value === true) {
//     document.getElementById('mobile').
// }

// window.addEventListener('resize', function(){
//     if (window.innerWidth <= 767) {
//         document.getElementById('mobile').style.display = 'block'
//         document.getElementById('desktop').style.display = 'none'
//     } else {
//         document.getElementById('mobile').style.display = 'none'
//         document.getElementById('desktop').style.display = 'block'
//     }
// })

const show_hide_box = () => {
    if (window.innerWidth <= 767) {
        document.querySelector('.mobile').classList.remove('d-none')
        document.querySelector('.mobile').classList.add('d-block')
        document.querySelector('.desktop').classList.remove('d-block')
        document.querySelector('.desktop').classList.add('d-none')
    } else {
        document.querySelector('.mobile').classList.remove('d-block')
        document.querySelector('.mobile').classList.add('d-none')
        document.querySelector('.desktop').classList.remove('d-none')
        document.querySelector('.desktop').classList.add('d-block')
    }
}

window.addEventListener('resize', show_hide_box)
window.addEventListener('load', show_hide_box)


// si logged = true
// si existe la cookie logged
// Mensaje: Bienvenido
// si no existe
// Mensaje: User offline
// loguearlo (setear cookie logged = true)

const is_logged = (biscuit) => {
    biscuit = document.cookie
    if (biscuit === 'true') {
        console.log('Bienvenido')
    } else {
        console.log('User offline')
        document.cookie = 'logged=true'
    }
    return biscuit
}
window.addEventListener('load', is_logged)

// solución
/*
const is_logged = () => {
    if (document.cookie.includes('logged=true')) {
        document.querySelector('#session').innerHTML = 'Bienvenido'
    } else {
        document.querySelector('#session').innerHTML = 'User is offline'
        document.cookie = 'logged=true'
    }
}
window.addEventListener('load', is_logged)

*/

// Homework
// 1.
// Si el usario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// Redireccionarlo a /user.html

// 2.
// Crear un div con un mensaje de
// "Este sitio se ve mejor en desktop"
// si el viewportWidth es <= 767
// mostrar el mensaje
// sino
// desaparecer el mensaje
// utilizar css *no utilizar inline styles