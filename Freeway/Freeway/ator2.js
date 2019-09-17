//Ator
let yAtor2 = 371;
let xAtor2 = 300;
let colidiu2 = false;
let placar2 = 0;




function mostraPlacar2(){
  if(yAtor2 < 15){
  placar2 += 1;
   voltaAtorParaPosicaoInicial2();
    somPonto.play();
    }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
text(placar2, 250, 30);
}

function verificaColisao2(){
for (let i=0; i < imagensCarros.length; i++){

colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor2, yAtor2,5);
  if (colidiu){
  //console.log("Colidiu");
    if(colidiu){
    voltaAtorParaPosicaoInicial2();
      somColidiu.play();
      
      if(placar2 > 0)
        placar2 -= 1;
    }
  }
 }
}

function voltaAtorParaPosicaoInicial2(){
yAtor2 = 366;
}

function mostraAtor2(){
image(imagemDoAtor2, xAtor2, yAtor2, 30, 30);
}
function movimentaAtor2(){
if (keyIsDown(87)) {
//Se a seta para cima for pressionada
//E o yAtor maior que 5, então sobe.
if(yAtor2 > 5)
yAtor2 -= 3;
} 
if (keyIsDown(83)) {
if(yAtor < 366)
yAtor2 += 3;
}
}