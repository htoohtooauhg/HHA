let box = document.getElementById("box");
let scoreText = document.getElementById("score");

let score = 0;

box.onclick = function(){

score++;

scoreText.innerText = score;

let x = Math.random() * 260;
let y = Math.random() * 260;

box.style.left = x + "px";
box.style.top = y + "px";

}
