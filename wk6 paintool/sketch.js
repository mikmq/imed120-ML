let bgColor= (245, 242, 230);
let penSize= 15;

function setup() {
    //Create the canvas
    createCanvas(innerWidth,innerHeight);
    background(bgColor);  
    
    noStroke();
    
    // Setup Color Button
    let pinkButton;
    pinkButton = createButton('pink');
    pinkButton.size(80, 80);
    pinkButton.position(21, 30);
    pinkButton.style('background:pink');
    pinkButton.mousePressed(changePink);
    
     let yellowButton;
    yellowButton = createButton('yellow');
    yellowButton.size(80, 80);
    yellowButton.position(21, 127);
    yellowButton.style('background:yellow');
    yellowButton.mousePressed(changeYellow);
    
    let blueButton;
    yellowButton = createButton('blue');
    yellowButton.size(80, 80);
    yellowButton.position(21, 220);
    yellowButton.style('background:blue');
    yellowButton.mousePressed(changeBlue);
    
    let whiteButton;
    whiteButton = createButton('white');
    whiteButton.size(80, 80);
    whiteButton.position(21, 320);
    whiteButton.style('background:white');
    whiteButton.mousePressed(changeWhite);
    
    let blackButton;
    blackButton = createButton('black');
    blackButton.size(80, 80);
    blackButton.position(21, 420);
    blackButton.style('background:black');
    blackButton.mousePressed(changeBlack);
    
    //ERASER
    let eraserButton;
    eraserButton = createButton('eraser');
    eraserButton.size(80, 30);
    eraserButton.position(21, 515);
    eraserButton.style('background:200');
    eraserButton.mousePressed(changeEraser);
    
    //CLEAR
    let clearButton;
    clearButton = createButton('CLEAR');
    clearButton.size(80, 30);
    clearButton.position(21, 630);
    clearButton.mousePressed(changeClear);

//small button
  let smallButton;
    smallButton = createButton('small');
    smallButton.size(80, 30);
    smallButton.position(21, 555);
    smallButton.mousePressed(changeSmall);
    
//big button
  let bigButton;
    bigButton = createButton('big');
    bigButton.size(80, 30);
    bigButton.position(21, 590);
    bigButton.mousePressed(changeBig);

}   

//Color functions
function changePink(){
    fill('pink');
}

function changeYellow(){
    fill('yellow');
}

function changeBlue(){
    fill('blue');
}

function changeWhite(){
    fill('white');
}

function changeBlack(){
    fill('black');
}

function changeEraser(){
    fill(bgColor);
}

function changeSmall(){
    penSize = 12;
}

function changeBig(){
    penSize = 25;
}

function changeClear(){
    bgColor === (245, 242, 230)
    background(bgColor);
}

function draw() {
    if (mouseIsPressed){
     //circle tracks mouse 
     ellipse(mouseX, mouseY, penSize, penSize);
    }
}
 