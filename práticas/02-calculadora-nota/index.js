console.log("#### Projeto 02 - Calculadora de Nota ####")

// importo e executo o prompt-sync
let prompt = require('prompt-sync')()

// Pergunta para o usuário o nome dele e captura a resposta dele para dentro da variável nome
let nome = prompt("Qual é o seu nome?")

// Usando o nome capturado
console.log("Olá " + nome)

// Calculo da nota do IESB
let { CalcularNotaA1, CalcularNotaA2, CalcularNotaFinal } = require('./CalculadoraNota.js')

console.log('#### Calculadora Nota A1 ####')
let exercícioA1 = parseFloat(prompt("Qual a sua nota e exercícios?"))

let trabalhoA1 = parseFloat(prompt("Qual a sua nota de trabalhos?"))

let provaA1 = parseFloat(prompt("Qual a sua nota de prova?"))

let notaA1 = CalcularNotaA1 (exercícioA1, trabalhoA1, provaA1)

console.log("Nota A1calculada: " + notaA1)
console.log("#### Finalizado calculo Nota A1 ####")
