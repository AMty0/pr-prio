// B é bolinha
// R é raquete


//variavel da B
let xBolinha = 300;
let yBolinha = 250;
let zBolinha = 25;
let raio = zBolinha /2;

//variavel da velocidade da B
let velocidadeX = 5;
let velocidadeY = 5;

//parametro R 
let Xraquete = 5;
let Yraquete = 145;
let alturaR = 100;
let larguraR = 10;

let colidiu = false; 

//raquete oponente
let XRoponente = 585;
let YRoponente = 145;
let velocidadeYoponente;
let velocidadeXoponente;

//placar player e bot
let meuspoints = 0;
let lolpoints = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarB();
  movimeB();
  verificaB();
  mostrarR(Xraquete, Yraquete);
  movimeR();
  mostrarR(XRoponente,YRoponente);
  movimentaRoponente();
  colisaoraquete(Xraquete,Yraquete);
  colisaoraquete(XRoponente,YRoponente);
  incluiPlacar();
  marcarpontos();
}

function mostrarB(){
  circle(xBolinha, yBolinha, zBolinha);
  
}

function movimeB(){
  yBolinha += velocidadeY;
  xBolinha += velocidadeX;
}

function verificaB(){
  
   if(xBolinha + raio> width || xBolinha - raio < 0){
    velocidadeX *= -1;
  } 
  
    if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeY *= -1;
  } 
}


function mostrarR(x,y){
  rect(x, y, larguraR, alturaR,);
  
}


function movimeR(){
  if (keyIsDown(UP_ARROW)){
    Yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    Yraquete += 10;
  }

}  
  
function movimentaRoponente(){
  velocidadeYoponente = yBolinha -YRoponente -larguraR / 2 -60 ;
  
  YRoponente += velocidadeYoponente;
}

 function colisaoraquete(x,y){
   colidiu = collideRectCircle(x, y, larguraR, alturaR, xBolinha, yBolinha,raio);

   if(colidiu){
    velocidadeX *= -1; 
   }
 }

function incluiPlacar(){
  stroke(25,25,112);
  textAlign(CENTER);
  textSize(16);
  
  fill(color(123,104,238));
  rect(150, 10, 45, 25);
  
  fill(color(123,104,238));
  rect(450, 10, 45, 25);
  
  fill(255);
  text(lolpoints, 473, 28);
  
  fill(255);
  text(meuspoints, 173, 28);
  
}

 function marcarpontos(){
  if(xBolinha > 585){
    
     meuspoints += 1;
     
     }
  if(xBolinha < 15){
    
    lolpoints += 1;
  }
}





