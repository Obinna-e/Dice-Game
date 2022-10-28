

function getRandomInt() {
    return Math.floor(Math.random() * 6) + 1 ;
}

var randomNumber1 = getRandomInt();
var randomNumber2 = getRandomInt();

document.getElementsByTagName("img")[0].src = "http://127.0.0.1:5501/images/dice"+randomNumber1+".png";
document.getElementsByTagName("img")[1].src = "http://127.0.0.1:5501/images/dice"+randomNumber2+".png";


if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 wins";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}