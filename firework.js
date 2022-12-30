let img;
let song;

function preload() {
    img = loadImage("static/backgound.jpg")
    song = loadSound("static/bgm-cut.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    img.resize(width, height);
    // set the color of backround as black
    background(0);
    song.play();
    song.loop();
}

function draw() {
    for (let i = 0; i < 200; i++) {
        if (i < 100) {
            let x = int(random(width));
            let y = int(random(height));

            let col = img.get(x, y);
            fill(col, 127);

            noStroke();

            let diameter = map(brightness(col) / 5, 0, 255, 1, 80);

            ellipse(x, y, diameter);
        } else {
            let x = int(random(width));
            let y = int(random(height));

            let col = img.get(x, y)
            noStroke();

            let rotation = map(saturation(col), 0, 255, 0, 100);
            let length = map(brightness(col), 0, 255, 0, 100);

            fill(red(col), green(col), blue(col), 128);
            push();
            translate(x, y);
            rotate(radians(rotation))

            rect(0, 0, 2, length);
            pop();
        }
    }
}

// control the fullscreen 
function doubleClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let fs = fullscreen();
        fullscreen(!fs);
        img.resize(width, height);
    }
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        userStartAudio();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}