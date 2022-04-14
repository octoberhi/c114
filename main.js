function preload(){
clownNose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
background("blue");
image(video,0,0,300,300);
}