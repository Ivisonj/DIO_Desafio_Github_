//Desafio 1---------------------------------------------------------------------------------------------------------------
/* 
Faça um programa para calcular o valor de uma viagem 

você terá 3 variáveis: 
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM 
*/

//  const precoCombustivel = 5.79;
//  const KmPorLitro = 12;
//  const distancia = 1580; 

//  const litrosConsumidos = distancia / KmPorLitro;
//  const valorGasto = litrosConsumidos * precoCombustivel;
//  console.log(valorGasto.toFixed(2));

 //-------------------------------------------------------------------------------------------------------------------
 //---Desafio 2
/* Faça um programa para calcular o valor de uma viagem 

você terá 5 variáveis: 
1 - preço do etanol;
2 - preco da gasolina;
3 - o tipo de combustível que está no seu carro;
2 - gasto médio de combustível do carro por KM;
3 - distância em KM 
*/
//  const precoDaGasolina = 6.66;
//  const precoDoEtanol = 5.79;
//  const KmPorLitro = 10;
//  const distancia = 100; 
//  const tipoCombustivel = 'Gasolina'

//  const litrosConsumidos = distancia / KmPorLitro;

//  if(tipoCombustivel === 'Etanol'){
//      const valorGasto1 = litrosConsumidos * precoDoEtanol; 
//      console.log(valorGasto1);
//  } else {
//      const valorGasto2 = litrosConsumidos * precoDaGasolina;
//      console.log(valorGasto2);
//  }

//-------------------------------------------------------------------------------------------------------------------
/* 
//---Desafio 3
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
sua média e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou
*/

// const nota1 = 3.5;
// const nota2 = 4.5;
// const nota3 = 5.0;

// const mediaAluno = (nota1 + nota2 + nota3) / 3;

// if (mediaAluno >= 7) {
//     console.log(`Média: ${mediaAluno.toFixed(2)}. Aprovado!`);
// } else if (mediaAluno >= 5 && mediaAluno < 7) {
//     console.log(`Média: ${mediaAluno.toFixed(2)}. Recuperação!`);
// } else if (mediaAluno < 5) {
//     console.log(`Média: ${mediaAluno.toFixed(2)}. Recuperação!`);
// }

//---------------------------------------------------------------------------------------------------------------------
/* 
//---Desafio 4 
O IMC (Indice de Massa Corporal) é um critério da Oganização Mundial da Saúde para dar uma indicação sobre a 
condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5, Abaixo do peso;
- Entre 18.5 e 25, Peso normal;
- Entre 25 e 30, Acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave;
*/

// const peso = 71;
// const altura = 1.75;

// const IMC = peso / Math.pow(altura,2);
// //(altura * altura) = Math.pow(altura,2)

// if (IMC < 18.5) {
//     console.log(`IMC: ${IMC.toFixed(2)}. Abaixo do Peso!`);
// } else if (IMC >= 18.5 && IMC < 25) {
//     console.log(`IMC: ${IMC.toFixed(2)}. Peso Normal!`);
// } else if (IMC >= 25 && IMC < 30) {
//     console.log(`IMC: ${IMC.toFixed(2)}. Acima do Peso!`);
// } else if (IMC >= 30 && IMC < 40) {
//     console.log(`IMC: ${IMC.toFixed(2)}. Obeso!`);
// } else if (IMC >= 40) {
//     console.log(`IMC: ${IMC.toFixed(2)}. Obesidade Grave!`);
// }

//-------------------------------------------------------------------------------------------------------------------
/*
//---Desafio 5:
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
4 - Em duas vezes, preço normal de etiqueta sem juros;
5 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/
// const precoEtiqueta = 100;
// const formaDePagamento = 4;

// if (formaDePagamento === 1) {
//     console.log(precoEtiqueta - (precoEtiqueta * 0.1));
// } else if (formaDePagamento === 2) {
//     console.log(precoEtiqueta - (precoEtiqueta * 0.15));
// } else if (formaDePagamento === 3) {
//     console.log(precoEtiqueta);
// } else if (formaDePagamento === 4) {
//     console.log(precoEtiqueta + (precoEtiqueta * 0.1));
// }

//------------------------------------------------------------------------------------------------------------------------------
//---Desafio 6
//Utilizando funções
// function incrementarJuros(valor, percentualJuros) {
//      const valorAcrescimo = (percentualJuros / 100) * valor;
//      return valor + valorAcrescimo;
//  }
//  console.log(incrementarJuros(100, 10));

 //------------------------------------------------------------------------------------------------------------------------------
 //---Desafio 7
 
//---Exemplo do IMC 
/* O IMC (Indice de Massa Corporal) é um critério da Oganização Mundial da Saúde para dar uma indicação sobre a 
condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elaore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5, Abaixo do peso;
- Entre 18.5 e 25, Peso normal;
- Entre 25 e 30, Acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave;
*/
// function calcularImc(peso, altura) {
//     return peso / Math.pow(altura, 2);
// }

// function classificarImc(imc) {
//     if (IMC < 18.5) {
//         return `IMC: ${IMC.toFixed(2)}. Abaixo do Peso!`;
//     } else if (IMC >= 18.5 && IMC < 25) {
//         return `IMC: ${IMC.toFixed(2)}. Peso Normal!`;
//     } else if (IMC >= 25 && IMC < 30) {
//         return `IMC: ${IMC.toFixed(2)}. Acima do Peso!`;
//     } else if (IMC >= 30 && IMC < 40) {
//         return `IMC: ${IMC.toFixed(2)}. Obeso!`;
//     } else if (IMC >= 40) {
//         return `IMC: ${IMC.toFixed(2)}. Obesidade Grave!`;
//     }

