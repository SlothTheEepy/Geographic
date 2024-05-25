
var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
console.log(canvas);

var y = document.getElementById("states").value;

//line n1
c.beginPath();
c.moveTo(333, 0);
c.lineTo(333, 500);
c.stroke();

//line n2
c.beginPath();
c.moveTo(666, 0);
c.lineTo(666, 500);
c.stroke();

var x = Math.floor((Math.random() * 10) + 1);

switch(x){

    case 1:

    //bandiera
    c.fillStyle = "black";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(33, 225);
    c.lineTo(300, 225);
    c.lineTo(300, 175);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(33, 225);
    c.lineTo(33, 275);
    c.lineTo(300, 275);
    c.lineTo(300, 225);
    c.lineTo(33, 225);
    c.fill();
    c.stroke();

    c.fillStyle = "yellow";
    c.beginPath();
    c.moveTo(33, 275);
    c.lineTo(33, 325);
    c.lineTo(300, 325);
    c.lineTo(300, 275);
    c.lineTo(33, 275);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("LPDB");
            c.drawImage(img, 335, 50);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath()
    c.font = "30px Comic Sans MS";
    c.fillText("Berlino", 780, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }

    y=0;

    break;

    case 2:
    
    //bandiera
    c.fillStyle = "blue";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(122, 175);
    c.lineTo(122, 325);
    c.lineTo(33, 325);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(122, 175);
    c.lineTo(211, 175);
    c.lineTo(211, 325);
    c.lineTo(122, 325);
    c.lineTo(122, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(211, 175);
    c.lineTo(300, 175);
    c.lineTo(300, 325);
    c.lineTo(211, 325);
    c.lineTo(211, 175);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("TE");
            c.drawImage(img, 340, 50);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath()
    c.font = "30px Comic Sans MS";
    c.fillText("Parigi", 790, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;
    
    break;

    case 3:
    
    //bandiera
    c.fillStyle = "green";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(122, 175);
    c.lineTo(122, 325);
    c.lineTo(33, 325);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(122, 175);
    c.lineTo(211, 175);
    c.lineTo(211, 325);
    c.lineTo(122, 325);
    c.lineTo(122, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(211, 175);
    c.lineTo(300, 175);
    c.lineTo(300, 325);
    c.lineTo(211, 325);
    c.lineTo(211, 175);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("IC");
            c.drawImage(img, 340, 15);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath()
    c.font = "30px Comic Sans MS";
    c.fillText("Roma", 790, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;
    
    break;

    case 4:

    //bandiera
    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(33, 225);
    c.lineTo(300, 225);
    c.lineTo(300, 175);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "blue";
    c.beginPath();
    c.moveTo(33, 225);
    c.lineTo(33, 275);
    c.lineTo(300, 275);
    c.lineTo(300, 225);
    c.lineTo(33, 225);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(33, 275);
    c.lineTo(33, 325);
    c.lineTo(300, 325);
    c.lineTo(300, 275);
    c.lineTo(33, 275);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("LCDSB");
            c.drawImage(img, 340, 20);
        };
    
    //capitale
    c.fillStyle ="black";
    c.beginPath()
    c.font = "30px Comic Sans MS";
    c.fillText("Mosca", 785, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;
    
    break;

    case 5:

    //bandiera
    c.fillStyle = "lightblue";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(33, 225);
    c.lineTo(300, 225);
    c.lineTo(300, 175);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "black";
    c.beginPath();
    c.moveTo(33, 225);
    c.lineTo(33, 275);
    c.lineTo(300, 275);
    c.lineTo(300, 225);
    c.lineTo(33, 225);
    c.fill();
    c.stroke();

    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(33, 275);
    c.lineTo(33, 325);
    c.lineTo(300, 325);
    c.lineTo(300, 275);
    c.lineTo(33, 275);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("RUSSALKA");
            c.drawImage(img, 340, 5);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath();
    c.font = "30px Comic Sans MS";
    c.fillText("Tallinn", 785, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;

    break;

    case 6:
    
    //bandiera
    c.fillStyle = "yellow";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(33, 225);
    c.lineTo(300, 225);
    c.lineTo(300, 175);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "darkgreen";
    c.beginPath();
    c.moveTo(33, 225);
    c.lineTo(33, 275);
    c.lineTo(300, 275);
    c.lineTo(300, 225);
    c.lineTo(33, 225);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(33, 275);
    c.lineTo(33, 325);
    c.lineTo(300, 325);
    c.lineTo(300, 275);
    c.lineTo(33, 275);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("LCDV");
            c.drawImage(img, 340, 28);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath();
    c.font = "30px Comic Sans MS";
    c.fillText("Vilnius", 785, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;
    
    break;

    case 7:
    
    //bandiera
    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(33, 225);
    c.lineTo(300, 225);
    c.lineTo(300, 175);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(33, 225);
    c.lineTo(33, 275);
    c.lineTo(300, 275);
    c.lineTo(300, 225);
    c.lineTo(33, 225);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(33, 275);
    c.lineTo(33, 325);
    c.lineTo(300, 325);
    c.lineTo(300, 275);
    c.lineTo(33, 275);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("HP");
            c.drawImage(img, 340, 12);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath();
    c.font = "30px Comic Sans MS";
    c.fillText("Vienna", 785, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;

    break;

    case 8:

    //bandiera
    c.fillStyle = "black";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(122, 175);
    c.lineTo(122, 325);
    c.lineTo(33, 325);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "yellow";
    c.beginPath();
    c.moveTo(122, 175);
    c.lineTo(211, 175);
    c.lineTo(211, 325);
    c.lineTo(122, 325);
    c.lineTo(122, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(211, 175);
    c.lineTo(300, 175);
    c.lineTo(300, 325);
    c.lineTo(211, 325);
    c.lineTo(211, 175);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("AB");
            c.drawImage(img, 340, 20);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath();
    c.font = "30px Comic Sans MS";
    c.fillText("Bruxelles", 775, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;

    break;

    case 9:

    //bandiera
    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(33, 225);
    c.lineTo(300, 225);
    c.lineTo(300, 175);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "green";
    c.beginPath();
    c.moveTo(33, 225);
    c.lineTo(33, 275);
    c.lineTo(300, 275);
    c.lineTo(300, 225);
    c.lineTo(33, 225);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(33, 275);
    c.lineTo(33, 325);
    c.lineTo(300, 325);
    c.lineTo(300, 275);
    c.lineTo(33, 275);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("SDSS");
            c.drawImage(img, 345, 28);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath();
    c.font = "30px Comic Sans MS";
    c.fillText("Sofia", 785, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;

    break;

    case 10:

    //bandiera
    c.fillStyle = "blue";
    c.beginPath();
    c.moveTo(33, 175);
    c.lineTo(122, 175);
    c.lineTo(122, 325);
    c.lineTo(33, 325);
    c.lineTo(33, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "yellow";
    c.beginPath();
    c.moveTo(122, 175);
    c.lineTo(211, 175);
    c.lineTo(211, 325);
    c.lineTo(122, 325);
    c.lineTo(122, 175);
    c.fill();
    c.stroke();

    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(211, 175);
    c.lineTo(300, 175);
    c.lineTo(300, 325);
    c.lineTo(211, 325);
    c.lineTo(211, 175);
    c.fill();
    c.stroke();

        //monumento
        window.onload = function() {
            const img = document.getElementById("ICDD");
            c.drawImage(img, 340, 28);
        };
    
    //capitale
    c.fillStyle = "black";
    c.beginPath();
    c.font = "30px Comic Sans MS";
    c.fillText("Budapest", 775, 250);
    c.stroke();

    //risposta
    y = document.getElementById("states").value;

        if(x == y){
            window.alert("Corretto");
        }else{
            window.alert("Errato");
        }
        
    y=0;

    break;
}

