
let playlist = ['music/ReRe_AKFG.mp3','music/Allie X - Susie Save Your Love.mp3','music/Zutomayo - Bite The Second Hand.mp3','music/Giveon - LIKE I WANT YOU.mp3','music/Queen Naija - Beautiful.mp3'];

let playbutton, stopbutton;
let song1, song2, song3, song4, song5;
let img1, img2, img3, img4, img5;
let HomeEducation, Winkle;

function preload() {
    HomeEducation = loadFont('font/HomeEducation.otf');
    Winkle = loadFont('font/Winkle-Regular.ttf');
    
    song1 = loadSound(playlist[0]);
    song2 = loadSound(playlist[1]);
    song3 = loadSound(playlist[2]);
    song4 = loadSound(playlist[3]);
    song5 = loadSound(playlist[4]);
    
    img1 = loadImage('album/ReReErased.jpg');
    img2 = loadImage('album/AllieX.jpg');
    img3 = loadImage('album/zutomayo.jpg');
    img4 = loadImage('album/Giveon.jpg')
    img5 = loadImage('album/Queen Naija.jpg')
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255, 232, 214);

    //Play Button for Song #1
    playbutton = createButton('Play');
    playbutton.position(20+30, 90+30);
    playbutton.mousePressed(playSong1);
    //Stop Button for Song #1
    stopbutton = createButton('Stop');
    stopbutton.position(75+30, 90+30);
    stopbutton.mousePressed(stopSong1);
    
    //Play Button for Song #2
    playbutton = createButton('Play');
    playbutton.position(20+30, 160+30);
    playbutton.mousePressed(playSong2);
    //Stop Button for Song #2
    stopbutton = createButton('Stop');
    stopbutton.position(75+30, 160+30);
    stopbutton.mousePressed(stopSong2);
    
    //Play Button for Song #3
    playbutton = createButton('Play');
    playbutton.position(20+30, 230+30);
    playbutton.mousePressed(playSong3);
    //Stop Button for Song #3
    stopbutton = createButton('Stop');
    stopbutton.position(75+30, 230+30);
    stopbutton.mousePressed(stopSong3);
    
    //Play Button for Song #4
    playbutton = createButton('Play');
    playbutton.position(20+30, 300+30);
    playbutton.mousePressed(playSong4);
    //Stop Button for Song #4
    stopbutton = createButton('Stop');
    stopbutton.position(75+30, 300+30);
    stopbutton.mousePressed(stopSong4);
    
    //Play Button for Song #5
    playbutton = createButton('Play');
    playbutton.position(20+30, 370+30);
    playbutton.mousePressed(playSong5);
    //Stop Button for Song #5
    stopbutton = createButton('Stop');
    stopbutton.position(75+30, 370+30);
    stopbutton.mousePressed(stopSong5);
}

function draw() {    
    fill(183, 183, 164);
    stroke(107, 112, 92);
    rect(10+25,10+20,350,450);
    noStroke();
    
    textFont(HomeEducation);
    fill(255, 232, 214);
    textSize(44);
    text('🎵 Playlist:', 30+25, 50+25);
    
    textFont(Winkle);
    fill(255);
    textSize(22);
    text('Asian Kung-Fu Generation - Re:Re:', 50, 80+30);
    text('Allie X - Susie Save Your Love', 50, 150+30);
    text('Zutomayo - Bite The Second Hand', 50, 220+30);
    text('Giveon - LIKE I WANT YOU', 50, 290+30);
    text('Queen Naija - Beautiful', 50, 360+30);
}

    //Song #1 Play & Stop Functions
function playSong1() {
    if(song1.isPlaying() == false);
    {
        song1.play();
        song1.setVolume(0.3);
        image(img1, 420, 40, 300, 300);
        console.log('Log: Song #1 is Playing');
        print('Print: Song #1 is Playing');
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
    }
}
function stopSong1() {
    if(song1.isPaused() == true);
    {
        song1.pause();
        background(255, 232, 214);
        console.log('Log: Song #1 is Paused')
        print('Print: Song #1 is Paused');
    }
}

    //Song #2 Play & Stop Functions
function playSong2() {
    if(song2.isPlaying() == false);
    {
        song2.play();
        song2.setVolume(0.3);
        image(img2, 420, 40, 300, 300);
        console.log('Log: Song #2 is Playing');
        print('Print: Song #2 is Playing');
        song1.pause();
        song3.pause();
        song4.pause();
        song5.pause();
    }
}
function stopSong2() {
    if(song2.isPaused() == true);
    {
        song2.pause();
        background(255, 232, 214);
        console.log('Log: Song #2 is Paused')
        print('Print: Song #2 is Paused');
    }
}

    //Song #3 Play & Stop Functions
function playSong3() {
    if(song3.isPlaying() == false);
    {
        song3.play();
        song3.setVolume(0.3);
        image(img3, 420, 40, 300, 300);
        console.log('Log: Song #3 is Playing');
        print('Print: Song #3 is Playing');
        song2.pause();
        song1.pause();
        song4.pause();
        song5.pause();
    }
}
function stopSong3() {
    if(song3.isPaused() == true);
    {
        song3.pause();
        background(255, 232, 214);
        console.log('Log: Song #3 is Paused')
        print('Print: Song #3 is Paused');
    }
}


   //Song #4 Play & Stop Functions
function playSong4() {
    if(song4.isPlaying() == false);
    {
        song4.play();
        song4.setVolume(0.3);
        image(img4, 420, 40, 300, 300);
        console.log('Log: Song #4 is Playing');
        print('Print: Song #4 is Playing');
        song2.pause();
        song3.pause();
        song1.pause();
        song5.pause();
    }
}
function stopSong4() {
    if(song4.isPaused() == true);
    {
        song4.pause();
        background(255, 232, 214);
        console.log('Log: Song #4 is Paused');
        print('Print: Song #4 is Paused');
    }
}

//Song #5 Play & Stop Functions
function playSong5() {
    if(song5.isPlaying() == false);
    {
        song5.play();
        song5.setVolume(0.3);
        image(img5, 420, 40, 300, 300);
        console.log('Log: Song #5 is Playing');
        print('Print: Song #5 is Playing');
        song2.pause();
        song3.pause();
        song4.pause();
        song1.pause();
    }
}
function stopSong5() {
    if(song5.isPaused() == true);
    {
        song5.pause();
        background(255, 232, 214);
        console.log('Log: Song #5 is Paused');
        print('Print: Song #5 is Paused');
    }
}











