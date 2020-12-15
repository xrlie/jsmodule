/* * * * * * * *
 * Function 1  *
 * * * * * * * */

function calculate_dog_age(dog_name, human_age) {
    let dog_age = human_age * 7
    return dog_age
}

 /* * * * * * * *
 * Function 2  *
 * * * * * * * */

function circle_properties (radius) {
    const pi = 3.1416
    let area = pi * Math.pow(parseInt(radius), 2) 
    let circunference = pi * 2 * parseInt(radius) 
    return area, circunference
 }

 /* * * * * * * *
 * Function 3  *
 * * * * * * * */

function temperature_converter (degrees, units) {
    switch (units) {
        case('C'):
        case('c'):
           let degrees_fahrenheit = (degrees * 1.8 + 32).toFixed(0)
           return degrees_fahrenheit
           //break;
        case('F'):
        case('f'):
           let degrees_celcius = ((degrees - 32) / 1.8).toFixed(0)
           return degrees_celcius
           //break;
        default:
            console.log("Ingresa un tipo de unidad correcta: C o F");
            break;
    }
}

 /* * * * * * * *
 * Function 4  *
 * * * * * * * */

function get_factorial(number) {
    let factorial = 1
    for(let i = number; i > 0; --i) {
        factorial *= i
    }
    return factorial
}