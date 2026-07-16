let photos = [

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



let notes = [

"Every picture has a beautiful story ❤️",

"A small moment, but a forever memory ✨",

"Your smile makes every memory special 💕",

"Some moments are truly unforgettable 🌸",

"Another beautiful chapter of memories ❤️",

"These little moments mean a lot ✨",

"A memory that will always stay close to my heart 💖",

"Every picture brings back happiness 🌹",

"Forever special and always remembered ❤️",

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


setInterval(createHeart,300);    const note=document.getElementById("memoryNote");

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

    }

}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,350);
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
