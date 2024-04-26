/**********************************
****** IMAGENS E SONS DO JOGO *****
***********************************/

/**********************************
***** DECLARAÇÃO DE VARIÁVEIS *****
***********************************/

// CARREGA IMAGENS
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemTrigo;

// CARREGA SONS
let somTrilha;
let somColisao;
let somPonto;

/***********************************
** REFATORAÇÃO (área das funções) **
************************************/

function preload(){
  // Preload imagem
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  imagemTrigo = loadImage("imagens/trigo.png");
  // Preload som
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}