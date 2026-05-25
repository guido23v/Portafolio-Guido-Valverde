function obtenerValores() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese ambos números");
        return null;
    }

    return { num1, num2 };
}

function sumar() {
    let datos = obtenerValores();
    if (!datos) return;

    document.getElementById("resultado").innerText =
        datos.num1 + datos.num2;
}

function restar() {
    let datos = obtenerValores();
    if (!datos) return;

    document.getElementById("resultado").innerText =
        datos.num1 - datos.num2;
}

function multiplicar() {
    let datos = obtenerValores();
    if (!datos) return;

    document.getElementById("resultado").innerText =
        datos.num1 * datos.num2;
}

function dividir() {
    let datos = obtenerValores();
    if (!datos) return;

    if (datos.num2 === 0) {
        alert("No se puede dividir para cero");
        return;
    }

    document.getElementById("resultado").innerText =
        datos.num1 / datos.num2;
}