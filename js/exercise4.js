// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.

const DAY_OF_THE_WEEK = parseInt(prompt('Ingrese un número entre el 1 y 7'))

switch (DAY_OF_THE_WEEK) {
    case 1:
        console.log('Lunes')
        break;
    case 2:
        console.log('Martes')
        break;
    case 3:
        console.log('Miércoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sábado')
        break;
    case 7:
        console.log('Domingo')
        break;
    default:
        alert('El número no corresponde al intervalo solicitado')
        break;
}