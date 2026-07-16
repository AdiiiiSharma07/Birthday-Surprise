const photos = [
"images/IMG_20251129_231848_096.jpg",
"images/IMG-20250920-WA0004.jpg",
"images/IMG-20260430-WA0007.jpg",
"images/IMG_20250905_222405_203.jpg",
"images/IMG-20251021-WA0070.jpg",
"images/IMG-20250903-WA0007.jpg",
"images/IMG-20260305-WA0011.jpg",
"images/IMG-20260109-WA0019.jpg",
"images/IMG-20260109-WA0128.jpg",
"images/IMG-20251003-WA0005.jpg"
];

const notes = [
"Every memory with you is a treasure ❤️",
"Your smile makes every day brighter ✨",
"Every picture reminds me how lucky I am 💖",
"You make ordinary moments unforgettable 🌸",
"Life feels beautiful when you're around 💕",
"This moment will always stay close to my heart 💗",
"Thank you for being so wonderful 🥹",
"You deserve all the happiness in the world 🎂",
"May your smile never fade ❤️",
"Happy Birthday, Beautiful 🎉❤️"
];

let current = 0;

function openSurprise(){

document.getElementById("firstPage").style.display="none";
document.getElementById("secondPage").style.display="flex";

showMemory();

}

function showMemory(){

const img=document.getElementById("memoryImage");
const note=document.getElementById("memoryNote");

img.style.opacity="0";

setTimeout(()=>{

img.src=photos[current];
note.innerHTML=notes[current];

img.style.opacity="1";

},300);

}

function nextMemory(){

current++;

if(current<photos.length){

showMemory();

}else{

document.querySelector(".memory-container").style.display="none";

document.getElementById("finalMessage").style.display="block";

createHearts();

}

}

/* Hearts */

function createHearts(){

const container=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"
"Thank you for being such a beautiful part of my life ✨"

];



let current = 0;



function openSurprise(){

document.getElementById("firstPage").style.display="none";

document.getElementById("secondPage").style.display="flex";

}




function nextMemory(){


current++;


if(current < photos.length){


let image = document.getElementById("memoryImage");


image.style.animation="none";

setTimeout(()=>{

image.src = photos[current];

document.getElementById("memoryNote").innerHTML = notes[current];

image.style.animation="fade .8s";


},50);


}



else{


document.getElementById("memoryImage").style.display="none";

document.getElementById("memoryNote").style.display="none";

document.querySelector(".tap").style.display="none";

document.getElementById("finalMessage").style.display="block";


}


}




// Floating hearts

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(3+Math.random()*4)+"s";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},6000);


}


setInterval(createHeart,300);
