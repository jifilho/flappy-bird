var canvas=document.getElementById("canvas")
var ctx = canvas.getContext("2d")

//Carregando imagens
var bird = new image();
bird.src="images/bird.png"

var bg = new image();
bg.src="images/bg.png"

var chao=new image();
chao.src="images/chao.png"

var canocima=new image();
canocima.src="images/canocima.png"

var canobaixo = new image();
canobaixo.src="images/canobaixo.png"

//Variáveis
var eec = 100
var constant
var bX = 33
var bY = 200
var gravity = 1.4
var score = 0
var cano = []

cano [0] = {
    x: canvas.width,
    y: 0,
}

//Carregando sons
var fly=new audio()
fly.src="sounds/fly.mp3"

var score=new audio()
fly.src="sounds/score.mp3"

function jogo(){
    //fundo do jogo
    ctx.drawImage(bg,0,0)
    //DrawImage(imagem,X,Y)
    requestAnimationFrame(jogo)
}

jogo()