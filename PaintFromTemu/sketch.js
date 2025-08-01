let currentColor, black, red, orange, yellow, green, blue, purple, pink, white;
let currentStrokeWeight;
let currentTool;

function setup() {
  createCanvas(500, 500);
  background(255);
  currentColor = "black";
  currentStrokeWeight = 3;
  currentTool = "brush";

  black = new colors(0, "black");
  red = new colors(50, "red");
  orange = new colors(100, "orange");
  yellow = new colors(150, "yellow");
  green = new colors(200, "green");
  blue = new colors(250, "blue");
  purple = new colors(300, "purple");
  pink = new colors(350, "pink");
  white = new colors(400, "white");
}

function draw() {
  if (mouseIsPressed && currentTool === "brush") {
    if (mouseX > 51 && mouseX < 450) {
      drawing();
    }
  }

  black.appear();
  black.onMousePressed();
  red.appear();
  orange.appear();
  yellow.appear();
  green.appear();
  blue.appear();
  purple.appear();
  pink.appear();
  white.appear();

  fill(200);
  rect(450, 0, 50, 50);
  rect(450, 50, 50, 50);

  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("+", 475, 25);
  text("-", 475, 75);

  fill(255);
  noStroke();
  rect(450, 110, 50, 20);

  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("Size: " + currentStrokeWeight, 475, 120);

  fill(200);
  rect(450, 150, 50, 50);

  fill(0);
  textSize(12);
  text("Bucket", 475, 175);

  fill(255);
  rect(450, 210, 50, 20);

  fill(0);
  textSize(10);
  text(currentTool === "brush" ? "Brush" : "Bucket", 475, 220);
}

class colors {
  constructor(y, color) {
    this.x = 0;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.color = color;
  }

  appear() {
    push();
    if (this.color != "white") noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  onMousePressed() {
    if (mouseIsPressed) {
      if (mouseX < 50) {
        if (mouseY > 0 && mouseY < 50) currentColor = "black";
        else if (mouseY > 50 && mouseY < 100) currentColor = "red";
        else if (mouseY > 100 && mouseY < 150) currentColor = "orange";
        else if (mouseY > 150 && mouseY < 200) currentColor = "yellow";
        else if (mouseY > 200 && mouseY < 250) currentColor = "green";
        else if (mouseY > 250 && mouseY < 300) currentColor = "blue";
        else if (mouseY > 300 && mouseY < 350) currentColor = "purple";
        else if (mouseY > 350 && mouseY < 400) currentColor = "pink";
        else if (mouseY > 400 && mouseY < 450) currentColor = "white";
      }
    }
  }
}

function mousePressed() {
  if (mouseX > 450 && mouseX < 500 && mouseY > 0 && mouseY < 50) {
    currentStrokeWeight++;
  } else if (mouseX > 450 && mouseX < 500 && mouseY > 50 && mouseY < 100) {
    if (currentStrokeWeight > 1) currentStrokeWeight--;
  } else if (mouseX > 450 && mouseX < 500 && mouseY > 150 && mouseY < 200) {
    currentTool = "bucket";
  } else if (currentTool === "bucket" && mouseX > 51 && mouseX < 450) {
    bucketFill(mouseX, mouseY);
  } else {
    currentTool = "brush";
  }
}

function drawing() {
  push();
  stroke(currentColor);
  strokeWeight(currentStrokeWeight);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}

function bucketFill(x, y) {
  push();
  noStroke();
  fill(currentColor);
  rect(51, 0, 399, 500);
  pop();
  currentTool = "brush";
}


