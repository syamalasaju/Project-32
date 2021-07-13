const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var sling;
var backgroundImg;
var polygon,polygonImg;

function preload(){
    polygonImg= loadImage('polygon.png')
    getTime();

}

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(100,270,30);
    World.add(world,polygon);

    stand1 = new Ground(250,300,210,10)
    box1 = new Block(250,290,20,30)
    box2 = new Block(255,290,20,30)
    box3 = new Block(260,290,20,30)
    box4 = new Block(265,290,20,30)
    box5 = new Block(270,290,20,30)
    box6 = new Block(275,290,20,30)

    box7 = new Block(255,280,20,30)
    box8 = new Block(260,280,20,30)
    box9 = new Block(265,280,20,30)
    box10 = new Block(270,280,20,30)

    box11 = new Block(260,260,20,30)
    box12 = new Block(265,260,20,30)

    box22 = new Block(265,240,20,30)


    stand2 = new Ground(500,200,180,10)

    box13 = new Block(490,190,20,30)
     box14 = new Block(495,190,20,30)
     box15 = new Block(500,190,20,30)
     box16 = new Block(505,190,20,30)
     box17 = new Block(510,190,20,30)

    box18 = new Block(495,180,20,30)
    box19 = new Block(500,180,20,30)
    box20 = new Block(505,180,20,30)

    box21 = new Block(500,170,20,30)

    sling= new Slingshot(this.polygon,{x:100,y:250});
    
}
function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,30,30);
   
    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    stand2.display();
    box13.display();
     box14.display();
     box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
}

function mouseDragged(){
    // Matter.Body.setPosition(body to be set,position to be set)
    Matter.Body.setPosition(this.polygon,{ x : mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

async function getTime(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
    responseJson = await response.json();
    var Time=responseJson.datetime;
    console.log(Time);

    var hour = Time.slice(11,13);
    console.log(hour);
    if (hour>=06 && hour<=17){
        console.log("day")
       var backgroundImg = loadImage("bg.png");
    }
    else{
       var backgroundImg = loadImage("bg2.jpg");
    }
    //console.log(backgroundImg)
}









