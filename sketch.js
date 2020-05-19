var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  //speed and weight variables for checking the deformation later
  speed = random(223,351);
  weight = random(30,52);
  thickness = random(22,83);

  //sprites for the bullet and wall
  wall = createSprite(1200,200,thickness,800);
  wall.shapeColor = "grey";
  bullet = createSprite(20,200,40,15);
  bullet.shapeColor = "white";
}

function draw() {
  background(0); 
  
  //sets the bullet's velocityX to speed
  bullet.velocityX = speed;

  //checks for collision
  if(hasCollided(wall,bullet)){
      //stops the bullet
      bullet.velocityX = 0;
      //checks the damage by creating a damage variable
      var damage = (0.5*weight*speed*speed)/(thickness^3);

      //wall is effective against the bullet
      if (damage<10){
        //indicates that the damage is good by changing the color of the bullet to green
        wall.shapeColor = "green";
      }

      //wall is ineffective against the bullet
      if (damage>=10){
        //indicates that the damage is lethal by changing the color of the bullet to red
        wall.shapeColor = "red";
      }
    }

  drawSprites();
}
function hasCollided(varWall,varBullet){
  bulletRightEdge = varBullet.x + varBullet.width/2;
  wallLeftEdge = varWall.x - varWall.width/2;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}