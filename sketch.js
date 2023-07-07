//variavies da bolinha
let xBolinha =300;
let yBolinha =200;
let diametro =30;
let velocidadexBolinha =2;

//velocidade da bolinha
let velocidadeyBolinha =2;
let raio = diametro /2;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 100;

//variavel oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

//placar do jogo
let meuspontos = 0;
let pontosoponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
function preload(){
  trilha =loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  

}

function draw() {
  background(0);
  mostrabolinha();
  movimentaçãobolinha();
  verificacolisaoborda();
  rect(xRaquete, yRaquete,raquetecomprimento,raquetealtura);
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificacolisaoraquete();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiplacar();
  marcaponto();
  
}
function mostrabolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaçãobolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificacolisaoborda(){
  if (xBolinha+raio > width ||
     xBolinha-raio < 0){
    velocidadexBolinha *= -1;
    
  }
  if (yBolinha+raio > height ||
     yBolinha-raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete(x,y){
    rect(x,y,raquetecomprimento,raquetealtura);
}
  



function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;

  }
}

function verificacolisaoraquete(){
  if (xBolinha - raio < xRaquete + raquetecomprimento
     && yBolinha - raio < yRaquete + raquetealtura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown("87")){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown("83")){
    yRaqueteOponente += 10;
  }

  
  
  }


function verificacolisaoraqueteoponente(x,y){
  if (xBolinha - raio < x + raquetecomprimento
     && yBolinha - raio < y + raquetealtura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
}

function incluiplacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255 ,140 ,0));
  rect(150,10,40,20);
  fill(255);
  text(meuspontos,170,26);
  fill(color(255 , 140 , 0));
  rect(450,10,40,20);
  fill(255);
  text(pontosoponente,470,26);
  
}

function marcaponto(){
  if (xBolinha > 585){
    meuspontos += 1;
    ponto.play();
  }
  if (xBolinha < 15){
    pontosoponente += 1;
    ponto.play();
  }
}




  