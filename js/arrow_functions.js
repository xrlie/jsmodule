/* * * * * * * * * *
 * Arrow Functions *
 * * * * * * * * * */

/*
function name_function (par1, par2,) {
    // sentencias 
}

const name_function = (par1, par2) => {
    // sentencias
}
*/

function add (a,b) {
    return a + b
}

const add_arrow = (a,b) => {
    return a + b
}

add_arrow(2, 3)

 /* * * * * * * * * * * *
  *  Arrow Function 1   *
  * * * * * * * * * * * */

const calculate_dog_age = (dog_name, human_age) => { human_age * 7 }

 /* * * * * * * * * * * *
  *  Arrow Function 2   *
  * * * * * * * * * * * */

const calc_circumference = (radius) => { 3.1416 * 2 * radius }

const calc_area = (radius) => { 3.1416 * Math.pow(radius,2) }

 /* * * * * * * * * * * *
  *  Arrow Function 3   *
  * * * * * * * * * * * */

const temperature_converter = (degrees, units) => {
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

 /* * * * * * * * * * * *
  *  Arrow Function 4   *
  * * * * * * * * * * * */

const get_factorial = (number) => {
    let factorial = 1
    for(let i = number; i > 0; --i) {
        factorial *= i
    }
    return factorial
}