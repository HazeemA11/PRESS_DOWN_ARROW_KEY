class Player{
    constructor(x,y,radius){

        var Player_options = {
            

           isStatic:false,
           restitution :0.15,
           friction:0.3,
           density:7
        } 
        
        
        this.body = Bodies.circle(x,y,radius,Player_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        World.add(world,this.body)


    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        fill("yellow");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        pop()


    }







}