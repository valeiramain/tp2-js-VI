// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


let cadena = ""
do{
    const texto = prompt('Ingrese una cadena de texto:').toLocaleUpperCase()
    if(texto.trim()!==""){
        if (cadena ===""){
            cadena = texto
        }else{
            cadena += " - "+texto
        }
    }

} while (confirm("¿Continúa ingresando texto?"));

document.writeln("La cadena formada es: "+cadena)