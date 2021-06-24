
let autoRotate = false; //
let manualRotationAngle = 0;
let autoHue = true; //
let manualHue = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB); // color mode "Hue Straturation and Brightness"
  angleMode(DEGREES);// angle mode ""
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    background(0);
  }
  //rotate 
  translate(mouseX, mouseY);
  rotate(autoRotate ? frameCount : manualRotationAngle);
  noStroke(); //  don't want the stroke of the cirmufrence of the circle


  //framcount modulo - gives the remainder of a division
  //usefull for cycling through range of values


  const hue = autoHue ? frameCount % 360 : manualHue; //sets the hue
  fill(hue, 100, 100); 
  
  //framecount cycle through all the hue's the instead of 0
  //dividing the framecount by 360
  //starts @ 1 and increases by 1 --- we need to produce # between 0 and 359
  //if frameCountis 1 , 360/ into 1 - 0 times
  //360 goes into 360 - 1 time so well have 0 leftover so it wraps around
 
  const brushWidth = 30;
  const bristleSeparation = 4; //<--------------------------
  //brushed look                                                          //----  
  for (let x = -brushWidth / 2; x <= brushWidth / 2; //----
        x += bristleSeparation){ //refractor------------
    // negative brush width / 2 and postive brush width / 2
    ellipse(x, 0, 2, 2);
  }
}
  function keyPressed(event) {
  console.log(event.key);
switch (event.key) { // a switch on the key
  case 'A' : 
      autoHue = ! autoHue // autoHue equal not autoHue
     break;
    case 'a' :
      autoHue = false;
      manualHue += 15;
      break;
    case 'R' : 
      autoRotate = ! autoRotate // autoHue equal not autoHue
      break;
    case 'a' :
      autoRotate = false;
      manualRotationAngle += 15;
      break;
    }
  }
