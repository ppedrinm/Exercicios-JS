let result;

do {
    var valReal = parseFloat(prompt("Digite o valor em reais a ser convertido!: "))

    var valDolar = valReal * 0.18
    var valEuro = valReal * 0.16

    alert("Valor em Dólar: " + valDolar.toFixed(2) + " US$.  Valor em Euro: " + valEuro.toFixed(2) + " €" )

    result = Number(prompt("Para realizar uma nova conversão digite 1!, para sair digite 2!: "))
} 
while (result == 1)
