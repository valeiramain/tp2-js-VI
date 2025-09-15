//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt('Ingrese un texto:').toLocaleLowerCase()
let textoReves = ''

for (let i = texto.length; i >= 0; i--){
    textoReves+=texto.charAt(i)
}

document.writeln(`El texto ingresado es: "${texto}", y escrito al reves queda: "${textoReves}"`)