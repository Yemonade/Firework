let img;
let song;
let mobile_flag;

function preload() {
    mobile_flag = isMobile()
    if (mobile_flag) {
        img = loadImage("static/backgound-rotate.jpg")
    } else {
        img = loadImage("static/backgound.jpg")
    }
    song = loadSound("static/bgm-cut.mp3")
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("container");
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
            if (mobile_flag === true) {
                rotate(radians(rotation) + PI / 180 * 90);
            } else {
                rotate(radians(rotation));
            }

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

function isMobile() {
    let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return flag;
}