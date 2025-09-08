// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

const nota = parseInt(prompt('Ingrese una Nota de 0 a 10:'))

if (!isNaN(nota)) {
    if (nota >= 0 && nota <= 10) {
        if (nota >= 0 && nota <= 2) {
            document.writeln('La nota es: Muy Deficiente.')
        }
        if (nota >= 3 && nota <= 4) {
            document.writeln('La nota es: Insuficiente.')
        }
        if (nota >= 5 && nota <= 6) {
            document.writeln('La nota es: Suficiente.')
        }
        if (nota === 7) {
            document.writeln('La nota es: Bien.')
        }
        if (nota >= 8 && nota <= 9) {
            document.writeln('La nota es: Notable.')
        }
        if (nota === 10) {
            document.writeln('La nota es: Sobresaliente.')
        }
    } else {
            document.writeln('La nota no está entre 0 y 10')
    }
} else {
        document.writeln('Ingrese un número valido de 0 a 10 para indicar la Nota')
}    