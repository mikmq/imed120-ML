
let colors = ['rgb(206,206,202)','rgb(100%,5%,15%)','rgb(255,204,230)','white','#ffe03d','#15ab4d','#e41414','#006633','#ff8033','#ffcc00','#3a7dd5','black'];

function setup() {
    // put setup code here
    createCanvas(innerWidth,innerHeight);
    background(colors[0]);
    
//Denmark flag
    fill(colors[1]);
    noStroke();
    rect(740,150,300,200);
    
    fill(colors[3]);
    rect(740,232,300,30);
    rect(843,150,30,200);
    
//Congo flag
    fill(colors[4]);
    noStroke();
    rect(740,370,300,200);
    
    fill(colors[5]);
    triangle(740, 570, 740, 370, 930, 370);
    
    fill(colors[6]);
    triangle(850, 570, 1040, 370, 1040, 570);
  
//Japan flag
    fill(colors[3]);
    noStroke();
    rect(100,150,300,200);
    fill(colors[1]);
    circle(250,250,115);
    
//Irish flag
    fill(colors[3]);
    noStroke();
    rect(420,150,300,200);
    
    fill(colors[7]);
    rect(420,150,100,200);
    
    fill(colors[8]);
    rect(620,150,100,200);

//German flag
    fill(colors[1]);
    rect(100+320,370,300,200);
    
    fill(colors[9]);
    rect(100+320,503,300,67);
    
     fill(colors[11]);
    rect(100+320,370,300,67);
    
//Scottish flag
     fill(colors[3]);
    rect(100,370,300,200);
    
    fill(colors[10]);
    triangle(100, 541, 100, 395, 216, 468);
    triangle(400, 541, 400, 395, 286, 468);
    
    triangle(120, 370, 375, 370, 250, 455);
    triangle(120, 370+200, 375, 370+200, 250, 455+30);
    
}

function draw() {
    // put drawing code here 
    

}

