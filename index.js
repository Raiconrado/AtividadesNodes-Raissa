const nomeCompleto = "Raissa Conrado da Silva";
const anoNascimento = 2005;
let anoAtual = 2024;
const idade = 19;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 20;
const NomeCompleto = " Raissa Conrado da Silva ";
const Faculdade = " medicina ";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade} `);

const listaDeViagens = new Array (
  `Estados Unidos`,
  `Dubai`, 
  `Canada`, 
  `Paris`, 
  `Egito`,
  `Londres`, 
  `Madrid`, 
  `Barcelona`
);
console.log(listaDeViagens);

console.log(listaDeViagens[7]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

const idadeComprador = 28;

if(idadeComprador < 18){
  console.log("infelizmente voce é menor de idade, nao podemos vender nossas passagens")
}
if(idadeComprador >= 18){
  console.log("parabens, voce e maior de idade, podemos vender para voce")
}