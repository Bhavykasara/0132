ans=[];
img="";
statusa=" ";

function preload() {
    img=loadImage("https://images.creativemarket.com/0.1.0/ps/1107484/1360/1020/m1/fpnw/wm1/vk3szrgfaalgg0i5ymxzbl8qymj8cpdtnaszgmemqpvkordzzmiuc38ombjrqnt4-.jpg?1458656355&s=af0062559af452ffbf43d53f393ab41f");
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
        text(ans[i].label,ans[i].x-15,ans[i].y-15);
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