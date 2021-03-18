
function setup() {
    
    createCanvas(innerWidth, innerHeight);
    background(220);
    
    textSize(15);
    fill('black')
    text('Type in your pay to find the tip',20, 25);
    fill('white');
    text('CL = CLEAR', 240,25);
    
    input = createInput();
    input.position (20, 40);
    
    button = createButton ('%5');
    button.position(input.x + input.width + 5, 40)
    button.mousePressed(function() { tipCal(0.05);} );
    
    button = createButton ('%10');
    button.position(input.x + input.width + 45, 40)
    button.mousePressed(function() { tipCal(0.1);} );
    
    button = createButton ('%15');
    button.position(input.x + input.width + 90, 40)
    button.mousePressed(function() { tipCal(0.15);} );
    
    button = createButton ('%20');
    button.position(input.x + input.width + 135, 40)
    button.mousePressed(function() { tipCal(0.20);} );
    
    button = createButton ('Squared calculation');
    button.position(input.x + input.width + 45, 70)
    button.mousePressed(sqd); 
    
    button = createButton ('CL');
    button.position(input.x + input.width + 8, 70)
    button.mousePressed(CL); 
    
}


function draw() { 
    
}


function tipCal(percent){
    fill('black')
    let number = input.value();
    let locationY = 50 + percent * 800;
    if(number>-1000000)
    {
        let TipAmount = number * percent;
        text('The '+ percent +' tip of $' + number + ' = $' + TipAmount, 20, locationY);
    }
    else{
       text('Please input a number, Thank you!',20, 270); 
    }
}

function sqd(){
    fill('black')
    let number = input.value();
    if(number>-1000000)
    {
        let SqdNum = number * number;
        text('The square of ' + number + ' = ' + SqdNum, 230, 115);
    }
    else{
       text('Please input a number, Thank you!',20, 270);
    }
}

function CL(){
    background(220);
    textSize(15);
    text('Type in your pay to find the tip',20, 25);
    fill('white');
    text('CL = CLEAR', 240,25);
}

/*
function tenTip(){
    let number = input.value();
    if(number>-1000000)
    {
        let TipAmount = number * .10;
        text('The 10% tip of $' + number + ' = $' + TipAmount, 20, 100);
    }
    else{
       text('Please input a number, Thank you!',20, 180) 
    }
}

function fiftTip(){
    let number = input.value();
    if(number>-1000000)
    {
        let TipAmount = number * .15;
        text('The 15% tip of $' + number + ' = $' + TipAmount, 20, 120);
    }
    else{
       text('Please input a number, Thank you!',20, 180) 
    }
}

function twentTip(){
    let number = input.value();
    if(number>-1000000)
    {
        let TipAmount = number * .20;
        text('The 20% tip of $' + number + ' = $' + TipAmount, 20, 140);
    }
    else{
       text('Please input a number, Thank you!',20, 180) 
    }
}
*/
