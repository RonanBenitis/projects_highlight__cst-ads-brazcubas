let dimensaoTrigo = 30;
let yTrigo = 366;
let xTrigo = 85;

function mostraTrigo(){

  if (touches.length > 0) {
    xTrigo = touches[0].x;
    yTrigo = touches[0].y;

 } 

  image(imagemTrigo, xTrigo, yTrigo, dimensaoTrigo, dimensaoTrigo);
}


