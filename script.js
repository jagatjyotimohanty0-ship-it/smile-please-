function startScan(){

document.querySelector("button").style.display="none";


let scanBox = document.getElementById("scanBox");
let text = document.getElementById("text");


scanBox.style.display="block";


let messages = [

"🤖 Scanner Loading...",

"Smile Scanner Starting...",

"█░░░░░░░░░ 10%<br>Tumhari profile search ho rahi hai... 👀",

"████░░░░░░ 40%<br>Secret information collect ho rahi hai... 🤫",

"███████░░░ 70%<br>Heart connection verify ho raha hai... ❤️",

"██████████ 100%<br>Scan Complete! ✅"

];


let i = 0;


let timer = setInterval(function(){


text.innerHTML = messages[i];


i++;


if(i >= messages.length){


clearInterval(timer);


setTimeout(function(){


scanBox.style.display="none";

document.getElementById("result").style.display="block";


},1000);


}


},1500);


}
