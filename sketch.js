const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,platform1

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800)
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,height,width/2,10)
    
}

function draw() {
    Engine.update(Engine);

    ground.display()
    // platform1.display()
}

