noseX=0
noseY=0

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/L66RdYt3/Nose-Clown.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;

        console.log("La coordenada en X es:" + noseX + "La coordenada en Y es:" + noseY);
    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30)
    // fill(233, 168, 5);
    // stroke(233, 168, 4);
    // circle(noseX, noseY, 20);
}

function take_snapshot()
{
    save("Filtro-Payaso.png");
}
