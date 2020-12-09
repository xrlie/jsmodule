// Ejercicio 2
// Pedir al usuario que ingrese como está el clima
// Imprimir en consola una descripción acorde al estado del día
// Opciones
/* 
    a. Soleado
    b. Lluvioso
    c. Nevando
    d. Nublado
*/
// Si no está ninguna de las opciones
// Pedir una descripción de su día e imprimirla en consola

const ESTADO_DIA = prompt('De las siguientes opciones elige la que mejor describa tu día: Soleado, Lluvioso, Nevando, Nubleado o ninguna')

if (ESTADO_DIA === 'Soleado' || 'soleado') {
    console.log(`Tu día está ${ESTADO_DIA}`)
} else if (ESTADO_DIA === 'Lluvioso' || 'lluvioso') {
    console.log(`Tu día está ${ESTADO_DIA}`)
} else if (ESTADO_DIA === 'Nevando' || 'nevando') {
    console.log(`Tu día está ${ESTADO_DIA}`)
} else if (ESTADO_DIA === 'Nublado' || 'nublado') {
    console.log(`Tu día está ${ESTADO_DIA}`)
}
else {
    const nuevo_estado = prompt('Escribe la descripción de tu día en una palabra')
    console.log(`Tu día está ${nuevo_estado}`)
}
