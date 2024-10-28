class Snak {
    constructor(id, posX, posY) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.contenedor= document.body;
    }
    getNum(){
        return this.id
    }
    getByThisId(){
        return "snak"+this.id
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
    setContenedor(contenedor){
        this.contenedor = contenedor;
    }
    create(contenedor){
        this.contenedor = contenedor;
        contenedor.appendChild(document.createElement("div").id = this.getByThisId());
        let style = {
            "left": this.posX+"px",
            "top": this.posY+"px",
            "display": "block"
        }
        document.getElementById(this.getByThisId()).classList.add("snak");
        for (var propiedad in style){
            document.getElementById(this.getByThisId).style[propiedad] = style[propiedad]
        }
        return;
    }
    delete(){
        this.contenedor.removeChild(document.getElementById(this.getByThisId));
        return 1;
    }
    objElement(isCreate = false, contenedor = document.body){
        if (isCreate) {
            this.create(contenedor);
            return this.obj();
        } else {
            return document.getElementById(this.getByThisId);
        }
    }
    obj(){
        return {
            "num": this.id,
            "id": this.getByThisId,
            "x": this.posX,
            "y": this.posY
        }
    }
}
class Snaks {
    constructor(tamañoI, contenedor) {
        this.contenedor = contenedor;
        this.tamaño = tamañoI;
        this.cabeza = new Snak(-30, 0, 0)
        this.cabeza.create(contenedor).classList.add("cabeza");
        this.large = [this.cabeza];
        for (let i = 0; i < tamañoI; i++) {
            const cola = new Snak(i, i+0, 0)
            cola.create(contenedor);
            this.large.push(cola)
        }
    }
    pushX(){
        const cola = new Snak((this.large.length), ++this.large[--this.large.length].getX, this.large[--this.large.length].getY)
        cola.create(this.contenedor);
        this.large.push(cola);
        this.tamaño++;
        return 1;
    }
    pushY(){
        const cola = new Snak((this.large.length), this.large[--this.large.length].getX, ++this.large[--this.large.length].getY)
        cola.create(this.contenedor);
        this.large.push(cola);
        this.tamaño++;
        return 1;
    }
    pop(){
        this.large[--this.large.length].delete()
        this.large.pop();
        return 1;
    }
}