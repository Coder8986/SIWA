// https://teachablemachine.withgoogle.com/models/IOoGc4mAw/ //

function Start() {
navigator.mediaDevices.getUserMedia({audio:true});
 classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IOoGc4mAw/model.json", modelready);
}

function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error, result){
    if (error) {
        console.log(error);
    }

    else {
console.log(result);

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);

document.getElementById("Result").innerHTML = "I can hear " + result[0].label;
document.getElementById("Accuracy").innerHTML = "Accuracy " + (result[0].confidence * 100).toFixed(2) + " %";

document.getElementById("Result").style.color = "rgb(" + r + "," + g + "," + b + ")";
document.getElementById("Accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

img_1 = document.getElementById("img1");
img_2 = document.getElementById("img2");
img_3 = document.getElementById("img3");
img_4 = document.getElementById("img4");

if ( result[0].label == "Tap") {
    img_1.src = "aliens-01.gif"
    img_2.src = "aliens-02.png"
    img_3.src = "aliens-03.png"
    img_4.src = "aliens-04.png"
}

else if( result[0].label == "Snap") {
    img_1.src = "aliens-01.png"
    img_2.src = "aliens-02.gif"
    img_3.src = "aliens-03.png"
    img_4.src = "aliens-04.png"
}

else if( result[0].label == "Clap") {
    img_1.src = "aliens-01.png"
    img_2.src = "aliens-02.png"
    img_3.src = "aliens-03.gif"
    img_4.src = "aliens-04.png"
}

else  {
    img_1.src = "aliens-01.png"
    img_2.src = "aliens-02.png"
    img_3.src = "aliens-03.png"
    img_4.src = "aliens-04.gif"
}


}

}
