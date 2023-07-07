function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 500);
    canvas.position(550, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("posenet is intialized");
}
function draw(){
    background("pink");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}