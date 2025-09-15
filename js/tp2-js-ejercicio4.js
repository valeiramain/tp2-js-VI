// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0
do{
    const numero = parseInt(prompt('Ingrese una número:'))
    if(isNaN(numero)){
        alert('El valor ingresado NO es un número')
    }else{
        suma += numero
    }

} while (confirm("¿Continúa ingresando números?"));

document.writeln("La suma de los números ingresados es: "+suma)