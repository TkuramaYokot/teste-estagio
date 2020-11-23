// Teste de logica: Contador de notas
// Criar um programa (Qualquer linguagem) que receba N argumentos, onde o primeiro é o valor a ser sacado e os demais as notas disponíveis.
// O resultado deve ser as combinações possíveis de quantidade e notas para saque.

let valor = prompt("Digite o valor a ser sacado")

let resto = Number(valor)

while(resto >= 100) {
    document.write('<img src="img/100.png">')
    resto = resto - 100
}

while(resto >= 50) {
    document.write('<img src="img/50.png">')
    resto = resto - 50
}

while(resto >= 20) {
    document.write('<img src="img/20.png">')
    resto = resto - 20
}

while(resto >= 10) {
    document.write('<img src="img/10.png">')
    resto = resto - 10
}

while(resto >= 5) {
    document.write('<img src="img/5.png">')
    resto = resto - 5
}

while(resto >= 2) {
    document.write('<img src="img/2.png">')
    resto = resto - 2
}

if(resto >0) {
    document.write("<br>Sobrou R$ " + resto.toFixed(2) + ", o valor será devolvido para a sua conta</br>")
}


console.log(valor)

