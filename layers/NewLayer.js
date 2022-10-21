class NewLayer extends Layer{
    setup(layer){
        layer.canvas = layer.createCanvas();
        layer.frameRate(30);

        //set up events like this;
        layer.mousePressed = this.mousePressed;
    }

    draw(layer){
        //layer.background(220);
        layer.clear();
        layer.circle(layer.mouseX, layer.mouseY, 100);
        layer.textAlign(CENTER, CENTER);
        layer.text('new layer', mouseX, mouseY);
    }
 
    mousePressed = (event) =>{
        print(event);
    }

}


