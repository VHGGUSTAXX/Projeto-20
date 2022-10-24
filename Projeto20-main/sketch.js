var bgImg;
var cat;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadImage("images/cat2.png","images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg4 = loadImage("images/mouse4.png");
    mouseImg2 = loadImage("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(300,600);
    mouse.addAnimation("ratoParado", mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem


    if(cat.x -  mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("últimaImagemGato", catImg4);
        cat.changeAnimation("últimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2
        
        mouse.addAnimation("últimaImagemRato", mouseImg4);
        mouse.changeAnimation("últimaImagemRato", mouseImg4);
        mouse.x= 290;
        mouse.scale = 0.2;
    }



    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando", mouseImg2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;
    
    cat.velocityX = -5;

    cat.addAnimation("gatoAndando", catImg2);
    cat.changeAnimation("gatoAndando");
    cat.frameDelay = 25;

  }


}
