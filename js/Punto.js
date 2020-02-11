function Punto(x,y) {
    this.x=x;
    this.y=y;
}
Punto.prototype.coincide=function (punto) {
    if(this.x==punto.x && this.y==punto.y ){
        return true;
    }
    else{
        return false;
    }
}