class box03{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }

    display(){
        
        rectMode(CENTER);
        fill('red');
        rect(500,680, this.width, this.height);
    }

}