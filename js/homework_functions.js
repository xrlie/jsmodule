/* * * * * * * * * * * *
 *  Homework Functions *
 * * * * * * * + * * * */

 // Function 1: Weight in the moon
 function weight_in_the_moon (your_weight) {
    console.log(`Tu peso en la tierra es de ${your_weight} kgs.`)
    const gravitational_force_earth = 9.81      
    const gravitational_force_moon = 1.622
    let moon_weight 
    moon_weight = (your_weight/gravitational_force_earth)*gravitational_force_moon
    console.log(`Tu peso en la luna es de ${moon_weight.toFixed(2)} kgs.`)
 }

 // Function 2: Grades
 function grade () {
    const GRADE = parseInt(prompt('Ingresa la calificación de tu examen (de 0 a 100)'))

    if (GRADE >= 90) {
        console.log('Tu calificación equivale a A')
    } else if (GRADE < 90 && GRADE >= 80) {
        console.log('Tu calificación equivale a B')
    } else if (GRADE < 80 && GRADE >= 70) {
        console.log('Tu calificación equivale a C')
    } else if (GRADE < 70 && GRADE >= 60) {
        console.log('Tu calificación equivale a D')
    } else if (GRADE < 60 && GRADE >= 50) {
        console.log('Tu calificación equivale a E')
    } else if (GRADE < 50 && GRADE >= 0) {
        console.log('Tu calificación equivale a F')
    } else {
        console.log('Ingresa un número válido')
    }
 }

 // Function 3: Even verifier
 function even_verifier () {
    const NUMBER = parseInt(prompt('Ingrese cualquier número entero positivo'))

    if (NUMBER % 2 === 0) {
        console.log(`El número ${NUMBER} es par`)
    } else {
        console.log(`El número ${NUMBER} es impar`)
    }
 }

 // Function 4: Days in a month identifier
 function days_in_a_month () {
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
 }

 // Function 5: Number comparator
 function number_comparator (number_one, number_two) {
    if (number_one > number_two) {
        console.log(`El ${number_one} es el mayor`)
    } else if (number_one === number_two) {
        console.log(`El ${number_one} es igual al ${number_two}`)
    }
    else {
        console.log(`El ${number_two} es el mayor`)
    }
 }

 // Function 6: Any number table
 function any_number_table (number) {
    for (let i = 1; i < 11; ++i) {
        console.log(`${number} x ${i} = ${i * number}`)
    }
 }

 // Function 7: Even numbers between 1 and 100
 function even_numbers () {
    console.log('Números pares entre 1 y 100')
    let multiplos_pares = 'Múltiplos de 2: '
    let aux = 0
    for (let j = 1; j < 101; ++j) {
        if (j % 2 === 0) {
            ++aux
            if(aux === 1) {
                multiplos_pares = multiplos_pares.concat(j.toString())
            } else {
                multiplos_pares = multiplos_pares.concat(', ' + j.toString())
            }
        }
    }
    console.log(multiplos_pares)
 }

 // Function 8: Even numbers between 1 and any number
 function even_numbers_a (number1, number2) {
    console.log(`Números pares entre ${number1} y ${number2}`)
    let multiplos_pares = 'Múltiplos de 2: '
    let aux = 0
    for (let j = number1; j < number2 + 1; ++j) {
        if (j % 2 === 0) {
            ++aux
            if(aux === 1) {
                multiplos_pares = multiplos_pares.concat(j.toString())
            } else {
                multiplos_pares = multiplos_pares.concat(', ' + j.toString())
            }
        }
    }
    console.log(multiplos_pares)
 }

 // Function 9: Multiples of any number
 function any_multiple (number1, number2, multiple) {
    console.log(`Números múltiplos de ${multiple} entre ${number1} y ${number2}`)
    let factor = `Múltiplos de ${multiple}: `
    let aux = 0
    for (let j = number1; j < number2 + 1; ++j) {
        if (j % multiple === 0) {
            ++aux
            if(aux === 1) {
                factor = factor.concat(j.toString())
            } else {
                factor = factor.concat(', ' + j.toString())
            }
        }
    }
    console.log(factor)
 }
 

 // Function 10: Palíndromos
 function palindrome (text) {
    let word_without_space = ''
    let aux_array = []
    aux_array = text.split(' ', text.length)
    for (let n = 0; n < aux_array.length; ++n) {
        word_without_space = word_without_space.concat(aux_array[n])
    }
    //console.log(word_without_space)
    let wordaux2 = ''
    for (let l = word_without_space.length; l >= 0; --l) {
        wordaux2 = wordaux2.concat(word_without_space.charAt(l))
    }
    //console.log(wordaux2)
    let aux4 = 0
    for (let m = 0; m < word_without_space.length; ++m) {
        if(word_without_space.charAt(m).toLowerCase === wordaux2.charAt(m).toLowerCase) {
            ++aux4
        }
    }
    //console.log(aux4)
    if(aux4 === word_without_space.length) {
        console.log(`${text} es un palíndromo`)
    } else {
        console.log(`${text} no es un palíndromo`)
    }
 }