let ang =0
let newXBt=0
let newYBt=0
let shapeW=0
let shapeH=0
let v;
let s;
let pressed = true

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
      canvas.style('display', 'block');
      canvas.parent('bottom')
      // strokeWeight(0)
      // background(2); 
      noLoop()
      
}

function draw() {
   noStroke()
  // rectMode(CENTER);
   clear();
   for(let i =50;i>=-50;i-=10)
   {
    fill('rgba(100%,100%,100%,0.3)')
     let rX =  random(-5,5)
     let rY=  random(-5,5)
     /* v =p5.Vector.fromAngle(ang, 2)
      translate(v); */
      newXBt = mouseX-(i*rX+5)/2
      newYBt = mouseY-(i*rY+5)/2
      shapeW=i/8
      shapeH=i/8
      //ellipse(newXBt, newYBt, shapeW, shapeH);
      if(Math.round(rX)%2==0)
      s='0'
      else
      s='1'
      textSize(shapeW);
      text(s,newXBt, newYBt);
   }
  for(let i =150;i>=-150;i-=2)
  {
    fill('rgba(100%,100%,100%,0.05)')
    let rX =  random(-40,40)
    let rY=  random(-40,40)
    newXBt = mouseX-(i*rX+5)/2
    newYBt = mouseY-(i*rY+5)/2
     shapeW=i/8
     shapeH=i/8
     //ellipse(newXBt, newYBt, shapeW, shapeH);
     if(Math.round(rX)%2==0)
     s='0'
     else
     s='1'
     textSize(shapeW*5);
     text(s,newXBt, newYBt);
  }
  
  
  ang+=0.2
  if(ang== TWO_PI)
    ang=0
}

 mouseMoved = function() {
   if(pressed)
   redraw();
}
mouseClicked = function(){
  pressed=!pressed
}
