//15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt('Ingrese un texto:').toLocaleLowerCase()
let vocales = 0
for (let i = 0; i < texto.length; i++){
    if(texto.charAt(i)==='a' || texto.charAt(i)==='e' || texto.charAt(i)==='i' || texto.charAt(i)==='o' || texto.charAt(i)==='u'){
        vocales++
    }
}

document.writeln(`La cantidad de vocales del texto: "${texto}", es igual a ${vocales}`)