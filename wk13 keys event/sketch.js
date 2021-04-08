let width = 55;
let height = 350;
var osc;

function setup() {
   
    createCanvas(innerWidth, innerHeight);
    background(211, 223, 237);    
	
	textSize(30);
	fill(180);
	text('press or use A,S,D,F,G,H,J,K,L keys', 50, 58);
	text('press SPACEBAR to stop sound', 50, 90);
	
     
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(0);
    osc.amp(1000);
    osc.start();
	
    getAudioContext().resume();
	
    //14 WHITE KEYS 
    for(let i = 0; i<14; i++){
        fill('white')  
        //rect(x,y,w,h,topL,topR,bottomR,bottomL)
        rect(200+i*55,120, 55, 350, 0, 0, 12, 12);
    }
    
    //BLACK KEYS 2 section
    for(let i = 0; i<2; i++){
        fill('black')  
        rect(233+i*55,120, 43, 250, 0, 0, 12, 12);
        rect(618+i*55,120, 43, 250, 0, 0, 12, 12);
    }
    
    //BLACK KEYS 3 section
    for(let i = 0; i<3; i++){
        fill('black')  
        rect(398+i*55,120, 43, 250, 0, 0, 12, 12);
        rect(782+i*55,120, 43, 250, 0, 0, 12, 12);
    }
}


function draw() {
// if the mouse is inside of the key, when mouse pressed, it makes sound
	//WHITE KEYS (14)
    if (mouseX>200 && mouseX<255 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(130.8128);
       osc.amp(1000, .05); 
	}
	
	//else{
	//	osc.freq(0);
	//}
	
	 if (mouseX>200 +55 && mouseX<255 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(146.8324);
       osc.amp(1000, .05); 
	}
	 if (mouseX>255 +55 && mouseX<310 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(164.8138);
       osc.amp(1000, .05); 
	}
	 if (mouseX>310 +55 && mouseX<365 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(174.6141);
       osc.amp(1000, .05); 
	}
	 if (mouseX>365 +55 && mouseX<420 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(195.9977);
       osc.amp(1000, .05); 
	}
	 if (mouseX>420 +55 && mouseX<475 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(220.0000);
       osc.amp(1000, .05); 
	}
	 if (mouseX>475 +55 && mouseX<530 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(246.9417);
       osc.amp(1000, .05); 
	}
	 if (mouseX>530 +55 && mouseX<585 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(261.6256);
       osc.amp(1000, .05); 
	}
	 if (mouseX>585 +55 && mouseX<650 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(293.6648);
       osc.amp(1000, .05); 
	}
	 if (mouseX>650 +55 && mouseX<705 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(329.6276);
       osc.amp(1000, .05); 
	}
	 if (mouseX>705 +55 && mouseX<760 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(349.2282);
       osc.amp(1000, .05); 
	}
	 if (mouseX>760 +55 && mouseX<815 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(391.9954);
       osc.amp(1000, .05); 
	}
	 if (mouseX>815 +55 && mouseX<870 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(440.0000);
       osc.amp(1000, .05); 
	}
	 if (mouseX>870 +55 && mouseX<925 +55 && mouseY>120 && mouseY<470 && mouseIsPressed){
       osc.freq(493.8833);
       osc.amp(1000, .05); 
	}
	
	//BLACK KEYS 2 section (4)
	if (mouseX>233 && mouseX<288 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(138.5913);
       osc.amp(1000, .05); 
	}
	if (mouseX>233+55 && mouseX<288+55 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(155.5635);
       osc.amp(1000, .05); 
	}
	
	if (mouseX>618 && mouseX<673 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(277.1826);
       osc.amp(1000, .05); 
	}
	if (mouseX>618+55 && mouseX<673+55 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(311.1270);
       osc.amp(1000, .05); 
	}
	
	//BLACK KEYS 3 section (6)
	if (mouseX>398 && mouseX<453 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(184.9972);
       osc.amp(1000, .05); 
	}
	if (mouseX>398+55 && mouseX<453+55 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(207.6523);
       osc.amp(1000, .05); 
	}
	if (mouseX>453+55 && mouseX<508+55 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(233.0816);
       osc.amp(1000, .05); 
	}
	
	if (mouseX>782 && mouseX<837 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(369.9944);
       osc.amp(1000, .05); 
	}
	
	if (mouseX>782+55 && mouseX<837+55 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(415.3047);
       osc.amp(1000, .05); 
	}
	
	if (mouseX>837+55 && mouseX<892+55 && mouseY>120 && mouseY<370 && mouseIsPressed){
       osc.freq(466.1638);
       osc.amp(1000, .05); 
	}
	
	text('A    S    D    F    G    H     J    K     L', 218, 458)
}

function keyPressed(){
	if(keyCode === 65){
	   osc.freq(130.8128);
       osc.amp(1000, .05); 
	}
	if(keyCode === 83){
	   osc.freq(146.8324);
       osc.amp(1000, .05);
	}
	if(keyCode === 68){
	   osc.freq(164.8138);
       osc.amp(1000, .05); 
	}
	if(keyCode === 70){
	   osc.freq(174.6141);
       osc.amp(1000, .05); 
	}
	if(keyCode === 71){
	   osc.freq(195.9977);
       osc.amp(1000, .05); 
	}
	if(keyCode === 72){
	   osc.freq(220.0000);
       osc.amp(1000, .05);
	}
	if(keyCode === 74){
	   osc.freq(246.9417);
       osc.amp(1000, .05); 
	}
	if(keyCode === 75){
	   osc.freq(261.6256);
       osc.amp(1000, .05); 
	}
	if(keyCode === 76){
	   osc.freq(293.6648);
       osc.amp(1000, .05);
	}
	if(keyCode === 32){
	   osc.freq(0);
	}
}

function keyReleased(){
	osc.fade(0, 0.5);
}