player1_name=localStorage.getItem("player_1")
player2_name=localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML=player1_name
document.getElementById("player2_name").innerHTML=player2_name
document.getElementById("player_question").innerHTML="Question turn= "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn= "+player2_name
player1_score=0
player2_score=0
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
function send(){
    number1=document.getElementById("number1").value
    number2=document.getElementById("number2").value
    display_question=number1+"X"+number2
    question=number1*number2
    questionword="<h4 id='word_display'>"+display_question+"</h4>"
    inputbox="<br>answer=<input id='inputcheckbox'>"
    checkbutton="<br><br><button onclick='Check()' class='btn btn-info'>Check</button>"
    row=questionword+inputbox+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}

var questionturn="player1"
 var answerturn="player2"

function Check(){
    answer=Number(document.getElementById("inputcheckbox").value)
    if (question==answer) {
      if (answerturn=="player1") {
        player1_score=player1_score+1
        document.getElementById("player1_score").innerHTML=player1_score
      } else {
        player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score
      }  
    }
    if (questionturn=="player1") {
        questionturn="player2"
        document.getElementById("player_question").innerHTML="Question turn= "+player2_name
    }
    else{
        questionturn="player1"
        document.getElementById("player_question").innerHTML="Question turn= "+player1_name
    }
    if (answerturn=="player1") {
        answerturn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn= "+player2_name
    }
    else{
        answerturn="player1"
        document.getElementById("player_answer").innerHTML="answer turn= "+player1_name
    }
}