var goodShip, badShip;
var goodShip_Image, badShip_Image;
var score = 0;
var coins = 0;
function preload(){
goodShip_Image = loadImage("goodShip1.png")
badShip_Image = loadImage("badShip1.png")



}
function setup(){
    createCanvas(1200,600)
    goodShip = createSprite(400,400,50,50)
    goodShip.addImage(goodShip_Image)
    goodShip.scale = 0.3;
    


}
function draw(){
background(0)
spawnBadShips()

drawSprites()
}
function spawnBadShips(){
if(frameCount%120 === 0){
    badShip = createSprite(200,100,50,50)
    badShip.addImage(badShip_Image)
    badShip.scale = 0.3;
    badShip.velocityX = 5;

}


}