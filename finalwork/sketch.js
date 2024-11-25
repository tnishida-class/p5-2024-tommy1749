// 最終課題を制作しよう

let raindrops = []; 
let Rain = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(190, 220, 255); 

  if (Rain) {
    drawRain(); 
  }
}

function createRaindrop() {
  let raindrop = {
    x: random(width),      
    y: random(-height), 
    speed: random(3,5,7) 
  };
  raindrops.push(raindrop);
}

function drawRain() {
  for (let drop of raindrops) {
    fill(0, 0, 220);
    noStroke();
    ellipse(drop.x, drop.y, 4, 10); 
    drop.y += drop.speed; 

    if (drop.y > height) {
      drop.x = random(width);
      drop.y = random(-height,0);
    }
  }
}

function mousePressed() {
  Rain = true;
  for (let i = 0; i < 20; i++) {
    createRaindrop();
  }
}

function keyPressed() {
  if (key == ' ') { 
    Rain = false;
    raindrops = []; 
  }
}
