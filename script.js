function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB); // color mode "Hue Straturation and Brightness"
  background(0);
}
function draw() {
  if (mouseIsPressed) {
    background(0);
  }
  noStroke(); //  don't want the stroke of the cirmufrence of the circle
  //framcount modulo - gives the remainder of a division
  //usefull for cycling through range of values
  fill(frameCount % 360, 100, 100); //framecount cycle through all the hue's the instead of 0
  //dividing the framecount by 360
  //starts @ 1 and increases by 1 --- we need to produce # between 0 and 359
  //if frameCountis 1 , 360/ into 1 - 0 times
  //360 goes into 360 - 1 time so well have 0 leftover so it wraps around
 
   //rotate 
  translate(mouseX, mouseY);
  const brushWidth = 80;
  //brushed look
  for (let x = -brushWidth /2; x <= brushWidth /2; x += 6) {
    ellipse(x, 0, 2, 2);
  }
 
  function keypress(event) {
    
  }
  }