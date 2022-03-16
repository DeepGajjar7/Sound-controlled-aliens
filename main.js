//https://teachablemachine.withgoogle.com/models/THE0KuYGb/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/THE0KuYGb/model.json',modelloaded);
}

function modelloaded(){
    classifier.classify(gotresult);
}

function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("soundname").innerHTML="I can hear- "+results[0].label;
        document.getElementById("soundaccuracy").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2);
        randomnumber_r =Math.floor(Math.random()*255)+ 1;
        randomnumber_b =Math.floor(Math.random()*255)+ 1;
        randomnumber_g =Math.floor(Math.random()*255)+ 1;
        document.getElementById("soundname").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        document.getElementById("soundaccuracy").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        var image1=document.getElementById("aliens-01");
        var image2=document.getElementById("aliens-02");
        var image3=document.getElementById("aliens-03");
        var image4=document.getElementById("aliens-04");
        if(results[0].label=="snapping"){
            image1.src="aliens-01.gif";
            image2.src="aliens-02.png";
            image3.src="aliens-03.png";
            image4.src="aliens-04.png";
        }
        else if(results[0].label=="clapping"){
            image1.src="aliens-01.png";
            image2.src="aliens-02.gif";
            image3.src="aliens-03.png";
            image4.src="aliens-04.png";
        }
        else if(results[0].label=="bell"){
            image1.src="aliens-01.png";
            image2.src="aliens-02.png";
            image3.src="aliens-03.gif";
            image4.src="aliens-04.png";
        }
        else {
            image1.src="aliens-01.png";
            image2.src="aliens-02.png";
            image3.src="aliens-03.png";
            image4.src="aliens-04.gif";
        }
    }
}

