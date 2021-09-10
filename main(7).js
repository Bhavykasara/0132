img="";
statusa="";

ans="";

function preload() {
    
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.hide();

    od=ml5.objectDetector("cocossd",modalLoaded);
}

function modalLoaded() {
    console.log("modal is loaded");
    status=true;
    od.detect(vedio,gotResults);
}

function gotResults(results,error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        ans=results;
    }
}

function draw() {
    image(vedio,0,0,640,420);

    for (i=0;i<ans.lenght;i++) {
        fill(255,255,255);
        text(ans[i].label,ans[i].x,ans[i].y);
        noFill();
        stroke(255,255,255);
        rect(ans[i].x,ans[i].y,ans[i].width,ans[i].height);
    }
}

function back() {
    window.location="index.html";
}