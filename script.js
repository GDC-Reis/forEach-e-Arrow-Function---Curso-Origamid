// forEach
// Constantemente vamos selecionar uma lista de itens do DOM.
// A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//     console.log(item);
// })

imgs.forEach(function(valorAtual, index, array){
    console.log(valorAtual, index, array);
})

// forEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método.
// Caso não possua, o ideal é transformá-los em um array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
    console.log(item);
})

// Arrow Function
// Sintaxe curta em relação a function expression.
// Basta removermos a palavra chave function e adicionarmos a fat arrow => após os argumentos

const imagens = document.querySelectorAll('img');

imagens.forEach((item) => {
    console.log(item);
})

// Argumentos e Parênteses

const img = document.querySelectorAll('img');

// Argumento único não precisa de parênteses 
img.forEach(item => {
    console.log(item);
})

// Multiplos argumentos precisam de parênteses 
img.forEach((item, index) => {
    console.log(item, index);
})

// Sem argumentos precisa de parênteses, mesmo vazio
let i = 0;
img.forEach(() => {
    console.log(i++);
})

// Return 
// É possivel omitir as chaves {} para uma função que retorna uma linha.

const imagens2 = document.querySelectorAll('img');

imagens2.forEach(item => 
    console.log(item)
);

imagens2.forEach(item => console.log(item));

// Não é permitido fechar linha com ;

// Exercicios

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
    console.log(item);
})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText);
})

// Como corrigir os erros abaixo: 
const imagensExercicio = document.querySelectorAll('img');

imagensExercicio.forEach((item, index) => {
    console.log(item, index);
});

let iExercicio = 0;
imagensExercicio.forEach(() => {
    console.log(iExercicio++)
});

imagensExercicio.forEach(() => iExercicio++);