// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


const filas = parseInt(prompt('Ingresa la cantidad de filas: '))
const columnas = parseInt(prompt('Ingresa la cantidad de columnas: '))

let casilleros = filas * columnas

document.writeln(`<table class="table table-striped"><tbody>`)

for (let ifilas = 1; ifilas <= filas; ifilas++) {
    document.writeln(`<tr>`)
    for (let icolumnas = 1; icolumnas <= columnas; icolumnas++) {
        document.writeln(`<td>${casilleros--}</td>`)
    }
    document.writeln(`</tr>`)
}

document.writeln(`</tbody></table>`)