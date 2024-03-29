var score=0;
var rannum1;
var rannum2;
let count=1;

function nextq(){
    rannum1=Math.floor(Math.random()*10+5);
    rannum2=Math.floor(Math.random()*5+1);
    $(".randomq").text(`${rannum1} - ${rannum2}= ?`);
    $("#answer").val("");
}

function game(){
    nextq();
    $("#submit").on("click",function(){
        var ans = $("#answer").val();
        if(ans==(rannum1-rannum2)){
            score++;
            console.log(score);
            console.log("correct");
            console.log(count);
            
        }
        else{
            console.log("wrong");
            console.log(count);
            
        }
        count++;
        if(count<=5){
            nextq();
        }
        else{
            $(".input").hide();
            $(".randomq").css("color","#2DFE54");
            $(".questions").css("height","60vh");
            $(".randomq").text(`You scored ${score}/5!`);  
        }        
    });    
}

$(document).ready(function(){
    game();
});