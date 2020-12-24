

let show_all = document.getElementById('show_all')

show_all.addEventListener("click", function(){
    document.getElementById('order_list').value = ''
    add_elements('lista', koders_arr.length, koders_arr)
    add_filter_elements('order_letter', koders_arr.length, koders_arr)
})

let order_list = document.getElementById('order_list')
order_list.addEventListener('change', function() {
    if (order_letter.value === '' && search.value === '') {
        ordering_koders(order_list.value, order_letter.value)
        add_filter_elements('order_letter', koders_arr.length, koders_arr)
    } else {
        if (order_letter.value === '' && search.value != '') {
            filter_koders(search.value)
            ordering_koders(order_list.value, ' ')
        } else {
            filter_koders(order_letter.value)
            ordering_koders(order_list.value, order_letter.value)
        }
    }
})

let order_letter = document.getElementById('order_letter')
order_letter.addEventListener('change', function() {
    if (order_list.value === '') {
        filter_koders(order_letter.value)
    } else {
        filter_koders(order_letter.value)
        ordering_koders(order_list.value, order_letter.value)
    }
})

let search = document.getElementById('search')
search.addEventListener('keyup', function() {
    if(search.value === '') {
        filter_koders(order_letter.value)
        ordering_koders(order_list.value, order_letter.value)
    } else {
        filter_koders(search.value)
        ordering_koders(order_list.value, ' ')
    }
})

// let email = document.getElementById('email')
// email.addEventListener("focus", function() {
//     console.log('Estás en email')
// })

// email.addEventListener('blur', function() {
//     console.log('Estás fuera del email')
// })