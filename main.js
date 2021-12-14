function preload(){

}

function draw(){
    image(video,200,120,250,250);
    fill("#FF0000");
    stroke("#FF0000");


    circle(50,50,50);
    circle(580,50,50);
    circle(50,420,50);
    circle(580,420,50);


fill("#FFA500");
stroke("#FFA500");


rect(75,40,480,20);
rect(75,410,480,20);
rect(40,75,20,320);
rect(570,75,20,320);
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(200,200);
    video=createCapture(VIDEO);

    video.hide();
}

function take_snapshot(){
    save("photoframe.png");
}