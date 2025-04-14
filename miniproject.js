let gameseq = [];
let userseq= [];
let btns = ["yellow", "red", "purple", "green"];
let started = 0;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp ();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);

}

function levelUp(){
    userseq = [];
    level ++;
    h2.innerHTML  = `your highest score is ${level} <br/>Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`)
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
     btnFlash(randbtn);
}
function checkAns(idx){
    console.log(level);
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length== gameseq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over your score was<b>${level}</b>` ;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}
function btnpress(){
   let btn = this;
   userFlash(btn);
  let userColor = btn.getAttribute("id");
   console.log(userColor);
   userseq.push(userColor);
   checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
     btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
