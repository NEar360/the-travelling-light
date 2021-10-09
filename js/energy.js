class Energy{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var angle = this.angle;
        var position = this.body.position;
        //console.log(player.body);
        push();
        if(position.x>playerPosX){
            //fill(colorcheck);
            fill('blue');
        }
        //console.log(energyCollision.collided)
        
        /*if(position.x === playerPosX && 
        (position.y-playerHeight-100<playerPosY&&position.y+playerHeight+100>playerPosY)){
           playerEnergy = playerEnergy+2;
           World.remove(this.body); 
        }*/
        
        strokeWeight(0);
        translate(position.x,position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}