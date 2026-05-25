function obtenerValores() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese ambos números");
        return null;
    }

    return { num1, num2 };
}

function mostrarResultado(valor){
    document.getElementById("resultado").innerText = valor;
}

function sumar(){
    let d = obtenerValores();
    if(!d) return;
    mostrarResultado(d.num1 + d.num2);
}

function restar(){
    let d = obtenerValores();
    if(!d) return;
    mostrarResultado(d.num1 - d.num2);
}

function multiplicar(){
    let d = obtenerValores();
    if(!d) return;
    mostrarResultado(d.num1 * d.num2);
}

function dividir(){
    let d = obtenerValores();
    if(!d) return;

    if(d.num2 === 0){
        alert("No se puede dividir para cero");
        return;
    }

    mostrarResultado((d.num1 / d.num2).toFixed(2));
}