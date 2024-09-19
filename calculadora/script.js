alert("Bem - vindo a calculadora! Digite o que você irá fazer: ")

var calc = 1

while(calc == 1) {

var op = Number(prompt("1 - SOMA, 2 - SUBTRAÇÃO, 3 - MULTIPICAÇÃO, 4 -DIVISÃO"))
var n1 = Number(prompt("Digite o primmeiro valor: "))
var n2 = Number(prompt("Digite o segundo valor: "))

switch(op) {
    case 1 :
        result = n1 + n2
        break

    case 2 :
       result = n1 - n2
       break

    case 3 :
        result = n1 * n2
        break

     case 4 :
        result = n1 / n2
        break

        default:
            alert("ERROR!! Essa opção não existe!")
}

alert("Resultado é " + result.toFixed(2))
 calc = prompt("Para realizar outra 1!, para sair digite 2!: ")
}
