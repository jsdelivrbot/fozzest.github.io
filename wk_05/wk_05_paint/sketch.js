//code 02
//wk_05_01

//forrest_whitcomb

//paint w/ data



var paintmarks = [];
var paintDataFile = 'paintData.json';

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  for (var i = 0; i < paintmarks.length; i++) {
    paintmarks[i].display();
  }

  fill(0);
  textSize(24);
  //text("drag the mouse across the canvas to draw.", 50, 570);
  //text("press 'S' to save a json file with the current paint data.", 50, 600);
  //text("press 'L' to load a json file from your computer.", 50, 630);
}

function PaintMark(position) {
  this.position = position;

  this.display = function() {
    noStroke();
    fill(250,0,250);
    ellipse(this.position.x, this.position.y, 10, 10);
  }

}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY)));
}

function onWindowLoaded (event){
var myButtonSave = document.getElementById("myButtonSave");
	myButtonSave.addEventListener("click", onButtonClickSave);

var myButtonLoad = document.getElementById("myButtonLoad");
	myButtonLoad.addEventListener("click", onButtonClickLoad);
}



function onButtonClickSave(event){
	savePaintData();
}

function onButtonClickSave(event){
	loadPaintData();
}
s
function keyPressed() {
  if (key === 'S') {
    savePaintData();
  }
  if (key === 'L') {
    loadPaintData();
  }
}

function savePaintData() {
  positionsToSave = [];
  for (var i = 0; i < paintmarks.length; i++) {
    positionsToSave.push(
      { 
        x: paintmarks[i].position.x, 
        y: paintmarks[i].position.y 
      }
    );
  }
  saveJSON(positionsToSave, 'paintData.json');
}

function loadPaintData() {
  loadJSON(paintDataFile, parsePaintData);
}

function parsePaintData(data) {
  paintmarks = [];

  for (var i = 0; i < data.length; i++) {
    paintmarks.push(new PaintMark(createVector(data[i].x, data[i].y)));
  }
}