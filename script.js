function openSurprise(){

document.querySelector(".one").style.display="none";

document.querySelector(".two").style.display="flex";

}


function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(3+Math.random()*4)+"s";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},6000);

}


setInterval(createHeart,300);
