function preload(){

}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    c =""
}

function draw(){
    image(video,0,0,600,400)
    circle(30,30,50);
    rect(30, 20, 450, 15);
    circle(470,30,50);
    rect(20, 20, 15, 350);
    rect(460, 20, 15, 350);
    circle(30,360,50);
    rect(30, 360, 450, 15);
    circle(470,360,50);
}   
