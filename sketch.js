
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;
var particle;
var score = 0;
var turn = 0;
var count = 0;
var gameState = "play";
var gameState = "end";

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,795,1600,12);
	for (var k = 0; k <=width ; k=k+80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,300));
	}

	for (var j =40; j <= width; j = j+50){
		plinkos.push(new Plinkos(j,75));
	}

	for (var j =15; j <= width-10; j = j+50){
		plinkos.push(new Plinkos(j,175));
	}

	for (var j =40; j <= width; j = j+50){
		plinkos.push(new Plinkos(j,275));
	}

	for (var j =15; j <= width-10; j = j+50){
		plinkos.push(new Plinkos(j,375));
	}

	

	



	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
 
 ground.display();

 

 for (var k = 0; k <divisions.length ; k++){
	 divisions[k].display();
 }

 for (var j = 0; j <plinkos.length ; j++){
	plinkos[j].display();
}

/*if(frameCount % 60 === 0){
	particles.push(new Particles(random(width/2-10 , width/2 + 10),10));
}

for (var j = 0; j <particles.length ; j++){
	particles[j].display();
}*/






textSize(20);
text("500",25,520);
text("500",105,520);
text("500",185,520);
text("500",265,520);
text("100",345,520);
text("100",425,520);
text("100",505,520);
text("200",585,520);
text("200",665,520);
text("200",745,520);
text("Score : "+score,40,40);


mousePressed();
particle.display();
  

if(particle!==null){
	particle.display();
	if(particle.body.position.y>760) {
		if(particle.body.position.x<300){
			score = score+500;
			particle = null;
			if(count>=5){
				gameState = "end"; 
			}
		}
	}
}





 
  
  drawSprites();

 
}

function mousePressed(){
	//if(gameState!=="end"){
		count++;
		
		particle = new Particles(mouseX,10);

	// }
}



