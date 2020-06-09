//console.log("test");
/* --------------- DOM References --------------- */

//movement display
let movementDisplay = document.getElementById("movement");
//status of game
let gameStatus = document.getElementById("status");
//canvas itself
let game = document.getElementById("game");
game.width = 800;
game.height = 400;

let ctx = game.getContext("2d");


/* ---------------- Dramatis Personae ----------------- */



// Sweet Constructor Function
function Crawler(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.alive = true;
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let hero = new Crawler(0, 0, "hotpink", 40, 40);
hero.catchySlogan = "You're about to become french onion soup";
let ogre = new Crawler(500, 100, "#bada55", 150, 200);



/* -------------- GAME LOOP STUFF ---------------------- */

const gameTick = () => {
    // Clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    // set/display hero x/y (or display or not do anything)
    movementDisplay.innerText = `X:${hero.x} Y:${hero.y}`;
    // Check if Ogre is alive

    // TODO Clean this up
    if (ogre.alive) {
        // check for collision
        detectHit();
    } else {
        endGame();
        // call endGame
    }       
    hero.render();
    ogre.render();
    //render our crawlers
}

const detectHit = () => {
   // if collision set ogre.alive = false;
   // if hero's right side is greater than ogre's left side
   // if hero's left side is less than ogre's rigth side
   // if hero's top is less than ogre bottom
   // if hero's bottom is greater than ogre's top
   if (hero.x + hero.width > ogre.x 
    && hero.x < ogre.x + ogre.width 
    && hero.y < ogre.y + ogre.height 
    && hero.y + hero.height > ogre.y) {
        ogre.alive = false;
       gameStatus.innerText = "Bye Shrek";
   }
   // set ogre.alive = false
   // change game message
}

const endGame = () => {
    clearInterval(gameLoop)
    console.log("game over brah")
}

let gameLoop = setInterval(gameTick, 60);

/* ------------- MOVING and SHAKING ----------------- */

const movementHandler = (e) => {
    switch(e.key) {
        case "w":
            //hero y decrement
            hero.y -= 3;
            break;
        case "d":
            //hero x incecrement
            hero.x += 3;
            break;
        case "s":
            //hero y incecrement
            hero.y += 3;
            break;
        case "a":
            //hero x decrement
            hero.x -= 3;
            break;
    }
    
}

document.addEventListener("keydown", movementHandler)



/* ------------- ARCHIVE ----------------- */

// function drawBox(x, y, size, color) {

    // //fill color
    // ctx.fillStyle = color;
    
    // //call the fill box function (fills the rectangle)
    // ctx.fillRect(x, y, size, size);
    // }
    
// //OUR HERO

// let hero = {
//     x: 0,
//     y: 0,
//     color: "hotpink",
//     width: 20,
//     height: 20,
//     alive: true,
//     render: function() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }

// let ogre = {
//     x: 500,
//     y: 100,
//     color: "bada55",
//     width: 50,
//     height: 75,
//     alive: true,
//     render: function() {
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }

/* ---------------- Lets draw on a canvas -------------- */

// //add event listener so that on every click  
// game.addEventListener("click", (e) => {
//     // clear the board
//        ctx.clearRect(0, 0, game.width, game.height)
   
   
//        hero.x = e.offsetX;
//        hero.y = e.offsetY;
//        //a box is drawn
//        hero.render();
//        ogre.render();
//    })