noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function preload(){
}

function setup(){
    canvas = createCanvas(550,550);
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " +noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function modelloaded(){
    console.log("poseNet is intialized");
}

function draw(){
    background('969A97');
    document.getElementById("square_side").innerHTML = "font size of the text will be = " + difference +"px";
    fill('#F90930');
    textSize(difference);
    stroke('#F90093');
    text('sadim',50,400);
}
