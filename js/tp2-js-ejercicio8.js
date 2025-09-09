// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

const cantNumeros = parseInt(prompt('Ingrese la cantidad de números para construir la pirámide (<=50):'))

if (cantNumeros <= 50) {
    // renglones
    for (let i = 1; i <= cantNumeros; i++) {
        //veces que se repite el numero en el renglon
        for (let numero = 1; numero <= i; numero++) {
            document.writeln(numero)
        }
        document.writeln("<br>")
    }
} else {
    document.writeln('Debe ingresar un número menor o igual a 50')
}