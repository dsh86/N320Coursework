class Ball {
      constructor() {
      this.position = { x: 100, y: 100 };
      this.velocity = { x: 10, y: 0 };
  
      }
      //once a frame,
  
      update() {
  
        //change the position according to velocity and draw
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        circle(this.position.x, this.position.y, 20);
  
        //call the ball beyond function
        if(this.position.x < 0 || this.position.x > 400) {
         World.ballBeyond(this);
  
        }
  
      }
  
      
  
    }
  
  //listener
  
  class Box {
    constructor(x, y) {
    this.position = { x: x, y: y };
    this.size = {x: 5, y:5};
  
    }
  
    //once a frame, draw the function
    update() {
      fill("#FFF");
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
  
    }
  
    //increase the size by 5 in x and y
    grow(){
      this.size.x += 5;
      this.size.y += 5;
  
    } 
  
  }
  
  //manager
  
  var World = {
  
    //background color
    bgcolor: [237, 119, 83],
  
    //Make place for boxes to go
    boxes: [],
  
    //call update in all boxes
    update: function(){
  
      for (var i = this.boxes.length - 1; i >= 0; i--) {
        this.boxes[i].update();
  
      }
  
    },
  
    //called when ball hits wall
    ballBeyond: function(whichBall) {
  
      //random color selection
      this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
  
      //grow the boxes
      for (var i = this.boxes.length - 1; i >= 0; i--) {
        this.boxes[i].grow();
  
      }
  
      //reset position and randomly select speed and direction
      whichBall.position.x = 100;
      whichBall.velocity.x = (Math.random() - .5) * 20;
  
    }
  
  }
  
  
  
  
  
  
  
  //create boxes and ball
  var ball = new Ball();
  World.boxes.push(new Box(0,0));
  World.boxes.push(new Box(200,200));
  
  
  function setup() {
  
    //canvas for our objects
    createCanvas(400,300);
  
    
  
  }
  
  //every frame,
  function draw() {
  
    //update the background
    background( World.bgcolor );
  
    //call all update functons in our classes
    ball.update();
    World.update();
  
  }
  
  
 