// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:



// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1


const texto = prompt('Ingrese un texto:').toLocaleLowerCase()
let vocal = ''
let posicion = 0
for (let i = 0; i < texto.length; i++){
    if(texto.charAt(i)==='a' || texto.charAt(i)==='e' || texto.charAt(i)==='i' || texto.charAt(i)==='o' || texto.charAt(i)==='u'){
        vocal = texto.charAt(i)
        posicion = i
        i = texto.length
    }
}

document.writeln(`La Vocal: "${vocal}", está en la posición "${posicion}"`)