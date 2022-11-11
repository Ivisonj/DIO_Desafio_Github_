//Dssafio 1---------------------------------------------------------------------------------------------------------------
/* 
Faça um programa para calcular o valor de uma viagem 

você terá 3 variáveis: 
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM 
*/

 const precoCombustivel = 5.79;
 const KmPorLitro = 12;
 const distancia = 1580; 

 const litrosConsumidos = distancia / KmPorLitro;
 const valorGasto = litrosConsumidos * precoCombustivel;
 console.log(valorGasto.toFixed(2));