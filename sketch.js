let state = 0;
let music1;
let music2;
let music3;
let music4;
let music5;
let music6;
let disk1;
let disk2;
let disk3;
let disk4;
let disk5;
let disk6;
let cover1;
let cover2;
let cover3;
let cover4;
let cover5;
let cover6;
let bg1, bg2, bg3, bg4, bg5, bg6, bg7;
let angle=0;

function preload() {
  soundFormats('mp3', 'ogg');
  music1 = loadSound("9 to 5");
  music2 = loadSound("Feel Invincible");
  music3 = loadSound("Rock This Town");
  music4 = loadSound("Happier");
  music5 = loadSound("Country Boy (Shake It For Me)");
  music6 = loadSound("Ballroom Of Romance");
  angleMode(Degrees);
}

function setup() {
  bg1 = loadImage ('vintage-vinyl.png');
  //bg2 = loadImage ();
  // bg3 = loadImage ();
  // bg4 = loadImage ();
  // bg5 = loadImage ();
  // bg6 = loadImage ();
  bg7 = loadImage ('Celtic Forest.jpg');
  disk1 = loadImage('9 to 5.png');
  disk2 = loadImage('Feel Invincible.png');
  disk3 = loadImage('Rock This Town.png');
  disk4 = loadImage('Happier.png');
  disk5 = loadImage('Country Boy.png');
  disk6 = loadImage('Ballroom Of Romance.png');
  cover1 = loadImage('Classic Cover.png');
  cover2 = loadImage('Metal Cover.png');
  cover3 = loadImage('Rock Cover.png');
  cover4 = loadImage('Pop Cover.png');
  cover5 = loadImage('Country Cover.png');
  cover6 = loadImage('Celtic Cover.png');
  createCanvas(800,600);
  state = 0;
  textAlign(CENTER);
  
}

function draw() {
  if (state == 0) {
    background(bg1);
    splashScreen();
  } else if (state == 1) {
    classicSongScreen();
  } else if (state == 2) {
    metalSongScreen();
  } else if (state == 3) {
    rockSongScreen();
  } else if (state == 4) {
    popSongScreen();
  } else if (state == 5) {
    countrySongScreen();
  } else if (state == 6) {
    celticSongScreen();
  }
}

function splashScreen() {
  fill(0);
  strokeWeight(3);
  stroke(255,255,255,90);
  textFont('Krungthep');
  textSize(60);
  text("Retro Music Picker", width / 2, height / 4);
  textSize(20);
  text("By Elizabeth Enloe & ", width / 2, height / 3);
  text(
    "Use the keypad or click the mouse to select the song you wish to play!",
    width / 2,
    height / 2
  );
}


function mouseClicked () {
  state = 1;
  music2.stop();
  music3.stop();
  music4.stop();
  music5.stop();
  music6.stop();
  music1.loop();
  music1.play();
  }

function keyPressed() {
  if (keyCode === UP_ARROW) {
    state = 2;
    music1.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
    music2.loop();
    music2.play();
  } else if (keyCode === DOWN_ARROW) {
    state = 3;
    music1.stop();
    music2.stop();
    music4.stop();
    music5.stop();
    music6.stop();
    music3.loop();
    music3.play();
  } else if (keyCode === LEFT_ARROW) {
    state = 4;
    music1.stop();
    music2.stop();
    music3.stop();
    music5.stop();
    music6.stop();
    music4.loop();
    music4.play();
  } else if (keyCode === RIGHT_ARROW) {
    state = 5;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music6.stop();
    music5.loop();
    music5.play();
  } else if (keyCode === 32) {
    state = 6;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.loop();
    music6.play();
  }

  if (keyCode === 8) { //backspace
    if (state ==1) {
      music1.stop();
    }
    if (state ==2) {
      music2.stop();
    }
    if (state ==3) {
      music3.stop();
    }
    if (state ==4) {
      music4.stop();
    }
    if (state ==5) {
      music5.stop();
    }
    if (state ==6) {
      music6.stop();
    }
  }
  }

function classicSongScreen() {
  background(150);
  fill(0);
  textSize(60);
  textFont('DIN');
  text("9 to 5", width / 2, 60);
  fill(255);
  rectMode(CENTER);
  rect(50, height/2-200, 60, 60);
  coverSet();
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(angle);
  imageMode(CENTER);
  image(disk1,0,0,350,350)
  angle++;
  angle++;
}

function metalSongScreen() {
  background(0);
  fill(255);
  textSize(60);
  textFont('Krungthep');
  text("Feel Invincible", width / 2, 60);
  fill(255);
  rectMode(CENTER);
  rect(50, height/2-120, 60, 60);
  coverSet();
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(angle);
  fill(255);
  ellipse(0,0,353);
  imageMode(CENTER);
  image(disk2,0,0,350,350)
  angle++;
  angle++;
}

function rockSongScreen() {
  background(229, 57, 53);
  fill(0);
  textSize(60);
  textFont('Gill Sans');
  text("Rock This Town", width / 2, 60);
  fill(255);
  rectMode(CENTER);
  rect(50, height/2-40, 60, 60);
  coverSet();
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(angle);
  imageMode(CENTER);
  image(disk3,0,0,350,350)
  angle++;
  angle++;
}

function popSongScreen() {
  background(250, 211, 225);
  fill(0);
  textSize(60);
  textFont('Bookerly Display');
  text("Happier", width / 2, 60);
  fill(255);
  rectMode(CENTER);
  rect(50, height/2+40, 60, 60);
  coverSet();
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(angle);
  imageMode(CENTER);
  image(disk4,0,0,350,350)
  angle++;
  angle++;
}

function countrySongScreen() {
  background(224, 196, 153);
  fill(0);
  textSize(60);
  textFont('Bookerly');
  text("Country Boy", width / 2, 60);
  textSize(30);
  text("(Shake It For Me)", width / 2, 100);
  fill(255);
  rectMode(CENTER);
  rect(50, height/2+120, 60, 60);
  coverSet();
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(angle);
  imageMode(CENTER);
  image(disk5,0,0,350,350)
  angle++;
  angle++;
}

function celticSongScreen() {
  // imageMode(CORNERS);
  // tint(255, alpha);
  // background (bg7, width, height);
  background (121, 210, 121);
  fill(0);
  textSize(60);
  textFont('Apple Chancery');
  text("Ballroom of Romance", width / 2, 60);
  // fill(255);
  // rectMode(CENTER);
  // rect(50, height/2+200, 60, 60);
  coverSet();
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(angle);
  imageMode(CENTER);
  image(disk6,0,0,350,350)
  angle++;
  angle++;
}

function coverSet () {
  image(cover1, 50, height/2 -200, 50,50);
  image(cover2, 50, height/2 -120, 50,50);
  image(cover3, 50, height/2-40, 50,50);
  image(cover4, 50, height/2+40, 50,50);
  image(cover5, 50, height/2+120, 50,50);
  image(cover6, 50, height/2+200, 50,50);
}
