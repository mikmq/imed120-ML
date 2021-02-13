
let img;
let inp;

function preload() {
    Cimg = loadImage('Congo.png');
    Dimg = loadImage('Denmark.png');
    Timg = loadImage('tryagain.jpg');

}


function setup() {
    // put setup code here
    
    createCanvas(innerWidth,innerHeight);
    
    background(211, 242, 225);
    
    //image(img, 10, 120);
    
    // User input
    textSize(24);
    text('Type Denmark or Congo',20,40);
    
    inp = createInput();
    inp.position(20,50);
    inp.input(showInput);
    
    let button;
    button = createButton('submit');
    button.position(inp.x + inp.width+5, 50);
    
    button.mousePressed(showImage);
    
}

function showImage(){
    const userInput = inp.value();
    if (userInput == 'Congo'){
    text ("Here is the Congo flag",20,125);
    image(Cimg,20, 140);      
    }
  
    else if (userInput == 'Denmark'){
    text ("Here is the Denmark flag",20,125);
    image(Dimg,20, 140);      
    }
    
    else {
    text ("try again",20,125);
    image(Timg,20,140)
    }
       
}


function showInput(){
    text(this.value(),20,100);
    //console.log('You are typing:, this.value());
    
}


