var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);

// var one = document.createElement("img1");
// one.src = "images/dice1.png";
// var two = document.createElement("img2");
// two.src = "images/dice2.png";
// var three = document.createElement("img3");
// three.src = "images/dice3.png";
// var four = document.createElement("img4");
// four.src = "images/dice4.png";
// var five = document.createElement("img5");
// five.src = "images/dice5.png";
// var six = document.createElement("img6");
// six.src = "images/dice6.png";

// var dice=[one, two, three, four, five, six];

document.querySelector("img.img1").setAttribute('src', 'images/dice' +randomNumber1+ '.png');
document.querySelector("img.img2").setAttribute('src', 'images/dice' +randomNumber2+ '.png');

if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent="Player 1 Wins!";
if(randomNumber1<randomNumber2)
document.querySelector("h1").textContent="Player 2 Wins!";
if(randomNumber1==randomNumber2)
document.querySelector("h1").textContent="Draw";
