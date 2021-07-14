//Age in days

function ageInDays(){
var birthYear = prompt('Enter Your Birth Year');
var days= (2021 - birthYear) * 365;
var h1 = document.createElement('h1');
var ans= document.createTextNode('Your age in days is '+ days);
h1.setAttribute('id','ageInDays');
h1.appendChild(ans);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
//To generate an image
function generate(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-gen');
    image.src = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
    image.style.height='150px';
    image.style.width='150px';
    div.appendChild(image);
}

//Rock Paper Scissor
function rpsGame(yourChoice){
    let humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = botRandomizer();
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);//{'message' : "You won", 'color' : "Green"}
    rpsPrint(yourChoice.id,botChoice,message)
}

function decideWinner(yourChoice,botChoice){// to decide who is the winner and return an array of results
    let rpsDatabase ={
        'rock': {'scissor':1,'rock':0.5,'paper':0},
        'paper': {'scissor':0,'rock':1,'paper':0.5},
        'scissor': {'scissor':0.5,'rock':0,'paper':1},
    };
    var yourScore= rpsDatabase[yourChoice][botChoice];
    var botScore= rpsDatabase[botChoice][yourChoice];
    return [yourScore,botScore];
}

function botRandomizer(){//Randomizer for the bot
let c= Math.floor(Math.random()*3);
return ['rock','paper','scissor'][c];
}

function finalMessage([yourScore,botScore]){// Printing the message 
    if(yourScore === 0)
    return {'message':'You Lost!','color':'red'};
    else
    if(yourScore === 0.5)
    return {'message':'You Tied!','color':'yellow'};
    else
    if(yourScore === 1)
    return {'message':'You Won!','color':'green'};
}

function rpsPrint(humanImageChoice, botImageChoice, finalMessage){
    var imgDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div') ;
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDatabase[humanImageChoice] + "'height=150 width=150 style='box shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imgDatabase[botImageChoice] + "'height=150 width=150 style='box shadow: 0px 10px 50px rgba(243, 38, 233, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}