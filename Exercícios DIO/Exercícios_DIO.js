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

const nota1 = 3.5;
const nota2 = 4.5;
const nota3 = 5.0;

const mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno >= 7) {
    console.log(`Média: ${mediaAluno.toFixed(2)}. Aprovado!`);
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log(`Média: ${mediaAluno.toFixed(2)}. Recuperação!`);
} else if (mediaAluno < 5) {
    console.log(`Média: ${mediaAluno.toFixed(2)}. Recuperação!`);
}