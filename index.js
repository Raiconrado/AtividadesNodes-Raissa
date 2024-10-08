const prompt = require('prompt-sync');
const entrada = prompt();

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

const loginCerto = "Raissa";
const senhaCerta = 12345;
console.log("                               -------------------");
console.log("                               AGENCIA DE VIAGENS")
console.log("                               ------------------- ");
console.log("Faça seu login");

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto){
  console.log("Login Incorreto");
  login = entrada("Digite seu login novamente: ");
}

while(senha != senhaCerta){
  console.log("senha incorreta: ");
}

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

var nomeComprador = entrada("Qual é seu nome?");
var idadeComprador = entrada("qual é sua idade?");

if(idadeComprador < 18){
  console.log("")
  console.log(`Olá ${nomeComprador} vocẽ é de menor,não podera comprar as passagens já que a sua idade é ${idadeComprador} anos`);
}
if(idadeComprador >= 18){
  console.log(`Olá senhor(a) ${nomeComprador} podemos continuar com a sua compra, qual o seu destino?`)
}

