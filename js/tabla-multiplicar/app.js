function obtenerValor() {
    let entrada = document.getElementById('num');
    let valor = entrada.value;

    let entrada2 = document.getElementById('num2');
    let valor2 = entrada2.value;

    let entrada3 = document.getElementById('num3');
    let valor3 = entrada3.value;
    console.log(valor,valor2, valor3);
    escribirTM(valor,valor2, valor3);
}

function escribirTM(j, a, z) {
    document.write(`<h2> Tabla de multiplicar del ${j}</h2>`);
    document.write("<ul>");
    for (i = parseInt(a); i <= z; i++) {
        document.write("<li>");
        document.write(j + "x" + i + "=" + j * i);
        document.write("</li>");

    }
    document.write("</ul>");
    document.write('<button onclick="refresh()">reset</button>');
}

function refresh(){
    location.reload();
}
