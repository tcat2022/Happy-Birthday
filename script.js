let card = document.getElementById('card');
let appy = document.getElementById('appy');
let h1 = document.getElementById('h1');
let h3 = document.getElementById('h3');
let h2 = document.getElementById('h2');
let irthday = document.getElementById('irthday');
let i = document.getElementById('i');
let t = document.getElementById('t');
let jack1 = document.getElementById('jack1');
let body = document.getElementById('body');
let canvas = document.getElementById('canvas');
let flame1 = document.getElementById('flame1');
let flame2 = document.getElementById('flame2');
let stem1 = document.getElementById('stem1');
let stem2 = document.getElementById('stem2');
let div1 = document.getElementById('stem1').getElementsByTagName("div")[0];
let div2 = document.getElementById('stem2').getElementsByTagName("div")[0];
let tommey = document.getElementById('tommey');
let line = document.getElementById('line');

setInterval(function(){
console.log(count)
},100)

var audio = new Audio('song.m4a');

card.addEventListener('mouseover', function () {
        audio.play(); 
  h1.classList.add('h1');
  h2.classList.add('h2');
  h3.classList.add('h3');
  appy.classList.add('appy');
  irthday.classList.add('irthday')
  i.classList.add('i');
  t.classList.add('t');
  jack1.classList.add('jack1');
 let a = setTimeout(function(){
    canvas.style.display = 'none';
  },600)
 setTimeout(function(){
    tommey.style.setProperty('--animation','typewriter 4s steps(11)  forwards');
    line.classList.add('line');
  },17500)

  setTimeout(function(){
line.style.display = 'none'
  },22000)

 card.style.cursor = 'url(light.png) , auto'
  card.addEventListener('mouseleave', () => {
   setTimeout(function() {
    audio.pause();
    canvas.style.display = 'inherit'; 
   },600); 
    clearTimeout(a)
    })
});

stem1.addEventListener('click', function() {
   div1.style.backgroundColor = "rgba(27, 12, 0, 0.76)"
    flame1.style.opacity = '1';
    flame1.classList.add('blink')
})
stem2.addEventListener('click', function() {
    div2.style.backgroundColor = "rgba(27, 12, 0, 0.76)"
    flame2.style.opacity = '1';
    flame2.classList.add('blink')
})


    const COLOR_SPACE = "black";
    const COLOR_STARS = "white";
    const STAR_NUM = 500;
    const STAR_SIZE = 0.003;
    const STAR_SPEED = 0.1; 
    var ctx = canvas.getContext("2d");
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;
    var stars = [];
    var starSpeed = STAR_SPEED * canvas.width;
    var xv = starSpeed * randomSign() * Math.random();
    var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
    for (let i = 0; i < STAR_NUM; i++) {
        let speedMult = Math.random() * 1.5 + 0.5;
        stars[i] = {
            r: Math.random() * STAR_SIZE * canvas.width / 2,
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            xv: xv * speedMult,
            yv: yv * speedMult
        }
    }
    
    var timeDelta, timeLast = 0;
    requestAnimationFrame(loop);
    
    function loop(timeNow) {

        timeDelta = timeNow - timeLast;
        timeLast = timeNow;
    
        ctx.fillStyle = COLOR_SPACE;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        ctx.fillStyle = COLOR_STARS;
        for (let i = 0; i < STAR_NUM; i++) {
            ctx.beginPath();
            ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
            ctx.fill();
    

            stars[i].x += stars[i].xv * timeDelta * 0.001;

            if (stars[i].x < 0 - stars[i].r) {
                stars[i].x = canvas.width + stars[i].r;
            } else if (stars[i].x > canvas.width + stars[i].r) {
                stars[i].x = 0 - stars[i].r;
            }
            
            stars[i].y += stars[i].yv * timeDelta * 0.001;
    
            if (stars[i].y < 0 - stars[i].r) {
                stars[i].y = canvas.height + stars[i].r;
            } else if (stars[i].y > canvas.height + stars[i].r) {
                stars[i].y = 0 - stars[i].r;
            }
        }
    
        requestAnimationFrame(loop);
    }
    
    function randomSign() {
        return Math.random() >= 0.5 ? 1 : -1;
    }
