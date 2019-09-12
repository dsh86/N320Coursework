class Drop{
    constructor(){
        this.x = Math.random() * 400;
        this.y = Math.random() * 40;
        this.done = false;

	}

	update(){

		//increase the value of y to move it down
        this.y ++;

		//if above the ground, draw it
        if(this.y < 500){
            this.Fill();

		//set done to true if appliable 

        }
        else if(this.y >= 500){
            this.done = true;

		}

	}

	Fill(){

		//set a color
    fill(0,0,200);

		//create a circle
    circle(this.x, this.y, 5);

	}



}



class Ground{
    constructor(){

		//set to and from points and how far it is
        this.colorBase = 0;
        this.colorTo = 255;
        this.colorPercent = 0.05;

	}

	update(){

		//set the color mode to RGB
        colorMode(RGB);

		//set the color from start to end plus color percentage
        fill(lerpColor(color(0,0,this.colorBase, 200), color(0,0,this.colorTo, 255), this.colorPercent));

		//draw a rectangle
        rect(0, 500, 400, 100);

	}

}



class Cloud{

	//take ground in the constructor and declare variables
    constructor(ground){
        this.drops = [];
        this.ground = ground;

	}

    //create rain drops
    createDrop(){
        this.drops.push(new Drop());

	}



	update(){

		//for every drop...
        for (var i = this.drops.length - 1; i >= 0; i--) {

			//updating drops
                this.drops[i].update();

			//If complete, move the ground color up by 5 percent and delete the drop
        if(this.drops[i].done == true){
            this.drops.splice(i, 1);
            this.ground.colorPercent += 0.05;

			}

		}

		//updating ground
            this.ground.update();

	}

}



var ground = new Ground();
var cloud = new Cloud(ground);



function setup() {
    createCanvas(800,600);

}



function draw(){

	//set the background as white
    colorMode(RGB);
    background(255);

	//5% will make a drop
    if (Math.random() < 0.05){
        cloud.createDrop();

    }
    
        cloud.update();

}

