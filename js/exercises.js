/**
 *      Temas
 * 
 * Selectores
 *  + Class, id, tagname
 * 
 * Métodos
 * Eventos
 * Getters and Setters
 * Traversing - Moverse en el DOM
 */

/* Ejercicios
Del listado "#vacations"
1.  Seleccionar elementos de tipo 'h2' y cambiar el color
5.  Selecciona aquellos ítems que tenga la clase .america y modificar el color
2.  Modificar el precio de todos los vuelos para que ahora sea $199.99
3.  Modifica todos los títulos de las vacaciones (h2), 
    su nuevo valor será "Titulo de tu agrado".
Del listado sorting
1. Cuando le den click al link de America, Europe o Asia
    Filtrar del listado "#vacations" filtrar los li con la clase America, Europe o Asia
    y ocultar los demás
2. Si le dan click a todos
    Filtrar del listado "#vacations" filtrar los li con la clase America, Europe y Asia
*/
$('*').css({
    'background-color':'black',
    'color':'white'
})

$('h2').css('color', 'lightblue').text('Título de tu agrado')
$('.america').css('color','red')
$('.details').text('$199.99')

// Selector más largo
// $('#vacations-wrapper .sorting li:first a').click(function(){
//    $('#vacations .vacation').show()
// })

// mi respuesta
// $('#one').click(function() {
//     $('.vacation').show()
// })
    
// $('#two').click(function() {
//     $('.america').show()
//     $('.europe').hide()
//     $('.asia').hide()
// })

// $('#three').click(function() {
//     $('.america').hide()
//     $('.europe').show()
//     $('.asia').hide()
// })

// $('#four').click(function() {
//     $('.america').hide()
//     $('.europe').hide()
//     $('.asia').show()
// })

// respuesta más corta

$('.sorting a').click(function() {
    let continent = $(this).text()
    if(continent === 'Todos') {
        $('#vacations .vacation').show()
    } else {
        $('#vacations .vacation').hide()
        $(`#vacations .${continent.toLowerCase()}`).show
    }
})

/**
 * Del listado Faq
 * 1. Al cargar la pagina, mostrar la pregunta 1
 * 2. Al dar click en head__faq aparecer la descripcion de la pregunta
 *      y desaparecer las descripciones que esten mostradas
 */

//  $(function () {
//     $('#q_d_1').show()
//     $('#q_d_2').hide()
//     $('#q_d_3').hide()
//     $('#q_d_4').hide()
// })
// $('#q_1').click(function() {
//    $('#q_d_1').toggle()
// })
// $('#q_2').click(function() {
//     $('#q_d_2').toggle()
//  })
//  $('#q_3').click(function() {
//     $('#q_d_3').toggle()
//  })
//  $('#q_4').click(function() {
//     $('#q_d_4').toggle()
//  })

$('.desc__faq').hide()
$('.desc__faq:first').show()

$('.head__faq').click(function(evt) {
    evt.preventDefault()
    $('.desc__faq').hide()
    $(this).next().show()
})

