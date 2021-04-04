class Basket{
    constructor(x,y,width,height){

        var Basket_options = {
            isStatic : true
        } 
        
        this.body = Bodies.rectangle(x,y,width,height,Basket_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        World.add(world,this.body)


    }

    display(){
        var pos = this.body.position;
        push()
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        pop()


    }







}