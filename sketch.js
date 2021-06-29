var ball;
var d;
var p 
function setup(){
    d=firebase.database();
    var ballpos =d.ref('ball/pos');
    ballpos.on("value",readPos,showError)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
  
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  d.ref("ball/pos").set({'x':p.x+x,'y':p.y+y})

}
function readPos(data){
p=data.val();
ball.x=p.x
ball.y=p.y
}
function showError(){
console.log("your computer is to old and broken")
}