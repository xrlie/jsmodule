console.log('dom')

let title = document.createElement("h1")
let texto = document.createTextNode("Soy un título desde JS")
title.appendChild(texto)
document.getElementById('caja1').appendChild(title)

let parrafo = document.createElement("p")
let texto_parrafo = document.createTextNode("Soy un párrafo desde JS")
parrafo.appendChild(texto_parrafo)
document.getElementById('caja2').appendChild(parrafo)

let unordlist = document.createElement("ul")
let new_att = document.createAttribute("id")
new_att.value = "new_id"
unordlist.setAttributeNode(new_att)
document.getElementById('caja1').appendChild(unordlist)
let element1 = document.createElement("li")
unordlist.appendChild(element1)
let element2 = document.createElement("li")
unordlist.appendChild(element2)
let link1 = document.createElement("a")
let new_an1 = document.createAttribute("href")
new_an1.value = "https://www.google.com"
link1.setAttributeNode(new_an1)
element1.appendChild(link1)
let link2 = document.createElement("a")
let new_an2 = document.createAttribute("href")
new_an2.value = "https://github.com/xrlie/jsmodule/tree/master"
link2.setAttributeNode(new_an2)
element2.appendChild(link2)
let description1 = document.createTextNode("Item 1")
link1.appendChild(description1)
let description2 = document.createTextNode("Item 2")
link2.appendChild(description2)

let unordlist2 = document.createElement("ul")
let att = document.createAttribute("id")
att.value = "secundario"
unordlist2.setAttributeNode(att)
let new_struct = document.getElementById("new_id").innerHTML
document.getElementById('caja2').appendChild(unordlist2)
document.getElementById("secundario").innerHTML = new_struct

title.innerHTML = "Soy un título"

// solución tarea
let ul_element = ''
for (let i = 1; i<= 9; ++i) {
    ul_element += `<li>
                        <a href="">item ${i}</a>
                   </li>`
}
console.log(ul_element)
let box = document.getElementById('caja2')
box.innerHTML = ul_element