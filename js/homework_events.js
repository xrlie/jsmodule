// tarea
const koders_arr3 = ['Carlos',
                     'Alex',
                     'Brian',
                     'André',
                     'Nayeli',
                     'Ale',
                     'Oscar',
                     'Ruben',
                     'Omar',
                     'Ramón',
                     'Ronaldo',
                     'Oswaldo',
                     'Obama',
                     'Ofelia',
                     'Renata',
                     'Regina'
                    ]

// onchange()
// document.getElementById('orden').value
// 1 función
// 1 método
// usar innerHTML
const ordering_koders = option => {
    option === 'a' ? 
        koders_arr3.sort()
        :
        koders_arr3.sort().reverse()
    add_elements('#lista', koders_arr3.length, koders_arr3)
}