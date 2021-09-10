img="";
statusa="";
ans="";

function preload() {
    img=loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc020121toolbox-001-1607447196.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    od=ml5.objectDetector("cocossd",modalLoaded);
}

function draw() {
    //console.log("step1");
    image(img,0,0,640,420);
    if(statusa!=" "){
    for (i=0;i<ans.lenght;i++) {
        console.log("step2");
        fill(255,255,255);
        text(ans[i].label,ans[i].x,ans[i].y);
        noFill();
        stroke(255,255,255);
        rect(ans[i].x,ans[i].y,ans[i].width,ans[i].height);
        console.log("step3");
    }
    }
    //console.log("step4");
}

function modalLoaded() {
    statusa=true;
    console.log("modal is loaded");
    od.detect(img,gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        ans=results;
    }
}

function back() {
    window.location="index.html";
}