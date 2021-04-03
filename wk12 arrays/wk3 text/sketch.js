function preload(){
    //for a downloaded font usevvv
    Quicksand = loadFont('Quicksand/Quicksand-VariableFont_wght.ttf');
    
}

let poem = ['Harrisburg University','Hello! My name is Mickey, some call me mik, and I go to HU.','You will probably find me on the 11th or 12th floor enjoying the view.', 'I like many colors but today I will stick with yellow, it is a nice hue.'];

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
    text(poem[0], 0, 100, innerWidth);
    
    textStyle(NORMAL);
    textSize(14);
	
	for(let i=0; i<poem.length; i++) {
		text(poem[i+1], 0, 150+i*30, innerWidth);
	}
	

}

