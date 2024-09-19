function mVal(){

var v1 = Number(prompt("Digite o primeiro valor: "))
var v2 = Number(prompt("Digite o segundo valor: "))
var v3 = Number(prompt("Digite o terceiro valor: "))

var m = v1

if(v2 > m){
    m = v2
}

else if ( v3 > m){
    m = v3
}

alert("O maior valor é: " + m)
}

mVal()
