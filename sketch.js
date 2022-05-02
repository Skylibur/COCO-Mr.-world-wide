//The setup function only happens once
var movie = 0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(movie,900,630); //an RGB color for the canvas' background
  //circle
  stroke(755,259,127); // an RGB color for the circle's border
  fill(259,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),189,199);
   fill(200,230,587,400);
  rect(mouseX,mouseY,88,79); // center of canvas, 20px dia
  fill(239,22,182,150)
  textSize(26);
  textFont("Helvetica");
  text('yeerr wasssaaaaap',40,150);
  rect(30, 20, 50, 50);
  scale(0.10);
  let img;
function preload() {
  img = loadImage('Portrait.png');
}

}

function mousePressed(){
  if (movie>=5){
      movie =0;
  }
  else{
    movie= movie+10;
}
}