// }

// const peso = 71;
// const altura = 1.75;

// const IMC = calcularImc(peso, altura);
// console.log(classificarImc(IMC))

//-------------------------------------------------------------------------------------------------------------------
//---Desafio 8
// function escreverMeuNome(nome) {
//     return 'Meu nome é:' + nome;
// }

// function verificarIdade(idade) {
//     if(idade > 18){
//         console.log(escreverMeuNome('Ivison') + ', Maior!')
//     } else {
//         console.log(escreverMeuNome('Ivison') +  ', Menor!')
//     }
// }
// verificarIdade(25)

//------------------------------------------------------------------------------------------------------------------
//Desafio 9
//--- Refazendo o Desafio 5:
/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
4 - Em duas vezes, preço normal de etiqueta sem juros;
5 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/
// function aplicarDesconto(valor, desconto) {
//     return valor - (valor * (desconto / 100))
// }

// function aplicarjuros(valor, juros) {
//     return valor + (valor * (juros / 100))
// }


// function compras(formaDePagamento){
//     const precoEtiqueta = 100;

//     if (formaDePagamento === 1) {
//         console.log(aplicarDesconto(precoEtiqueta, 10));
//     } else if (formaDePagamento === 2) {
//         console.log(aplicarDesconto(precoEtiqueta, 15));
//     } else if (formaDePagamento === 3) {
//         console.log(precoEtiqueta);
//     } else if (formaDePagamento === 4) {
//         console.log(aplicarjuros(precoEtiqueta, 10));
//     }

// }
// compras(1)

//-----------------------------------------------------------------------------------------------------------------------
// ---Objeto
// const pessoa = {
//     nome: 'Ivison Joel ',
//     idade: 26,

//     descrever: function() {
//         console.log(`Meu nome é: ${this.nome} e  minha idade é ${this.idade}`);
//     }
// };
// pessoa.nome = 'Sirlane'; //subscrever o nome e a idade 
// pessoa.idade = 19

// pessoa.descrever();

//-----------------------------------------------------------------------------------------------------------------

//---classe
//Classe é a definição e instância é a ocorrencia 
// class Pessoa {
//     nome;
//     idade;

//     descrever () {    //dentro de uma classe não precisa colocar a palavra 'function'
//         console.log(`Meu nome é: ${this.nome} e  minha idade é ${this.idade}`);
//     }
// }

// //a classe 'Pessoa' foi criada, agora vamos instanciar 
// const ivison = new Pessoa();
// ivison.nome = 'Ivison Joel';
// ivison.idade = 25;

// console.log(ivison);

//---Exemplo 2
// class Pessoa2 {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome,idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2022 - idade;
//     }
// }
// const Sirlane = new Pessoa2('Sirlane', 19);
// console.log(Sirlane);

//-------------------------------------------------------------------------------------------------------------------
/*
//---Desafio: classes
1 - Crie uma classe para representar carros.
2 - Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
3 - Crie um método que dado a quantidade de quilômetros e o preço de combustível nos dê o valor gasto em 
reais para realizar este percurso.
*/

// class Carro {
//     marca;
//     cor;
//     gastoMedio;

//     constructor(marca, cor, gastoMedio) {
//         this.marca = marca
//         this.cor = cor
//         this.gastoMedio = gastoMedio
//     }

//     calcularValorDaViagem(distancia, precoCombustivel) {
//         const litrosConsumidos = distancia / this.gastoMedio;
//         const valorGasto = litrosConsumidos * precoCombustivel

//         return valorGasto.toFixed(2)
//     }

// }
// const uno = new Carro('Uno', 'Azul', 12);
// console.log(uno.calcularValorDaViagem(70, 5.00));

//----------------------------------------------------------------------------------------------------------------------
//---Desafio 
/*
Crie uma classe para representar pessoas.
1 - Para cada pessoa teremos os atributos: nome, peso, altura.
2 - As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
3 - Instancie uma pessoa chamada José que tenha 70kg de peso, 1,75 de altura e peça ao José para dizer
o valor do seu IMC;
*/
// class Pessoa3 {
//     nome;
//     peso;
//     altura;

//     constructor(nome, peso, altura) {
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     calcularImc() {
//         const calculoImc = this.peso / (Math.pow(this.altura, 2));
//         return calculoImc.toFixed(2);
//     }

//     classificarImc() {
//         const IMC = this.calcularImc()

//         if (IMC < 18.5) {
//                     return `IMC: ${IMC}. Abaixo do Peso!`;
//                 } else if (IMC >= 18.5 && IMC < 25) {
//                     return `IMC: ${IMC}. Peso Normal!`;
//                 } else if (IMC >= 25 && IMC < 30) {
//                     return `IMC: ${IMC}. Acima do Peso!`;
//                 } else if (IMC >= 30 && IMC < 40) {
//                     return `IMC: ${IMC}. Obeso!`;
//                 } else if (IMC >= 40) {
//                     return `IMC: ${IMC}. Obesidade Grave!`;
//                 }
//     }
// }

// const jose = new Pessoa3('José', 70, 1.75);
// console.log(jose.classificarImc());

// const maria = new Pessoa3('Maria', 100, 1.55);
// console.log(maria.classificarImc())

//--------------------------------------------------------------------------------------------------------------------------------
//---Desafio Array
/*
Crie um programa que dado um número imprima a sua tabuada
*/
function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} + ${i} = ${numero + i}`);
    }
}
tabuada(5);
