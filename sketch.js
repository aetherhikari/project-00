let points = [];

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(10);

    for(let i = 0; i < 12; i++) {
        points[i] = createVector(random(width), random(height));
    }

    pixelDensity(1);
}


function draw() {
    background(0);
    
    loadPixels();
    for(let x = 0; x < width; x++){
      for(let y = 0; y < height; y++) {
        
        for(let i = 0; i < points.length; i++){
          let d = dist(x, y, points[i].x, points[i].y);
          distances[i] = d;
        }
        
        let sorted =sort(distances);
        let noise = sorted[0];
        let index = (x+y*width)*4;
        pixels[index] = noise;
        pixels[index+1] = noise;
        pixels[index+2] = noise;
        pixels[index+3] = 255;
      }
    }
    updatePixels();
    
    beginShape(POINTS);
    for(let i =0; i < points.length; i++){
      vertex(points[i].x, points[i].y);
    }
        endShape();
  }