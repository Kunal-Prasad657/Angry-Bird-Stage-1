const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,340,70,70);
    box2 = new Box(820,340,70,70);
    box3 = new Box(600,250,70,70);
    box4 = new Box(820,250,70,70);
    box5 = new Box(710,190,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(710,350);
    pig2 = new Pig(710,280);
    log1 = new Log(710,300,300,PI/2)
    log2 = new Log(710,220,300,PI/2);
    log3 = new Log(660,180,150,PI/7);
    log4 = new Log (770,180,150,-PI/7);
    bird = new Bird(200,200,50,50);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}