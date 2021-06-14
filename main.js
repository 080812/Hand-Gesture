var prediction1 = ""
var prediction2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera")
Webcam.attach('#camera')

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capturedimage" src="' + data_uri + '">'
    })
}

console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/r0NwCwTbM/model.json', modelloaded)
function modelloaded() {
    console.log("mode is loaded")
}

function speak(){
    synth=window.speechSynthesis
    speakdata1="the first prediction is "+prediction1
    speakdata2=" and the second prediction is "+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}

function check() {
    console.log("check")
    img = document.getElementById('capturedimage');
    console.log("check2")
    classifier.classify(img, gotresult)
}

function gotresult(error,results){
    if(error){
        console.error(error);
        
    }else{
        
         console.log(results);
    document.getElementById("resultgesturename1").innerHTML=results[0].label; 
    document.getElementById("resultgesturename2").innerHTML=results[1].label; 
 
    prediction1=results[0].label;
    prediction2=results[1].label;

    if(prediction1=="Victory"){
        document.getElementById("updategesture1").innerHTML="&#9996"
    }
    if(prediction1=="Good"){
        document.getElementById("updategesture1").innerHTML="&#128077"
    }
    if(prediction1=="Bad"){
        document.getElementById("updategesture1").innerHTML="&#128078"
    }
    if(prediction1=="Rock"){
        document.getElementById("updategesture1").innerHTML="&#129304"
    }
     if(prediction1=="Super"){
        document.getElementById("updategesture1").innerHTML="&#128076"
    }
     if(prediction1=="Punch"){
        document.getElementById("updategesture1").innerHTML="&#9994"
    }
     if(prediction1=="Up"){
        document.getElementById("updategesture1").innerHTML="&#9757"
    }
     if(prediction1=="Down"){
        document.getElementById("updategesture1").innerHTML="&#9759"
    } 
    if(prediction1=="Cross"){
        document.getElementById("updategesture1").innerHTML="&#129310"
    }


    if(prediction2=="Victory"){
        document.getElementById("updategesture2").innerHTML="&#9996"
    }
    if(prediction2=="Good"){
        document.getElementById("updategesture2").innerHTML="&#128077"
    }
    if(prediction2=="Bad"){
        document.getElementById("updategesture2").innerHTML="&#128078"
    }
    if(prediction2=="Rock"){
        document.getElementById("updategesture2").innerHTML="&#129304"
    }
     if(prediction2=="Super"){
        document.getElementById("updategesture2").innerHTML="&#128076"
    }
     if(prediction2=="Punch"){
        document.getElementById("updategesture2").innerHTML="&#9994"
    }
     if(prediction2=="Up"){
        document.getElementById("updategesture2").innerHTML="&#9757"
    }
     if(prediction2=="Down"){
        document.getElementById("updategesture2").innerHTML="&#9759"
    } 
    if(prediction2=="Cross"){
        document.getElementById("updategesture2").innerHTML="&#129310"
    }
    speak()
 }
 }

