"use strict";

function zoneGraph(){
    //creation de l'espace de dessin, du graph
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(20,200);
        ctx.lineTo(380,200);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(20,100);
        ctx.lineTo(380,100);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.font = "12px Arial";
        ctx.fillText("La moyenne de Toto est de : ",50,250);
        ctx.closePath();
        
        ctx.beginPath();
        ctx.font = "10px Arial";
        ctx.fillText("Français : 6 ",50,210);
        ctx.fillText("Mathématiques : 14 ",170,210);
        ctx.fillText("Histoire : 9 ",290,210);
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(50, 140, 20, 60);
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(170, 60, 20, 140);
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.fillRect(290, 110, 20, 90);
        ctx.closePath();
    }
function color(note){
   if (note<8){
       color="red";
   }else if (note>8&&note<10){
       color="orange";
   }else if (note>10&&note<12){
       color="purple";
   }else if (note>12&&note<15){
       color="blue";
   }else if (note>15){
       color="green";
   }
}

 