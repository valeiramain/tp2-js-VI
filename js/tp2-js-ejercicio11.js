//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

//Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


const nombre1 = prompt('Ingrese nombre de la 1° persona: ')
const edad1 = parseInt(prompt('Ingrese edad de la 1° persona: '))
const nombre2 = prompt('Ingrese nombre de la 2° persona: ')
const edad2 = parseInt(prompt('Ingrese edad de la 2° persona: '))
const nombre3 = prompt('Ingrese nombre de la 3° persona: ')
const edad3 = parseInt(prompt('Ingrese edad de la 3° persona: '))

console.log(Math.max(edad1, edad2, edad3))
const edadMaxima = Math.max(edad1, edad2, edad3)

if (edadMaxima === edad1) {
    document.writeln(`La persona mas grande es ${nombre1} y tiene ${edad1} años`)
} else if (edadMaxima === edad2) {
    document.writeln(`La persona mas grande es ${nombre2} y tiene ${edad2} años`)
} else {
    document.writeln(`La persona mas grande es ${nombre3} y tiene ${edad3} años`)
}