//let xCarros = 0;
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 98, 150, 210, 260, 320];
let velocidadesCarros = [2, 2.5 ,3 ,5, 4, 6]
let comprimentoCarros = [50, 50, 80, 50, 50, 70]
let altura = 40;

function mostraCarro(){
  for (let i=0; i< imagensCarros.length;i++){  
image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], altura);
  }
}

function movimentaCarro(){
  for(let i =0; i < imagensCarros.length; i++){
  xCarros[i] -= velocidadesCarros[i];
  
    if(xCarros[i]<-50){
    xCarros[i] = 600;
    }
  } 
     
}