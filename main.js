//https://teachablemachine.withgoogle.com/models/THE0KuYGb/
function startdancing(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/THE0KuYGb/model.json',modelloaded);
}

function modelloaded(){
    classifier.classify(gotresult);
}