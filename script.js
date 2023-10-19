//***** Declaração de variáveis
/*var idade = 3
let nome = 'Daniel'
const altura = 175

// ***** Escopo global
const profissao = 'Medico'

if(profissao){
  console.log(profissao)
}

//***** Escopo de função
function mostraNome(nome) {
  return nome;
}

console.log(mostraNome("Mario"));
console.log(nome);


//***** Escopo de bloco
if(true){
  var usuario = 'Vendedor' // O var tem escopo global
  let usuario2 = 'Gerente'
  const usuario3 = 'Diretor'
}

console.log(usuario)
console.log(usuario2)
console.log(usuario3)

//***** Diferença entre let e const
const fruta = 'laranja'
let fruta2 = 'uva'

fruta = 'banana'
fruta2 = 'banana'
console.log(fruta2)

//***** Tipos de dados
const cor = 'azul'
const numero = 5
const isBoolean = true
const peso = null
let idade

console.log(cor, numero, isBoolean, peso, idade)

//***** Operadores lógicos
const num = '1'

if(num === '1'){
  console.log('Ok')
}

// Estruturas de decisão e repetição
let opt = 3

switch (opt) {
  case 1:
  console.log(1)
  break;
  case 2:
  console.log(2)
  break
  default:
  console.log('Qualquer')
  break;
}

for(i = 0; i < 10; i++){
  console.log(i)
}

//***** Arrays e objetos
let arr = []
arr = [1, 3]

arr.forEach(element => {
  console.log(element)
});

for(i=0; i<4; i++){
  console.log(arr[i])
}

arr.push(4)
arr.forEach(element => {
console.log(element)
});
arr.shift()
arr.forEach(element => {
  console.log(element)
});

// Metodos de strings
const o = 'Fernando'
const a = o.split(" ")
console.log(a)
const c = o.toLocaleLowerCase()
console.log(c)

// ***** Objetos
const aluno = {
  nome: 'Maria',
  idade: 20,
  nota: 8.5
}

aluno.altura = 178
console.log(aluno)

const {nome, nota, idade} = aluno
console.log(nome, idade, nota)

// ***** Funções

function somar(x, y){
  return x + y
}

console.log(somar(3,2));

(x, y) => {
  return x + y;
}

const somar2 = (x, y) => {
  return x + y
}


// string template e classes

class userController{
   static register = () =>{
    console.log('esta na classedd')
  }
};

userController.register(); 


array1 = [1, 2, 3, 4, 5];

// array1.pop();
// array1.shift();
// array1.push(5);

const result = array1.find((element) => element > 3);

console.log(result);


const firstName = "Fernando";
const lastName = "Nascimento";

console.log("Meu nome é: " + firstName + " " + lastName);
console.log(`Meu nome é: ${firstName} ${lastName}`);

console.log(2 + "1");
console.log(2 - "1");
*/
