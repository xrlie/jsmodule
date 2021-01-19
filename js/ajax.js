$(function () {
    const paint_users = (users) => {
        let users_html = 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/.json'
        for (item in users) {
            users_html += `
                <tr>
                    <td>${users[item].name}</td>
                    <td>${users[item].lastname}</td>
                    <td><a href=" ${users[item].url_photo} " >Foto</a></td>
                    <td>
                        <a href="show-user.html?id=${item}">Ver</a>
                        <a href="update-user.html?id=${item}">Actualizar</a>
                        <button data-id="${item}" type="button" id="delete-btn" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
                `
        }
        $('.users .table tbody').html(users_html)
    }


    // GET
    $.ajax({
        url: 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/.json',
        method: 'GET'
    }).done(function (response) {
        console.log('todo ok')
        console.log(response)
        paint_users(response)
    }).fail(function () {
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
        console.log('todo mal')
    })

    if ($('#new-user').length > 0) {
        $('#new-user').click(function () {
            console.log('new-user')
            window.location.href = 'http://127.0.0.1:5501/new-user.html'
        })
    }
    // // POST
    if ($('#form-new-user').length > 0) {
        $('.send__form').click(function () {
            let userObject = {
                lastname: $('#name__input').val(),
                name: $('#lastname__input').val(),
                urlPhoto: $('#url__photo').val()
            }
            $.ajax({
                url: 'https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/.json',
                method: 'POST',
                data: JSON.stringify(userObject)
            }).done(function (response) {
                console.log('todo ok')
                console.log(response)
                $('#alert__form').css('display', 'block!important')
                window.location.href = 'http://127.0.0.1:5501/ajax.html'
            }).fail(function () {
                console.log(err)
                console.log(err.status)
                console.log(err.statusText)
                console.log('todo mal')
            })
        })
    }

    // Show user
    const paint_user = (user) => {
        let user_html = ''
        user_html += `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${user.url_photo}">
                    <div class="card-body">
                        <p class="card-text">${user.name} ${user.lastname}</p>
                    </div>
                </div>
                `
        $('.user').html(user_html)
    }

    if ($('.user').length > 0) {
        $('#go-back').css('width','100px')
        let id = new URLSearchParams(window.location.search)
        let user_id = id.get('id')
        $.ajax({
            url: `https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/${user_id}.json`,
            method: 'GET'
        }).done(function (response) {
            console.log('todo ok')
            console.log(response)
            paint_user(response)
        }).fail(function () {
            console.log(err)
            console.log(err.status)
            console.log(err.statusText)
            console.log('todo mal')
        })
        $('#go-back').click(function() {
            window.location.href = 'http://127.0.0.1:5501/ajax.html'
        })
    }

    $('.users').on('click','#delete-btn', function() {
        let user = $(this)
        let id_user = $(this).data('id')
        $.ajax({
            url: `https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/${id_user}.json`,
            method: 'DELETE'
        }).done(function (response) {
            user.closest('tr').remove()
        }).fail(function () {
            console.log(err)
            console.log(err.status)
            console.log(err.statusText)
            console.log('todo mal')
        })
    })
    //$('#delete-btn').click(function() {
        //console.log('quiere borrar')
        // let id = new URLSearchParams(window.location.search)
        // let user_id = id.get('id')
        // $.ajax({
        //     url: `https://koders1gpython-default-rtdb.firebaseio.com/carlos/users/${user_id}.json`,
        //     method: 'DELETE'
        // }).done(function (response) {
        //     console.log('todo ok')
        //     console.log(response)
        // }).fail(function () {
        //     console.log(err)
        //     console.log(err.status)
        //     console.log(err.statusText)
        //     console.log('todo mal')
        // })
    //})

})