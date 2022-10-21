//base class for all layers
class Layer{
    constructor (){
        if(this.constructor === Layer){
            throw new Error("Abstract class cannot be instantiated");
        }

        let sketch = (layer) => {
            this.layer = layer;
            layer.x = 100;
            layer.y = 200;
            layer.canvas;
        
            layer.setup = () => {
                this.setup(layer);
            }
        
            layer.draw = () => {
                this.draw(layer);
           }

        };

        new p5(sketch);
    }

    remove(){
        this.layer.remove();
    }

    setDimensions(x, y, w, h){
        this.layer.resizeCanvas(w, h);
        this.layer.canvas.position(x, y);
    }
}