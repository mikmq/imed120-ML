//READ ME

// Hello WK 3,4,7 Homeworks are in their respected folders.
// wk3 text = Poem, wk4 flag = Color, wk7 = music player




let colors = ['black','grey', 'red','orange','yellow','green','blue', 'purple','white','pink'];

function setup() {
  
    createCanvas(innerWidth, innerHeight);
    background(colors[9]);
    
	console.log(colors.length);
}


function draw() { 
	
/*/ 3 rows circles (x,y,d), each row has 5    
//for loop method
	
    noLoop();
	for(let i=0; i<colors.length; i++) {
    for(let x = 0; x<5; x++){
        for(let y=0; y<3; y++){
   
        let size = random(75);
		//let size = (75);
        noStroke;
		fill(colors[i]);
        circle(138+x*110, 80+y*110, size);
	}
	}
	}*/
	
	//Dr. Liu circle
	for(let i=0; i<colors.length; i++) {
		noStroke();
		fill(colors[i]);
		circle(280,280,420 - i*50);
	}
	
}