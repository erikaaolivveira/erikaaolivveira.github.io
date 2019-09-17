//Ator
let yAtor = 371;
let xAtor = 100;
let colidiu = false;
let placar = 0;

function mostraPlacar(){
  if(yAtor < 15){
  placar += 1;
   voltaAtorParaPosicaoInicial();
    somPonto.play();
    }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
text(placar, 180, 30);
}

function verificaColisao(){
for (let i=0; i < imagensCarros.length; i++){

colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor, yAtor,5);
  if (colidiu){
  //console.log("Colidiu");
    if(colidiu){
    voltaAtorParaPosicaoInicial();
      somColidiu.play();
      
      if(placar > 0)
        placar -= 1;
    }
  }
 }
}

function voltaAtorParaPosicaoInicial(){
yAtor = 366;
}

function mostraAtor(){
image(imagemDoAtor,xAtor, yAtor, 30, 30);
}
function movimentaAtor(){
if (keyIsDown(UP_ARROW)) {
//Se a seta para cima for pressionada
//E o yAtor maior que 5, então sobe.
if(yAtor > 5)
yAtor -= 3;
} 
if (keyIsDown(DOWN_ARROW)) {
if(yAtor < 366)
yAtor += 3;
}
}