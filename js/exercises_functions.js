/* * * * * * *
 * Functions *
 * * * * * * */

 /*
    Forma general de cualquier función

    function my_function (parámetros) {
        sentencias
    }
 */

 function my_function () {
     console.log('Mi primera función')
 }

 function get_name () {
     const name = prompt('Ingresa tu nombre')
     console.log(name)
     return name
 }

 function name_reverse (reverse_string) {
    let wordaux = ''
    for (let k = reverse_string.length; k >= 0; --k){
        wordaux = wordaux.concat(reverse_string.charAt(k))
    }
    console.log(wordaux)
 }