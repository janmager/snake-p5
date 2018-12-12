var s;
var scl = 40;
var currentPosition = null;

var food;

function setup(){
    createCanvas(window.windowWidth,window.windowHeight);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function draw(){
    background(51);

    if(s.eat(food)){
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function keyPressed(){
    if(keyCode === UP_ARROW && currentPosition != 'd'){
        s.dir(0, -1);
        currentPosition = 'u';
    }
    else if(keyCode === DOWN_ARROW && currentPosition != 'u'){
        s.dir(0,1);
        currentPosition = 'd';
    }
    else if(keyCode === RIGHT_ARROW && currentPosition != 'l'){
        s.dir(1,0);
        currentPosition = 'r';
    }
    else if(keyCode === LEFT_ARROW && currentPosition != 'r'){
        s.dir(-1,0);
        currentPosition = 'l';
    }
}