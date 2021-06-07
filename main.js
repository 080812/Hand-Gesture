var prediction1=""
var prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach('#camera')

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'">'
    })
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cQJCawRvI/model.json',modelloaded)
function modelloaded(){
    console.log(modelloaded)
}

function speak(){
    synth=window.speechSynthesis
    speakdata1="the first prediction is "+prediction1
    speakdata2="the second prediction is "+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}
    
