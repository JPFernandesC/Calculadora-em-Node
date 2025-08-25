function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Erro: divisão por zero!';
    }
    else
    return a / b;
}

function aoQuadrado(a) {
    return a * a;
}

function raizQuadrada(a) {
    if (a < 0) {
        return 'Erro: número negativo!';
    }
    else
    return Math.sqrt(a);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada
};
