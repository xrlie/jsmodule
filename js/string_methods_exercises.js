console.log('string_methods_exercises')
/** 
 * ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/
const STRING_TO_VERIFY = "hola koders como estan"
console.log(STRING_TO_VERIFY.length)
/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */
const STRING_ONE = 'Hola '
const STRING_TWO = 'Koders'
let both_strings = STRING_ONE.concat(STRING_TWO)
console.log(both_strings)
/**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */
console.log(STRING_TO_VERIFY.slice(3,6))
/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */
console.log(STRING_TO_VERIFY.replace(/ /g,'-'))
/**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */
let split_string = STRING_TO_VERIFY.split(' ')
let k = split_string.length
let aux = ''
let aux2 = ''
let aux3 = ''
for (let j=0; j<k; ++j){
    aux = split_string[j].slice(0,1)
    aux2 = split_string[j].slice(1,split_string[j].length)
    aux3 = aux3 + ' ' + (aux.toUpperCase()).concat(aux2)
}
console.log(aux3.trim())
/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */
const EMAIL = 'holakoders@kodemia.mx'
let n = EMAIL.search('@')
let email_user = EMAIL.slice(0,n)
console.log(email_user)
let m = email_user.length
let user =''
for (let i = 0; i<m; ++i){
    user = user + '*'
}
console.log (user.concat(EMAIL.slice(n)))
/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */
let hola = 'hola koders'
let dividir = hola.split(" ")
console.log(dividir)
