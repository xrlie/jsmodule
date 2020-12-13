/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */
function calculate_dog_age(dog_name, human_age) {
    console.log(`${dog_name} tiene ${human_age*7} años caninos`)
}

/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */

 function circle_properties (radius) {
    const pi = 3.1416
    let area = pi * Math.pow(parseInt(radius), 2) 
    let circunference = pi * 2 * parseInt(radius) 
    console.log(`El área del círculo es ${area.toFixed(2)} y la circunferencia es ${circunference.toFixed(2)}`)
 }

/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */

 function temperature_converter (degrees, units) {
     switch (units) {
         case('C'):
         case('c'):
            console.log(`${degrees}º Celsius equivalen a ${(degrees * 1.8 + 32).toFixed(0)}º Fahrenheit.`);
            break;
         case('F'):
         case('f'):
            console.log(`${degrees}º Fahrenheit equivalen a ${((degrees - 32) / 1.8).toFixed(0)}º Celsius.`)
            break;
         default:
             console.log("Ingresa un tipo de unidad correcta: C o F");
             break;
     }
 }

/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */

function get_factorial(number) {
    let factorial = 1
    for(let i = number; i > 0; --i) {
        factorial *= i
    }
    console.log(factorial)
}