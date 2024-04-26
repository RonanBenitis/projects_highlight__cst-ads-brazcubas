/**********************************
***** DECLARAÇÃO DE VARIÁVEIS *****
***********************************/

// FUNCIONAMENTO PLAYER
let yAtor = 366;
let xAtor = 85;
let velocidadeAtor = 3; // Essa variável dá mais legibilidade ao código e possibilita também criar a função mantemDentroTela(). Configurei velocidade horizontal sendo metade da vertical.
let dimensaoAtor = 30;
let colisao = false;
let pontos = 0;

/***********************************
***** PRELOAD / SETUP / DRAW *******
************************************/

function movimentaAtor(){

distanciaY = yTrigo - yAtor;
distanciaX = xTrigo - xAtor;
range1 = 0.2;
range2 = 50;
  
  /* *** SNIPET "NORMALIZADOR" DE MOVIMENTO DO ATOR ***
  Veja a lógica no grafico: pasta imagens/logica-aprox */

    if (distanciaY <= range1 && distanciaY >= -range1){
    yAtor = yTrigo;
  } else if( distanciaY > range1 && distanciaY < range2 ){
    velocidadeY = 2;
    yAtor += velocidadeY;
  } else if ( distanciaY < -range1 && distanciaY > -range2 ){
    velocidadeY = 2;
    yAtor -= velocidadeY;
  } else {
    velocidadeY = distanciaY;
    yAtor += velocidadeY/50;
  }
 
    if (distanciaX <= range1 && distanciaX >= -range1){
    xAtor = xTrigo;
  } else if( distanciaX > range1 && distanciaX < range2 ){
    velocidadeX = 2;
    xAtor += velocidadeX; // Ator vai pra cima
  } else if ( distanciaX < -range1 && distanciaX > -range2 ){ // Quando distancia no Y entre ator e trigo for < 0.1 (trigo abaixo do ator)
    velocidadeX = 2;
    xAtor -= velocidadeX; // Ator vai pra baixo
  } else {
    velocidadeX = distanciaX;
    xAtor += velocidadeX/50;
  }
      
  mantemDentroTela();
}

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, dimensaoAtor, dimensaoAtor); // Comando para mostrar uma imagem, sintaxe: image(source, pos_x, pos_y, larg_img [op], alt_img[op]);
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){ // lembrando que "imagemCarros" é uma lista criada no imagens.js
    colisao = collideRectCircle(xCarros[i], yCarros[i]-15, comprimentoCarro, alturaCarro, xAtor, yAtor, dimensaoAtor-5); // Disse que a colisão sera yCarro-15 pois o ponto de colisão, através de teste, aparentou ocorrer abaixo da imagem. Com -15 estamos subindo o ponto de colisão.
    if (colisao){ // Se colisão for = true;
      print("Colidiu!"); // Curiosidade: Se testarmos a colisão FORA do código de loop, só será registrada a colisão do ultimo item da lista imagemCarros (carro2, o amarelo), pois, dentro do loop far-se-a a testagem do indice 0, depois 1, depois 2 e, só assim, sai do loop armazenando o valor do indice como 2, então, se formos testar o valor na saida do loop será sempre 2, se testarmos dentro do loop será 0, depois 1, depois 2.
      somColisao.play();
      retornaAtorPontoInicial(); // Este comando só deve ser posicionado aqui, pois, se for fora do if, o comando ficará sendo executado constantemente impedindo a movimentação do ator.
      if (pontosMaiorQueZero()){ // Faz com que não seja possivel pontuação negativa
        pontos -= 1;
      }
    }
  }
}

function retornaAtorPontoInicial(){ // Só é chamada pela função verificaColisao
  yAtor = 366;
  xAtor = 85;
  yTrigo = 366;
  xTrigo = 85;
}

function mostraPontos(){
  textAlign(CENTER); // Fará com que todas as alterações feitas em texto usará como referência o centro, ou seja, alinharemos o texto ao centro.
  textSize(20);
  fill(color('#DE6B9C'));
  text("Pontuação: " + pontos, width/5, 26); // sintaxe: text(o-que-quero-exibir, pos_x, pos_y); Width/5 faz com que o texto esteja alinhado na posição x referente a divisão da largura do Canvas por 5.
}

function marcaPontos(){
  if (yAtor < 15){
    pontos += 1;
    somPonto.play();
    retornaAtorPontoInicial(); // Se não resetarmos a posição do Ator, ele ficará eternamente fazendo ponto parado no y que seja menor que 15.
  }
  //print(yAtor); // Utilize este comando caso queira verificar o y do Ator precisamente para ver em que momento será marcado o ponto.
}

function pontosMaiorQueZero(){ // Essa função foi criada somente para tirar a responsabilidade da função verificaColisao de verificar se a pontuação é maior que zero ou não e tornar o código melhor legível.
 return pontos > 0; // É necessária a utilização do comando return quando queremos que retorne uma operação. Se não colocarmos retorno, toda vez que pontosMaiorQueZero for chamado, nada acontecerá pois ele fará essa verificação (pontos > 0) e retornará nada, pois o valor ficará contido no pontosMaiorQueZero. Com o retorno, dizemos: Toda vez que essa função for chamada, retorne o seguinte comando (e não apenas fazer sua execução);
}

function mantemDentroTela(){
  if (xAtor < 0){
    xAtor += velocidadeAtor;
  }
    if (xAtor > 500-dimensaoAtor){
    xAtor -= velocidadeAtor;
  }
    if (yAtor > 366){
    yAtor -= velocidadeAtor;
  }
}