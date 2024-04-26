/***** NOTAS IMPORTANTES *****/
// Refatoração é um ponto muito importante na legibilidade do código, recomendável fazer com frequência. Lembrando que refatorar é reorganizar seu código em "subfunções", alimentando as funções que "printam" com essas subfunções ou operando, com as subfunções, o "back-end" do seu código em um grupo com uma lógica mais clara, resumindo: deixando seu código organizado, melhor legível, mais conciso e responsivo sem alterar seu funcionamento;
// Refatoração EXTERNA - Dividindo responsabilidades: Neste projeto, faremos refatoração externa também, que é separar os arquivos JS para fins específicos, tornando este código mais conciso e legível também. Essa seria até uma camada a mais de organização dividindo as responsabilidades dos códigos, ou seja, não será apenas um código que carregará todas as responsabilidades.
// Indentação é imprescindível, ou seja, separar por hierarquia seu código através do espaçamento tabulado (Tab);

// console.log são as mensagens que nós queremos inserir no console abaixo.
console.log("> Para os arquivos externos de js rodarem, é necessário indexa-lo no index.html utilizando a tag 'script'. No nosso projeto, temos a declaração indexando o sketch.js;");
console.log("* imagens.js encontra-se indexado no index.html com sucesso;");
console.log("* ator.js encontra-se indexado no index.html com sucesso;");
console.log("* carro.js encontra-se indexado no index.html com sucesso;");
console.log("* p5.collide2d.js (v0.7.3) encontra-se indexado no index.html com sucesso. Este código - que confere a colisão - foi escrito por outro autor, adquirido através da biblioteca fornecida pelo p5;");
console.log("> Verificar a explicação sobre listas e seu comportamento no 'carro.js';");
console.log("> Tanto as variávels de imagens quanto sons estão sendo carregadas no arquivo imagens.js;");
console.log("> MINHAS ALTERAÇÕES: Acrescentei movimentação horizontal; com a movimentação horizontal e para manter o ator dentro da tela sem travá-lo, criei uma função para retorná-lo uma posição anterior ao encostar na tela; alterações de configuração do jogo;");


/***********************************
***** PRELOAD / SETUP / DRAW *******
************************************/

function setup(){
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw(){
  background(imagemEstrada); // Nosso plano de fundo. Por padrão, vem 220 (cor cinza). Ao colocarmos nossa variável imagemEstrada (o qual teve uma imagem carregada no preload), retornará como background (plano de fundo) o que for carregado nesta variável.
  mostraTrigo();
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao(); // Código escrito no ator.js
  mostraPontos();
  marcaPontos();
}

function touchStarted () {
  if (!fullscreen()) {
    fullscreen(true);
  }
}

document.ontouchmove = function(event) {
    event.preventDefault();
};