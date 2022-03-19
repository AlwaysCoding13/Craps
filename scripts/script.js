let btnRoll = document.getElementById("btn-roll");
let die1 = document.getElementById("die-1");
let die2 = document.getElementById("die-2");
let total = document.getElementById("total");
let totalNum;
let die1Num;
let die2Num;
let pointNum;
let sum;
let betAmount = 0;
let increaseBet = document.getElementById("increase");
let decreaseBet = document.getElementById("decrease");
let bet = document.getElementById("bet");
let point = document.getElementById("point");
btnRoll.addEventListener('click', function(){
    die1Num = die1.innerText = Math.floor((Math.random() * 6) + 1);
    die2Num = die2.innerText = Math.floor((Math.random() * 6) + 1);
    totalNum = die1Num + die2Num;
    pointNum = totalNum;
    total.innerText = `Total: ${totalNum}`;
    if(turn.innerText == "Turn: 1"){
        if(totalNum == 7 || totalNum == 11){
            die1.innerText = "YOU"
            die2.innerText = "LOSE!"
        }
        else if(totalNum == 2 || totalNum == 3 || totalNum == 12){
            die1.innerText = "YOU"
            die2.innerText = "WIN!"
        }
        else{
            point.innerText = `Point: ${pointNum}`;
            turn.innerText = "Turn: 2";
        }
        if(turn.innerText == "Turn: 2"){
            if(totalNum == pointNum){
                
            }
        }
    }
});

increaseBet.addEventListener('click', function(){
    bet.innerText = `"Bet: ${betAmount += 5}`;
})

increaseBet.addEventListener('click', function(){
    bet = bet.innerText = `Bet: ${bet.innerText - 5}`;
});
