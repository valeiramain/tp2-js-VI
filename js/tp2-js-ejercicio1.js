// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt('Ingrese la edad: '))

if (!isNaN(edad)){
    if(edad>=18){
        document.writeln('Tiene edad autorizada para conducir')
    }else{
        document.writeln('No tiene edad autorizada para conducir')
    }
}else{
    document.writeln('Ingrese un número valido para la edad')
}