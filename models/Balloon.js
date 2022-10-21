class Balloon{
    
    constructor(r, hsbColor){
        this.r = r;
        this.hsbColor = hsbColor;
    }

    showAt (x, y) {
        this.x = x;
        this.y = y;

        let d = this.r * 2;
        let angle = 30;
        let lineStartX = cos(angle) * this.r;
        let lineStartY = sin(angle) * this.r;
        
        angleMode(DEGREES);
        noStroke();
        colorMode(HSB);
        let clr = color(this.hsbColor, 100, 100);
        fill(clr);

        circle(this.x, this.y, d);

        beginShape(TRIANGLES);
        vertex(this.x - lineStartX, this.y + lineStartY);
        vertex(this.x, this.y + d);
        vertex(this.x + lineStartX, this.y + lineStartY);
        endShape(CLOSE);

    };
}