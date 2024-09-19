function calcImc() {
const n = prompt("Qual seu nome? ");
 
alert("Bem-vindo " + n + " ao calculador de IMC!! Coloque o '.' para separar casas decimais");
 

const p = parseFloat(prompt("Digite seu peso: "));
const h = parseFloat(prompt("Digite sua altura: "));

const result = p / (h * h);

if(result < 18.5 ) {
    alert(n + " seu IMC é " + result.toFixed(2) + "você é magro!");
}

else if (result > 18.5 && result < 24.5){
    alert(n + " seu IMC é " + result.toFixed(2) + " você está com peso normal!");
}

else if(result > 25 && result < 29.9){
    alert(n + " seu IMC é " + result.toFixed(2) + " você está com sobrepeso!");
}

else if(result > 30 && result < 39.9){
    alert(n + " seu IMC é " + result.toFixed(2) + " você está com obesidade!");
}

else if(result > 40){
    alert(n + " seu IMC é " + result.toFixed(2) + " você está com obesidade grave!");
}
    
}

calcImc()



    
    