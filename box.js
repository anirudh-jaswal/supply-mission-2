class Box{
    constructor(x,y,width,height){
       var options={
       restitution=1
       }
    
        this.body=Bodies.rectangle(200,50,20,20,options)
        World.add(world,this.body)
    
    }
     display(){
        var pos=this.body.position
       
        rectMode(CENTRE)
        fill(255,0,0)
        rect(pos.x,pos.y,this.width,this.height)
     }
    }