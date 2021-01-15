$(function() {
    console.log('Document ready')

    // // Selectores
    // $('.list_item').click()
    // $('.list_item').mouseenter()
    // $('.list_item').focus()
    // $('.list_item').blur()

    // $('.list_item').css()
    
    // $('.list_item').attr()

    // $('.list_item').fadeIn()
    // $('.list_item').fadeOut()

    // // Mostrar /  ocultar elementos
    // $('.list_item').show()
    // $('.list_item').hide()
    // $('.list_item').toggle()

    // // add Class
    // $('body ol li').addClass('list_item')
    // $('body ol li').removeClass('list_item')
    // $('body ol li').toggleClass('list_item')


    // Agregar evento
    // $('#show').click(function() {
    //     $('.contenido').show()
    // })

    // $('#hide').click(function() {
    //     $('.contenido').hide()
    // })

    $('#show').click(function() {
        $('.contenido').toggle()
    })
})
