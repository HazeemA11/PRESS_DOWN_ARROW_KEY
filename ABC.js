class ABC{
    constructor(x,y,width,height){

        var ABC_options = {
            isStatic : true
        } 
        
        this.body = Bodies.rectangle(x,y,width,height,ABC_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        World.add(world,this.body)


    }

    display(){
        var pos = this.body.position;
        push()
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        pop()


    }







}