
var knife,knifeAn;
var fruit,fruitGroup,enemy,e1,e2,f1,f2,f3,f4;
var enemyGroup;
var randNum,randX,randAn,score = 0;
var lives = 3;
var gameState = "PLAY";
var gameOver;
function preload(){
  knife = createSprite(200,200,20,20);
  knifeAn = loadAnimation("sword.png");
  knife.addAnimation("knife",knifeAn);
  knife.scale = 0.5;
  fruitGroup = new Group();
  enemyGroup = new Group();
  e1 = loadAnimation("alien1.png");
  e2 = loadAnimation("alien2.png");
  f1 = loadAnimation("fruit1.png");
  f2 = loadAnimation("fruit2.png");
  f3 = loadAnimation("fruit3.png");
  f4 = loadAnimation("fruit4.png");
  gameOver = loadAnimation("gameover.png");
  knife.addAnimation("gameOver",gameOver);
}
function draw(){
  background(220);
  if(gameState == "PLAY"){
    knife.y = mouseY;
    knife.x = mouseX;
    if(frameCount%100 == 0){
      spawn();
    }
    if(knife.isTouching(enemyGroup)){
      enemyGroup.destroyEach();
      gameState = "END";
    }
    if(knife.isTouching(fruitGroup)){
      fruitGroup.destroyEach();
      score = score + 1;
    }
    text("Score:" + score,325,10);
 
  }
  if(gameState == "END" ){
    text("You lost!",150,200);
    text("Your final score was " + score + "!",115,225);
    knife.changeAnimation("gameOver",gameOver);
  }
  drawSprites()
}
function enemyCreate(){
  enemy = createSprite(randX,350,20,20); 
  randAn = Math.round(random(1,2));
  switch(randAn){
    case 1:
      enemy.addAnimation("enemy1",e1);
      enemyGroup.add(enemy)
      break;
    case 2:
      console.log("hello")
      enemyGroup.add(enemy)
      enemy.addAnimation("enemy2",e2);
      break;
  }
  enemy.velocityY = -5;
}
function fruitCreate(){
  fruit = createSprite(randX,350,20,20); 
  randAn = Math.round(random(1,2));
  switch(randAn){
    case 1:
      console.log("hi")
      fruit.addAnimation("fruit1",f1);
      break;
    case 2:
      console.log("hello")
      fruit.addAnimation("fruit2",f2);
      break;
    case 3:
      console.log("hii")
      fruit.addAnimation("fruit3",f3);
      break;
    case 4:
      console.log("hiii")
      fruit.addAnimation("fruit4",f4);
      break;
  }
  fruit.velocityY = -5
  fruit.scale = 0.25
  fruitGroup.add(fruit)
}
function spawn(){
  randNum = Math.round(random(1,3));
  randX = Math.round(random(1,400));
  if(randNum == 1){
    enemyCreate();
  } else{
    fruitCreate();
  }
}

