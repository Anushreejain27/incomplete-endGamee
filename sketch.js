var canva;
var gameState = 0
var score = 0
function preload(){
bgi = loadImage("bg.jpg")
gi = loadImage("girl.png")
bgi2 = loadImage("bg3.png")
bgi3 = loadImage("bg4.jpg")
e1I = loadImage("hedgehor.png")
d1I = loadImage("magic door.png")
e12I = loadImage("coin3.png")
birdI = loadImage("birdu.png")

}



function setup(){

  eg = new Group()
  eg2 = new Group()
  bgl = new Group()

  canvas = createCanvas(850,400);
 

  bg5 = createSprite(4570 , 70 )
  bg5.addImage(bgi3)
  bg5.scale = 2
  bg6= createSprite(6000 , 70 )
  bg6.addImage(bgi3)
  bg6.scale = 2
  bg7 = createSprite(7570 , 70 )
  bg7.addImage(bgi3)
  bg7.scale = 2
  bg2 = createSprite(1700 , 20 )
  bg2.addImage(bgi2)
  bg3 = createSprite(2500 , 20 )
  bg3.addImage(bgi2)
  bg4 = createSprite(3300 , 20 )
  bg4.addImage(bgi2)
  bg = createSprite(675 , 200 )
  bg.addImage(bgi)
  bg.scale = 2.4





  gl = createSprite(40 , 310 )
  gl.addImage(gi)
  gl.debug = true
 
  iw = createSprite(10 , 310 ,10 ,100)
 iw.visible = false
  ig = createSprite(100 , 360 ,1000 ,10)
 ig.visible = false
  gl.depth = ig.depth
  
  bg2.scale = 1.6
  bg3.scale = 1.6
  bg4.scale = 1.6
  
}


function draw(){
  background("red");
if (gameState=== 0){
  gl.depth = ig.depth
  
  gl.setCollider("rectangle", 10,10, 50,70)
  gl . bounce (iw)
  gl . collide (ig)
  gl . bounceOff (ig)
 
 
  if(bg2.x >525){
    if (frameCount% 60=== 0){
    e1 = createSprite(860,340)
    e1.addImage(e1I)
    e1.velocityX = -5
    e1.scale = 0.1
    eg.add(e1)
    e1.debug = true
    e1.setCollider('rectangle', 10 ,10 , 70 ,70)
    6
    }
    }
  























if (frameCount%10 ===0){
score = score +1


}
   ///////////\\\\\\\\\\\ CREATING THE BIRD ///////////\\\\\\\\\\\\
    if(bg2.x <525){
      if (frameCount% 60=== 0){
      b1 = createSprite(850,random(100,300))
      b1.addImage(birdI)
      b1.velocityX = -5
      //b.scale = 0.1
      bgl.add(b1)
      b1.debug = true
      //b1.setCollider('rectangle', 10 ,10 , 70 ,70)
      
      }
      }

    
   /* if(bg2.x <525){
      if (frameCount% 30=== 0){
      e12 = createSprite(800,60)
      e12.addImage(e12I)
      //e12.velocityX = -5
      e12.scale = 0.6
      eg2.add(e12)
      }
      }*/

if (keyDown(RIGHT_ARROW)){
bg.x = bg.x-7
bg2.x = bg2.x-7
bg3.x = bg3.x-7
bg4.x = bg4.x-7
bg5.x = bg5.x-7
bg6.x = bg6.x-7
bg7.x = bg7.x-7
eg.x = eg.x -7

eg2.x = eg2.x -7
}
/*if (keyDown(LEFT_ARROW)){
  gl.x = gl.x-10

  }*/
  if (keyWentDown(UP_ARROW)){
    gl.velocityY = gl.velocityY-50
  
   }
  gl.velocityY = gl.velocityY+5

  gl . collide (ig)

if (gl.isTouching(eg)){

  gameState = 1
}
}





  drawSprites()
  textSize(26)
  fill("white")
  stroke("black")
  strokeWeight(4)
  text("SCORE : "+ score , 645 , 50)

  if(gameState===1){
   background("red")

   score = score
   textSize(50)
   fill("white")
   text("GAME OVER",270,100)
   textSize(30)
   fill("white")
   text("YOUR SCORE = "+ score,280,200)
    }
  
}
