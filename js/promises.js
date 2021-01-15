/*
 console.log('Dar click a pedir usuario')
 setTimeout( () => {
     console.log('Pidiendo usuarios')
 }, 2000)
 console.log('imprimir usuarios')
 */

 let x = 10
 const promise = new Promise( (resolve, reject) => {
     setTimeout ( () => {
        x = x * 2
        console.log('Pidiendo usuarios')
        resolve(x)
     }, 2000)
 })
 console.log('dar click a pedir usuario')
 promise
 .then(response => {
     return response * 3
 })
 .then(response2 => {
     console.log(response2)
 })

 array.forEach((element, val, index) => {
     
 });

 let usuarios = [
     {
         id: 1,
         name: 'Carlos'
     },
     {
         id: 2,
         name: 'Alex'
     }
 ]

 const obtener_usuario = id => {
     let promise = new Promise((resolve, reject) => {
         if (usuarios.find( usuario => usuario.id === id)) {
            resolve('El usuario si existe')
         } else {
            reject('El usuario no existe')
         }
     })
     return promise
 }

 obtener_usuario(1)
 .then(response => {
     console.log(response)
 })
 .catch (err => {
     console.log(err)
 })