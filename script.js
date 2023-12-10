let card = document.getElementById('card');
let appy = document.getElementById('appy');
let h1 = document.getElementById('h1');
let h3 = document.getElementById('h3');
let h2 = document.getElementById('h2');
let body = document.getElementById('body');
let canvas = document.getElementById('canvas');

card.addEventListener('mouseover', function () {
  h1.classList.add('h1');
  h2.classList.add('h2');
  h3.classList.add('h3');
  appy.classList.add('appy');
 let a = setTimeout(function(){
    canvas.style.display = 'none';
  },600)
  card.style.cursor = 'url(light.png) ,pointer'
  card.addEventListener('mouseleave', () => {
   setTimeout(function() {
    canvas.style.display = 'inherit'; 
   },600); 
    clearTimeout(a)
    })
});

    const COLOR_SPACE = "black";
    const COLOR_STARS = "white";
    const STAR_NUM = 500; // number of stars in the starfield
    const STAR_SIZE = 0.003; // max star size as a fraction of screen width
    const STAR_SPEED = 0.1; // fraction of screen width per second
    var ctx = canvas.getContext("2d");
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;
    // set up the stars
    var stars = [];
    var starSpeed = STAR_SPEED * canvas.width;
    var xv = starSpeed * randomSign() * Math.random();
    // Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
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
    
    // set up the animation loop
    var timeDelta, timeLast = 0;
    requestAnimationFrame(loop);
    
    function loop(timeNow) {
    
        // calculate the time difference
        timeDelta = timeNow - timeLast;
        timeLast = timeNow;
    
        // space background
        ctx.fillStyle = COLOR_SPACE;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        // draw the stars
        ctx.fillStyle = COLOR_STARS;
        for (let i = 0; i < STAR_NUM; i++) {
            ctx.beginPath();
            ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
            ctx.fill();
    
            // update the star's x position
            stars[i].x += stars[i].xv * timeDelta * 0.001;
    
            // reposition the star to the other side if it goes off screen
            if (stars[i].x < 0 - stars[i].r) {
                stars[i].x = canvas.width + stars[i].r;
            } else if (stars[i].x > canvas.width + stars[i].r) {
                stars[i].x = 0 - stars[i].r;
            }
            
            // update the star's y position
            stars[i].y += stars[i].yv * timeDelta * 0.001;
    
            // reposition the star to the other side if it goes off screen
            if (stars[i].y < 0 - stars[i].r) {
                stars[i].y = canvas.height + stars[i].r;
            } else if (stars[i].y > canvas.height + stars[i].r) {
                stars[i].y = 0 - stars[i].r;
            }
        }
    
        // call the next frame
        requestAnimationFrame(loop);
    }
    
    function randomSign() {
        return Math.random() >= 0.5 ? 1 : -1;
    }
