/* =====================================================
   HAPPY BIRTHDAY WEBSITE
   SCRIPT PART 1
===================================================== */

"use strict";

/* ============================================= */
/* Slides */
/* ============================================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

/* ============================================= */
/* Navigation Buttons */
/* ============================================= */

const nextButtons = document.querySelectorAll(".nextBtn");

const prevButtons = document.querySelectorAll(".prevBtn");

/* ============================================= */
/* Background Music */
/* ============================================= */

const bgMusic = document.getElementById("bgMusic");

/* ============================================= */
/* Fireworks */
/* ============================================= */

const fireworks = document.getElementById("fireworks");

/* ============================================= */
/* Confetti */
/* ============================================= */

const confetti = document.getElementById("confetti");

/* ============================================= */
/* Slide Function */
/* ============================================= */

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

currentSlide=index;

}

/* =====================================================
   PROFESSIONAL NAVIGATION ENGINE
===================================================== */

const slideOrder = [
"slide1",
"slide2",
"slide3",
"slide4",
"slide6",
"slide5",
"slide8"
];

function goToSlide(id){

const index = slideOrder.indexOf(id);

if(index===-1) return;

screenFlash();
cameraShake();

slides.forEach(slide=>{

slide.classList.remove("active");

slide.style.opacity="0";

});

const target=document.getElementById(id);

target.classList.add("active");

target.style.opacity="1";

currentSlide=index;

window.scrollTo({
top:0,
behavior:"smooth"
});

}

document.getElementById("nextSlide4")?.addEventListener("click",()=>{

goToSlide("slide4");

});

document.getElementById("nextSlide6")?.addEventListener("click",()=>{

goToSlide("slide6");

});

document.getElementById("nextSlide5")?.addEventListener("click",()=>{

goToSlide("slide5");

});

document.getElementById("prevProposal")?.addEventListener("click",()=>{

goToSlide("slide6");

});

/* ============================================= */
/* Music */
/* ============================================= */

window.addEventListener("click",()=>{

if(bgMusic){

bgMusic.play().catch(()=>{});

}

},{once:true});

/* ============================================= */
/* First Slide */
/* ============================================= */

showSlide(0);

/* ============================================= */
/* Fade Transition */
/* ============================================= */

function fadeTransition(nextIndex){

slides[currentSlide].style.opacity="0";

setTimeout(()=>{

showSlide(nextIndex);

slides[nextIndex].style.opacity="1";

},600);

}

/* ============================================= */
/* Utility */
/* ============================================= */

function wait(ms){

return new Promise(resolve=>{

setTimeout(resolve,ms);

});

}
/* =====================================================
   SCRIPT PART 2
   SURPRISE SCREEN
===================================================== */

const yesStart = document.getElementById("yesStart");
const noStart = document.getElementById("noStart");

let startYesScale = 1;
let noClicks = 0;

/* ==========================================
   Firework Burst
========================================== */

function createFireworkBurst(count = 40){

    if(!fireworks) return;

    for(let i=0;i<count;i++){

        const particle = document.createElement("div");

        particle.className = "firework";

        particle.style.left =
            Math.random()*100 + "%";

        particle.style.top =
            Math.random()*100 + "%";

        particle.style.animationDuration =
            (0.8 + Math.random()*0.8) + "s";

        fireworks.appendChild(particle);

        setTimeout(()=>{

            particle.remove();

        },1800);

    }

}

/* ==========================================
   Confetti Burst
========================================== */

