let newLayer = new NewLayer();;

this.setup = () => {
  this.createCanvas(windowWidth, windowHeight);
  newLayer.setDimensions(0, 0, windowWidth, windowHeight);
}

this.draw = () => {
  this.background(180, 10, 100);
  
  //create new object from models/classes
  let balloon = new Balloon(150, 200);
  balloon.showAt(200, 200);
}


//window resized event
this.windowResized = () =>{
  this.resizeCanvas(windowWidth, windowHeight);
  newLayer.setDimensions(0, 0, windowWidth, windowHeight);
}

//this canvas's mouse pressed event
this.mousePressed = (event) => {
  print(event);
}

//this is how to wire up the other layers' events from main sketch 
// newLayer.layer.mousePressed = (event) => {
//   alert('new layer');
// }

