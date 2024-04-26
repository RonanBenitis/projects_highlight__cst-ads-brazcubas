/***** NOTAS IMPORTANTES *****/
// ** LISTA ** : Estrutura onde inserimos os dados que queremos conseguindo recuperá-los através de indices. Indicamos que estamos criando uma lista: Utilizando colchetes '[]'. Tudo que colocarmos dentro dos colchetes fará parte da lista indicada. Isso tornará códigos que possuem os mesmos elementos mas com valores diferentes MUITO MAIS legível e organizado, pois não haverá necessidade de criar diversos códigos para a mesma função e, quanto houver uma alteração, alterar um por um. Nesse caso, temos 6 carros, a criação de lista faz com que não haja necessidade de criar 6 códigos para cada caracteristica destes elementos.
// ** INDICES ** : Indices são os valores que resgatamos de uma lista, onde, por padrão, sua primeira posição será equivalente a 0, segunda equivale a 1 e por aí vai.

/**********************************
***** DECLARAÇÃO DE VARIÁVEIS *****
***********************************/

// FUNCIONAMENTO CARROS
let xCarros = [600, 600, 600, 600, 600, 600]; // lista = [pos0, pos1, pos2, ...].
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidadeCarros = [8, 4.3, 5, 6, 3.8, 4]; // Criando listas dessa forma, o código fica MUITO MAIS CLARO e suas alterações ficam MUITO MAIS FACEIS de serem feitas por ter organizado so valores a serem alterados em um local só e por ter deixado mais claro também.
let comprimentoCarro = 70; // Criamos esta variável para tornar nosso código mais semantico, ou seja, uma função/comando/variável que por si só já explique o que está ocorrendo. Então, var semantica = Estou chamando as variáveis que sua unica função é melhorar a visibilidade do código como "var semantica".
let alturaCarro = 40; // var semantica

/***********************************
** REFATORAÇÃO (área das funções) **
************************************/

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){ // Sintaxe do for: for(declara-var; condição-para-repetir; fazer-isso-quando-repetir){executa tudo o que estiver dentro de chaves a cada repetição}; No nosso codigo usamos imagemCarros.length, este .length significa a quantidade total de items/dados dentro de uma lista, ou seja, enquanto nosso indice for menor do que a quandidade total de itens na lista, este laço repetirá.
    // i++ é a forma mais concisa e elegante de se dizer i = i + 1 (ou i += 1);
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); // Perceba que reduzimos bastante o código ao observar PADRÕES. Poderiamos fazer image(imagemCarro1, xCarro1, yCarro1, 50, 40), depois image(imagemCarro2, xCarro2, yCarro2, 50, 40) e por aí vai, mas, identificando PADRÕES e aplicando a ABSTRAÇÃO conseguimos deixar nosso código MUITO MAIS LIMPO e disponibilizar funções de fácil de alteração.
    // APLICAÇÃO DO LAÇO DE REPETIÇÃO - Aplicando o laço de repetição aqui conseguimos reduzir as linhas de código até no arquivo principal, uma vez que o programa calculará automaticamente os indices sem precisar que os inserimos.
    // print("o valor do i nesta repetição é" + i); // tire o comentario deste print para ver o indice constantemente alterando no console
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){ // Traduzindo o for: sintaxe-for(declaro variável; enquanto isso acontecer; faça isso){código que executará a cada repetição}, ou seja, for(declaro que uma variável chamada i é igual a 0; enquanto i for menor do que a quantidade de itens dentro do imagemCarros; soma 1 a i) {meu código};
    xCarros[i] -= velocidadeCarros[i]; // Lembrando: operador -= ou += significa um valor subtraido/somado por ele mesmo e outros valores que informaremos, ou seja, x += 5 é igual ao valor de x somando seu próprio valor a 5: x = x + 5. x += 5 é igual a x = x + 5.
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(x){
  return x < -80; /* Não é a forma mais enxuta do código, mas, o deixa mais claro e elegante. O que estamos dizendo aqui: retorne que X é menor que -80 toda vez que esta função for chamada, sendo o X tudo aquilo que colocarmos dentro dos parenteses quando chamarmos esta função. Observe o que acontece na função voltaPosicaoInicialDoCarro:
      
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
    
  ou seja:

  Se (xCarros[indice-atual] for menor que -80){o xCarros[indice-atual] será igual a 600}

Nomeamos a função como 'passouTodaATela' para facilitar a interpretação e, meio que é isso que acontece no momento que ele é resetado: Se o carro passar toda tela, volta ele pro lugar.

Esta função NÃO É CHAMADA no sketch.js porque foi uma função construída para atender, ser chamada, pela função voltaPosicaoInicialDoCarro e não, necessariamente, pela funçao draw.
    
*/
}