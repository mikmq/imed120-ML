function setup() {
    // put setup code here
    
    //to fill entire vvv
    createCanvas(innerWidth, innerHeight);
    background(211, 223, 237);
    
}


function draw() {
    
    //14 WHITE KEYS 
    for(let i = 0; i<14; i++){
        fill('white')  
        //rect(x,y,w,h,topL,topR,bottomR,bottomL)
        rect(200+i*55,120, 55, 350, 0, 0, 12, 12);
    }
    
    //BLACK KEYS 2 section
    for(let i = 0; i<2; i++){
        fill('black')  
        rect(233+i*55,120, 45, 250, 0, 0, 12, 12);
        rect(617+i*55,120, 45, 250, 0, 0, 12, 12);
    }
    
    //BLACK KEYS 3 section
    for(let i = 0; i<3; i++){
        fill('black')  
        rect(398+i*55,120, 45, 250, 0, 0, 12, 12);
        rect(782+i*55,120, 45, 250, 0, 0, 12, 12);
    }
}


