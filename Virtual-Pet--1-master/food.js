class Food{
    constructor(){
        this.foodstock=0
        this.image=loadImage("images/Milk.png")
        this.lastfed

    }
    getfoodstock(){
        return this.foodstock
    }
    updatefoodstock(fs){
    this.foodstock=fs

    }
    display(){
        var x=80,y=100
imageMode(CENTER)
if(this.foodstock!==0){
    for(var i=0;i<this.foodstock;i++){
        if(i%10===0){
            x=80;y=y+50
        }
        image (this.image,x,y,50,50)
        x=x+30
    }
}

    }
}