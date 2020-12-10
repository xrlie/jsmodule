// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

const MES = parseInt(prompt('Ingresa un número entre el 1 y 12'))
if (MES <= 12 && MES >= 1) {
    if (MES % 2 === 0) {
        if (MES != 2) {
            if (MES < 8) {
                console.log(`${MES} -> 30 días`)
            } else {
                console.log(`${MES} -> 31 días`)
            }
        } else {
            console.log(`${MES} -> 28 días`)
        }
    } else if (MES < 8) {
        console.log(`${MES} -> 31 días`)
    } else {
        console.log(`${MES} -> 30 días`)
    }
} else {
    alert('No ingresó un valor entre 1 y 12')
}