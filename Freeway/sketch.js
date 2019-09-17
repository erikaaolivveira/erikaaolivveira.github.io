function setup() {
createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada); 
  if(!(placar >= 10 || placar2 >=10))
  jogo();
  else 
    mostraVencedor();
  }//Fim do Draw


function mostraVencedor(){
  if(placar >= 10){
    fill(255,130,0);//Laranja
    //Metade direita da tela
    textAlign(CENTER);
    fill(0);//Texto preto
    noStroke();
    textSize(30);
    text("Lado direito é campeão",300,200);
  }else{//copia e cola tudo ali de cima!
    fill(255,130,0);//Laranja
    //Metade esquerda da tela
    textAlign(CENTER);
    noStroke();
    fill(0);//Texto preto
    textSize(30);
    text("Lado esquerdo é campeão",300,200);
  }
}

function jogo(){
 mostraAtor();
movimentaAtor();
mostraCarro();
movimentaCarro(); 
verificaColisao();
mostraPlacar();
  
mostraAtor2();
movimentaAtor2();
verificaColisao2();
mostraPlacar2();

}
 