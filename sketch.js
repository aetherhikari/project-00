let particles = [];
const num = 1000;

const noiseScale = 0.01;



function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
    stroke(100,15,25,50);
  }

}

function draw() {
  background(190,10,200,1);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }


}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}