function createConfettiBurst(count = 80){

    if(!confetti) return;

    for(let i=0;i<count;i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random()*100 + "%";

        piece.style.animationDuration =
            (3 + Math.random()*2) + "s";

        piece.style.transform =
            `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5500);

    }

}

/* ==========================================
   NO BUTTON
========================================== */

if(noStart){

noStart.addEventListener("click",()=>{

    noClicks++;

    startYesScale += 0.25;

    yesStart.style.transform =
        `scale(${startYesScale})`;

    yesStart.style.boxShadow =
        "0 0 40px white,0 0 90px #55b8ff";

    noStart.style.transform =
        `translateX(${Math.random()*50-25}px)
         translateY(${Math.random()*30-15}px)`;

});

}

/* ==========================================
   YES BUTTON
========================================== */

if(yesStart){

yesStart.addEventListener("click",async()=>{

    yesStart.disabled=true;

    noStart.disabled=true;

    createFireworkBurst(70);

    createConfettiBurst(120);

    await wait(1800);

    showSlide(1);

});

}
/* =====================================================
   SCRIPT PART 3
   BALLOON GAME
===================================================== */

const balloon1 = document.getElementById("balloon1");
const balloon2 = document.getElementById("balloon2");
const balloon3 = document.getElementById("balloon3");

const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

let balloonsPopped = 0;

/* ==========================================
   Show Balloon Message
========================================== */

async function showBalloonMessage(balloon,message){

    balloon.style.pointerEvents="none";

    balloon.style.transition=".4s";

    balloon.style.transform="scale(0)";

    balloon.style.opacity="0";

    createFireworkBurst(30);

    createConfettiBurst(45);

    message.style.display="block";

    message.style.animation="letterEntrance .8s ease";

    await wait(7500);

    message.style.display="none";

    balloonsPopped++;

    checkAllBalloons();

}

/* ==========================================
   Balloon Clicks
========================================== */

if(balloon1){

balloon1.addEventListener("click",()=>{

showBalloonMessage(balloon1,message1);

});

}

if(balloon2){

balloon2.addEventListener("click",()=>{

showBalloonMessage(balloon2,message2);

});

}

if(balloon3){

balloon3.addEventListener("click",()=>{

showBalloonMessage(balloon3,message3);

});

}

/* ==========================================
   All Balloons Finished
========================================== */

async function checkAllBalloons(){

if(balloonsPopped!==3) return;

await wait(3000);

createFireworkBurst(60);

createConfettiBurst(80);

fadeTransition(2);

}
/* =====================================================
   SCRIPT PART 4
   PREMIUM NAVIGATION & CINEMATIC TRANSITIONS
===================================================== */

const nextSlide4 = document.getElementById("nextSlide4");
const nextSlide6 = document.getElementById("nextSlide6");
const nextSlide5 = document.getElementById("nextSlide5");
const nextSlide8 = document.getElementById("nextSlide8");

/* ==========================================
   Screen Flash
========================================== */

function screenFlash(){

const flash=document.createElement("div");

flash.style.position="fixed";
flash.style.left="0";
flash.style.top="0";
flash.style.width="100%";
flash.style.height="100%";
flash.style.background="white";
flash.style.opacity="0";
flash.style.pointerEvents="none";
flash.style.zIndex="99999";
flash.style.transition=".45s";

document.body.appendChild(flash);

requestAnimationFrame(()=>{

flash.style.opacity=".95";

});

setTimeout(()=>{

flash.style.opacity="0";

},200);

setTimeout(()=>{

flash.remove();

},650);

}

/* ==========================================
   Camera Shake
========================================== */

function cameraShake(){

document.body.animate([

{transform:"translate(0px,0px)"},

{transform:"translate(-8px,5px)"},

{transform:"translate(8px,-5px)"},

{transform:"translate(-6px,4px)"},

{transform:"translate(6px,-4px)"},

{transform:"translate(0px,0px)"}

],{

duration:550,

iterations:1

});

}

/* ==========================================
   Zoom Transition
========================================== */

function cinematicTransition(nextIndex){

screenFlash();

cameraShake();

createFireworkBurst(60);

createConfettiBurst(90);

setTimeout(()=>{

fadeTransition(nextIndex);

},900);

}

/* ==========================================
   Manual Navigation
========================================== */

if(nextSlide4){

nextSlide4.addEventListener("click",()=>{

cinematicTransition(3);

});

}

if(nextSlide6){

nextSlide6.addEventListener("click",()=>{

cinematicTransition(4);

});

}

if(nextSlide5){

nextSlide5.addEventListener("click",()=>{

cinematicTransition(5);

});

}

if(nextSlide8){

nextSlide8.addEventListener("click",()=>{

cinematicTransition(6);

});

}
/* =====================================================
   SCRIPT PART 5
   PROPOSAL LOGIC
===================================================== */

const proposalYes=document.getElementById("proposalYes");
const proposalNo=document.getElementById("proposalNo");

let proposalScale=1;

/* ==========================================
   NO BUTTON
========================================== */

if(proposalNo){

proposalNo.addEventListener("click",()=>{

proposalScale+=0.18;

proposalYes.style.transform=
`scale(${proposalScale})`;

proposalYes.style.boxShadow=
"0 0 35px white,0 0 90px #55b8ff";

const x=Math.random()*220-110;
const y=Math.random()*140-70;

proposalNo.style.transform=
`translate(${x}px,${y}px)`;

proposalNo.animate([

{transform:proposalNo.style.transform},

{transform:`translate(${x+10}px,${y-10}px)`},

{transform:`translate(${x-10}px,${y+10}px)`},

{transform:`translate(${x}px,${y}px)`}

],{

duration:400

});

});

}

/* ==========================================
   YES BUTTON
========================================== */

if(proposalYes){

proposalYes.addEventListener("click",async()=>{

proposalYes.disabled=true;
proposalNo.disabled=true;

screenFlash();

cameraShake();

createFireworkBurst(120);

createConfettiBurst(180);

document.body.animate([

{transform:"scale(1)"},

{transform:"scale(1.02)"},

{transform:"scale(1)"}

],{

duration:900

});

await wait(2000);

goToSlide("slide8");

startCelebration();

startGrandFireworks();

heartExplosion();

createConfettiBurst(300);

});

}
/* =====================================================
   SCRIPT PART 6
   PREMIUM FIREWORK ENGINE
===================================================== */

function randomColor(){

const colors=[

"#ffffff",
"#7ec8ff",
"#4ea3ff",
"#9fdcff",
"#dff6ff"

];

return colors[Math.floor(Math.random()*colors.length)];

}

/* ========================================= */

function premiumFirework(x,y){

for(let i=0;i<45;i++){

const star=document.createElement("div");

star.style.position="fixed";

star.style.left=x+"px";

star.style.top=y+"px";

star.style.width="8px";

star.style.height="8px";

star.style.borderRadius="50%";

star.style.background=randomColor();

star.style.pointerEvents="none";

star.style.zIndex="99999";

document.body.appendChild(star);

const angle=Math.random()*Math.PI*2;

const distance=80+Math.random()*180;

const dx=Math.cos(angle)*distance;

const dy=Math.sin(angle)*distance;

star.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:`translate(${dx}px,${dy}px) scale(.2)`,

opacity:0

}

],{

duration:1400,

easing:"cubic-bezier(.17,.67,.4,1)"

});

setTimeout(()=>{

star.remove();

},1500);

}

}

/* ========================================= */

function launchRandomFirework(){

premiumFirework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight*.6

);

}

/* ========================================= */

function startGrandFireworks(){

let total=0;

const timer=setInterval(()=>{

launchRandomFirework();

total++;

if(total>18){

clearInterval(timer);

}

},700);

}

/* ========================================= */

function heartExplosion(){

for(let i=0;i<35;i++){

const heart=document.createElement("div");

heart.innerHTML="💙";

heart.style.position="fixed";

heart.style.left=(window.innerWidth/2)+"px";

heart.style.top=(window.innerHeight/2)+"px";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

document.body.appendChild(heart);

const angle=Math.random()*Math.PI*2;

const dist=120+Math.random()*220;

const dx=Math.cos(angle)*dist;

const dy=Math.sin(angle)*dist;

heart.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:`translate(${dx}px,${dy}px) rotate(360deg) scale(.2)`,

opacity:0

}

],{

duration:1800,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1800);

}

}
/* =====================================================
   SCRIPT PART 7
   GRAND CELEBRATION ENGINE
===================================================== */

let celebrationStarted = false;

/* ==========================================
   Continuous Confetti
========================================== */

function startConfettiRain(){

    let drops = 0;

    const rain = setInterval(()=>{

        createConfettiBurst(12);

        drops++;

        if(drops > 80){

            clearInterval(rain);

        }

    },250);

}

/* ==========================================
   Floating Hearts
========================================== */

function floatingHeartRain(){

    let total = 0;

    const timer = setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML = ["💙","🤍","❤️"][Math.floor(Math.random()*3)];

        heart.style.position = "fixed";
        heart.style.left = Math.random()*window.innerWidth+"px";
        heart.style.top = window.innerHeight+"px";
        heart.style.fontSize = (20+Math.random()*22)+"px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        heart.animate([

            {
                transform:"translateY(0) rotate(0deg)",
                opacity:1
            },

            {
                transform:"translateY(-120vh) rotate(720deg)",
                opacity:0
            }

        ],{

            duration:7000,
            easing:"linear"

        });

        setTimeout(()=>{

            heart.remove();

        },7000);

        total++;

        if(total>120){

            clearInterval(timer);

        }

    },180);

}

/* ==========================================
   Celebration Title Animation
========================================== */

function animateCelebrationTitle(){

    const title = document.querySelector(".celebrationTitle");

    if(!title) return;

    title.animate([

        {

            transform:"scale(.6)",
            opacity:0

        },

        {

            transform:"scale(1.15)",
            opacity:1

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:1500,
        easing:"ease-out"

    });

}

/* ==========================================
   Start Celebration
========================================== */

function startCelebration(){

    if(celebrationStarted) return;

    celebrationStarted = true;

    screenFlash();

    cameraShake();

    createFireworkBurst(150);

    createConfettiBurst(250);

    heartExplosion();

    startGrandFireworks();

    startConfettiRain();

    floatingHeartRain();

    animateCelebrationTitle();

}
/* =====================================================
   SCRIPT PART 8
   CINEMATIC FINAL POLISH
===================================================== */

/* ==========================================
   Music Fade In
========================================== */

function fadeMusic(target = 0.5, speed = 0.02){

    if(!bgMusic) return;

    bgMusic.volume = 0;

    const fade = setInterval(()=>{

        if(bgMusic.volume >= target){

            clearInterval(fade);
            return;

        }

        bgMusic.volume += speed;

    },120);

}

/* ==========================================
   Mouse Glow
========================================== */

const mouseGlow=document.createElement("div");

mouseGlow.style.position="fixed";
mouseGlow.style.width="22px";
mouseGlow.style.height="22px";
mouseGlow.style.borderRadius="50%";
mouseGlow.style.background="rgba(255,255,255,.75)";
mouseGlow.style.boxShadow=
"0 0 18px white,0 0 45px #6cc5ff";
mouseGlow.style.pointerEvents="none";
mouseGlow.style.zIndex="99999";
mouseGlow.style.transition="transform .08s linear";

document.body.appendChild(mouseGlow);

document.addEventListener("mousemove",(e)=>{

mouseGlow.style.left=(e.clientX-11)+"px";
mouseGlow.style.top=(e.clientY-11)+"px";

});

/* ==========================================
   Cursor Sparkles
========================================== */

document.addEventListener("mousemove",(e)=>{

if(Math.random()>.65){

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";
spark.style.left=e.clientX+"px";
spark.style.top=e.clientY+"px";
spark.style.fontSize="18px";
spark.style.pointerEvents="none";
spark.style.zIndex="99999";

document.body.appendChild(spark);

spark.animate([

{
transform:"translateY(0) scale(1)",
opacity:1
},

{
transform:"translateY(-45px) scale(.2)",
opacity:0
}

],{

duration:700

});

setTimeout(()=>{

spark.remove();

},700);

}

});

/* ==========================================
   Celebration Background Zoom
========================================== */

function cinematicZoom(){

const bg=document.querySelector(".celebrationBackground");

if(!bg) return;

bg.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.04)"
},

{
transform:"scale(1)"
}

],{

duration:9000,

iterations:Infinity

});

}

/* ==========================================
   Auto Start Effects
========================================== */

window.addEventListener("load",()=>{

fadeMusic();

cinematicZoom();

startAmbientWorld();

});
/* =====================================================
   SCRIPT PART 9
   ADVANCED PARTICLE ENGINE
===================================================== */

function createFloatingParticle(){

const particle=document.createElement("div");

particle.className="magicParticle";

particle.style.position="fixed";

particle.style.left=Math.random()*window.innerWidth+"px";

particle.style.top=window.innerHeight+50+"px";

particle.style.width=(4+Math.random()*8)+"px";

particle.style.height=particle.style.width;

particle.style.borderRadius="50%";

particle.style.background=randomColor();

particle.style.opacity=.8;

particle.style.pointerEvents="none";

particle.style.zIndex="9999";

particle.style.boxShadow=
"0 0 15px white";

document.body.appendChild(particle);

const x=(Math.random()*250)-125;

const rotate=(Math.random()*720)-360;

particle.animate([

{

transform:
"translate(0,0) scale(1)",

opacity:1

},

{

transform:
`translate(${x}px,-120vh)
rotate(${rotate}deg)
scale(0)`,

opacity:0

}

],{

duration:6000+Math.random()*3000,

easing:"linear"

});

setTimeout(()=>{

particle.remove();

},9000);

}

/* ====================================== */

function startMagicParticles(){

let amount=0;

const interval=setInterval(()=>{

createFloatingParticle();

amount++;

if(amount>250){

clearInterval(interval);

}

},90);

}
/* =====================================================
   SCRIPT PART 10
   CINEMATIC BACKGROUND ENGINE
===================================================== */

function createLightOrb(){

const orb=document.createElement("div");

orb.style.position="fixed";

orb.style.left=Math.random()*window.innerWidth+"px";

orb.style.top=Math.random()*window.innerHeight+"px";

orb.style.width=(80+Math.random()*120)+"px";

orb.style.height=orb.style.width;

orb.style.borderRadius="50%";

orb.style.background="radial-gradient(circle,#ffffff55,#55b8ff00)";

orb.style.filter="blur(25px)";

orb.style.pointerEvents="none";

orb.style.opacity=".35";

orb.style.zIndex="-1";

document.body.appendChild(orb);

const x=(Math.random()*500)-250;

const y=(Math.random()*250)-125;

orb.animate([

{
transform:"translate(0,0) scale(1)"
},

{
transform:`translate(${x}px,${y}px) scale(1.4)`
},

{
transform:"translate(0,0) scale(1)"
}

],{

duration:12000+Math.random()*5000,

iterations:Infinity,

easing:"ease-in-out"

});

}

/* ====================================== */

function createStars(){

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.innerHTML="✦";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(8+Math.random()*10)+"px";

star.style.color="white";

star.style.opacity=".2";

star.style.pointerEvents="none";

star.style.zIndex="-1";

document.body.appendChild(star);

star.animate([

{
opacity:.15,
transform:"scale(1)"
},

{
opacity:1,
transform:"scale(1.8)"
},

{
opacity:.15,
transform:"scale(1)"
}

],{

duration:2000+Math.random()*4000,

iterations:Infinity

});

}

}

/* ====================================== */

function cinematicBackground(){

for(let i=0;i<8;i++){

createLightOrb();

}

createStars();

}
/* =====================================================
   SCRIPT PART 11
   AMBIENT ANIMATION ENGINE
===================================================== */

function createFloatingBalloon(){

const balloon=document.createElement("div");

balloon.innerHTML=["🎈","💙","🤍"][Math.floor(Math.random()*3)];

balloon.style.position="fixed";
balloon.style.left=Math.random()*window.innerWidth+"px";
balloon.style.top=(window.innerHeight+100)+"px";
balloon.style.fontSize=(30+Math.random()*25)+"px";
balloon.style.pointerEvents="none";
balloon.style.zIndex="8";

document.body.appendChild(balloon);

const drift=(Math.random()*250)-125;

balloon.animate([

{
transform:"translate(0,0) rotate(0deg)",
opacity:1
},

{
transform:`translate(${drift}px,-130vh) rotate(${Math.random()*180-90}deg)`,
opacity:0
}

],{

duration:9000+Math.random()*3000,

easing:"linear"

});

setTimeout(()=>{

balloon.remove();

},12000);

}

/* ========================================== */

function createButterfly(){

const butterfly=document.createElement("div");

butterfly.innerHTML="🦋";

butterfly.style.position="fixed";
butterfly.style.left="-60px";
butterfly.style.top=Math.random()*window.innerHeight+"px";
butterfly.style.fontSize=(18+Math.random()*15)+"px";
butterfly.style.pointerEvents="none";
butterfly.style.zIndex="8";

document.body.appendChild(butterfly);

const height=(Math.random()*250)-125;

butterfly.animate([

{
transform:"translateX(0) translateY(0)"
},

{
transform:`translateX(${window.innerWidth+200}px) translateY(${height}px)`
}

],{

duration:12000+Math.random()*5000,

iterations:1,

easing:"ease-in-out"

});

setTimeout(()=>{

butterfly.remove();

},18000);

}

/* ========================================== */

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="❀";

petal.style.position="fixed";
petal.style.left=Math.random()*window.innerWidth+"px";
petal.style.top="-50px";
petal.style.fontSize=(15+Math.random()*10)+"px";
petal.style.color="#ffffff";
petal.style.pointerEvents="none";
petal.style.zIndex="8";

document.body.appendChild(petal);

const drift=(Math.random()*300)-150;

petal.animate([

{
transform:"translate(0,0) rotate(0deg)",
opacity:1
},

{
transform:`translate(${drift}px,120vh) rotate(720deg)`,
opacity:0
}

],{

duration:8000+Math.random()*5000,

easing:"linear"

});

setTimeout(()=>{

petal.remove();

},14000);

}

/* ========================================== */

function startAmbientWorld(){

setInterval(createFloatingBalloon,2200);

setInterval(createButterfly,5500);

setInterval(createPetal,1400);

}
/* =====================================================
   SCRIPT PART 12
   SECRET LOVE EASTER EGGS
===================================================== */

const secretMessages = [

"💙 You are my favorite person.",
"🤍 Forever starts with you.",
"❤️ Every heartbeat chooses you.",
"🥹 Thank you for existing.",
"✨ Happy Birthday Princess.",
"🌙 You're my peace.",
"💖 I love you endlessly."

];

let clickCounter = 0;

document.addEventListener("click",(e)=>{

clickCounter++;

if(clickCounter % 18 !== 0) return;

const msg=document.createElement("div");

msg.className="secretLoveMessage";

msg.innerHTML=secretMessages[
Math.floor(Math.random()*secretMessages.length)
];

msg.style.position="fixed";

msg.style.left=e.clientX+"px";

msg.style.top=e.clientY+"px";

msg.style.padding="12px 20px";

msg.style.borderRadius="30px";

msg.style.background="rgba(255,255,255,.18)";

msg.style.backdropFilter="blur(12px)";

msg.style.color="white";

msg.style.fontFamily="'Great Vibes',cursive";

msg.style.fontSize="32px";

msg.style.pointerEvents="none";

msg.style.zIndex="99999";

document.body.appendChild(msg);

msg.animate([

{
opacity:0,
transform:"translateY(40px) scale(.7)"
},

{
opacity:1,
transform:"translateY(0px) scale(1)"
},

{
opacity:0,
transform:"translateY(-120px) scale(.7)"
}

],{

duration:4000,

easing:"ease"

});

setTimeout(()=>{

msg.remove();

},4000);

});
/* =====================================================
   SCRIPT PART 13
   SECRET ENDING
===================================================== */

let endingTriggered = false;

function finalSecretEnding(){

if(endingTriggered) return;

endingTriggered = true;

const ending=document.createElement("div");

ending.style.position="fixed";
ending.style.left="0";
ending.style.top="0";
ending.style.width="100%";
ending.style.height="100%";
ending.style.background="rgba(0,0,0,.97)";
ending.style.zIndex="999999";
ending.style.display="flex";
ending.style.flexDirection="column";
ending.style.justifyContent="center";
ending.style.alignItems="center";
ending.style.color="white";

ending.innerHTML=`

<div style="
font-size:65px;
font-family:'Great Vibes',cursive;
opacity:0;
animation:fadeIn 2s forwards;
">

❤️

</div>

<div style="
margin-top:30px;
font-size:55px;
font-family:'Great Vibes',cursive;
opacity:0;
animation:fadeIn 3s forwards 1.5s;
">

One Last Thing...

</div>

<div style="
margin-top:45px;
width:80%;
max-width:900px;
text-align:center;
font-size:34px;
font-family:'Italianno',cursive;
line-height:1.7;
opacity:0;
animation:fadeIn 3s forwards 4s;
">

No matter where life takes us...

No matter how difficult life becomes...

No matter how many birthdays we celebrate...

I'll always choose you.

Again.

Again.

And Forever.

❤️

</div>

`;

document.body.appendChild(ending);

createFireworkBurst(250);

createConfettiBurst(300);

heartExplosion();

}
setTimeout(()=>{

const slide8=document.getElementById("slide8");

if(!slide8) return;

const observer=new MutationObserver(()=>{

if(slide8.classList.contains("active")){

setTimeout(()=>{

if(slide8.classList.contains("active")){

finalSecretEnding();

}

},30000);

}

});

observer.observe(slide8,{

attributes:true

});

},500);