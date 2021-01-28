function preload(){
    //for a downloaded font usevvv
    Quicksand = loadFont('Quicksand/Quicksand-VariableFont_wght.ttf');
    
}

function setup() {
    // put setup code here
    createCanvas(innerWidth, innerHeight);
    
    textAlign(CENTER);
    
    textFont(Quicksand);

    noLoop();
}

function draw() {
    // put drawing code here 
    
    background(255,255,203);
    
    textStyle(BOLDITALIC);
    textSize(32);
    text('Harrisburg University', 0, 100, innerWidth);
    
    textStyle(NORMAL);
    textSize(14);
    text('Hello! My name is Mickey, some call me mik, and I go to HU.', 0, 150, innerWidth);
    text('You will probably find me on the 11th or 12th floor enjoying the view.', 0, 180, innerWidth);
    text('I like many colors but today I will stick with yellow, it is a nice hue.', 0, 210, innerWidth);
    

}

