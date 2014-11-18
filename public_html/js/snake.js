var snake;
var snakeLength;
var snakeSize;
var context;
var screenWidth;
var screenHeight;

console.log("script");
gameInitialize();
//snakeInitialize();
setInterval(gameLoop, 1000/30);





function gameInitialize() {
var canvas = document.getElementById("game-screen");    
   context = canvas.getContext("2d");
   
   screenWidth = window.innerWidth;
   screenHeight = window.innerHeight;
   
   canvas.width = screenWidth;
   canvas.height = screenHeight;
}

function gameLoop() {
    gameDraw();
    //snakeUpdate();
    //snakeDraw();
}
        
function gameDraw(){ 
    console.log(screenWidth + " " + screenHeight);
context.fillStyle ="red";
context.fillRect(0,0, screenWidth,screenHeight);

   // snakeDraw();
    
    }

function snakeInitialize(){ 
     snake =[];
     snakeLength = 15;
     snakeSize = 10;
     
     for(var index = snakeLength -1; index >= 0; index--){ 
         snake.push({
         x: index,
         y:0
         });
     }    
 }         
    
 function snakeDraw(){   
 for(var index = 0; index <snake.length;index++) {
     context.fillStyle = "white";
     context.fillRect(snake[index].x *snakeSize, snake[index].y*snakeSize,snakeSize,snakeSize);
 }
 }


function snakeUpdate(){
     var snakeX = snake[0].x;
      var snakeHeadY = snake[0].y;
        
       snakeHeadX++;
       
       var snakeTail = snake.pop();
       snakeTail.x = snakeHeadXy;
       snakeTail.y = snakeHeadY;
       snake.unshift(snakeTail);
   }