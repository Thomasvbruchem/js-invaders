const player = {
    x: 380,
    y: 570
};

let bullets = [];

let direction = {
    up: false,
    left: false,
    right: false,
    down: false,
    shoot: false
};


function setup() {
   
}

function update(){
    if (direction.up) {
        player.y -= 7;
    }
    if (direction.down) {
        player.y += 7;
    }
    if (direction.right) {
        player.x += 7;
    }
    if (direction.left) {
        player.x -= 7;
    }
    if (direction.shoot) {
        bullets.push( {
            x: player.x + 15,
            y: player.y 
        } )
    }

    for (let index = 0; index < bullets.length; index++) {
        bullets[index].y -= 20;
}
    draw();
}

function draw() {
    const canvas = document.getElementById('invaders-canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);
    
    context.font = "48px Verdana";
    context.fillStyle = 'red';
    context.fillText("Space Invaders", 10, 50);

    context.fillStyle = 'red';
    context.fillRect(player.x, player.y, 30, 30);

    for(let index = 0; index < bullets.length; index++){
    context.fillStyle = 'blue';
    context.beginPath()
    context.arc(bullets[index].x, bullets[index].y, 5, 0, 2 * Math.PI)
    context.fill()}

}

function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
            direction.left = true;
            break;
        case "ArrowRight":
            direction.right = true;
            break;
        case "ArrowUp":
            direction.up = true;
            break;
        case "ArrowDown":
            direction.down = true;
            break;
        case " ":
           direction.shoot = true;
        
            break;
    }

}

function keyUp(event){
    switch(event.key) {
        case "ArrowLeft":
            direction.left = false;
            break;
        case "ArrowRight":
            direction.right = false;
            break;
        case "ArrowUp":
            direction.up = false;
            break;
        case "ArrowDown":
            direction.down = false;
            break;
            case " ":
                direction.shoot = false;
             
                 break;
    }

}

window.addEventListener('keyup',keyUp)
window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);

setInterval(draw, 50)
setInterval(update, 30)