let ship = {
    x: window.innerWidth-800,
    y:  window.innerHeight/1.5,
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB)
    background(229, 100, 15)

}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB)
    background(229, 100, 15);
}

let shipimage;
function preload(){
    shipimage = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqB7A2rm_vC08NmmHJbDWteQBOSV0bRHAhB5nAH-rzNOn0r2z-")
}

let speed = 20;
function draw(){
   image(shipimage, ship.x, ship.y);
   ship.x += speed;
//    background(229, 100, 15)

   if(ship.x>window.innerWidth){
       speed = -speed
   }
//    else if(ship.x>=window.innerWidth){
//        ship.x--;
//    }
 
}

