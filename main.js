class snak {
    constructor(id, posX, posY) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
    }
    getId(){
        return this.id
    }
    getX(){
        return this.posX
    }
    getY(){
        return this.posY
    }
    setId(id){
        this.id = id
    }
    setX(x){
        this.posX = x
    }
    setY(y){
        this.posY = y
    }
    create(contenedor){
        contenedor.createElement("div").id = "snak"+this.id
        let style = {
            "left": this.posX+"px",
            "top": this.posY+"px",
            "display": "block"
        }
        document.getElementById("snak"+this.id).classList.add("snak");
        for (var propiedad in style){
            document.getElementById("snak"+this.id).style[propiedad] = style[propiedad]
        }
    }

}