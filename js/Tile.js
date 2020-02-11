function Tile(xEnTile,yEnTile,zIndex,alto,ancho,sprite) {
    this.area=new area(xEnTile,yEnTile,alto,ancho);
    this.zIndex=zIndex;
    this.sprite=sprite;
    this.id=`x=${xEnTile}y=${yEnTile}z=${zIndex}`;
    var div=`<div id=${this.id}></div>`;
}
Tile.prototype.estilo=function () {
    if(document.getElementById(this.id)==false){
        throw(`el id ${this.id} no existe`);
    }
    document.getElementById(this.id).style.position="absolute";
    document.getElementById(this.id).style.left=(this.area.x*this.area.ancho)+"px";
    document.getElementById(this.id).style.top=(this.area.y*this.area.ancho)+"px";
    document.getElementById(this.id).style.width=this.area.ancho+"px";
    document.getElementById(this.id).style.height=this.area.alto+"px";
    document.getElementById(this.id).style.zIndex=this.zIndex+"";
    document.getElementById(this.id).style.background=`url("${this.sprite.img}")`;
    var x=this.sprite.posHoja.x;
    var y=this.sprite.posHoja.y;
    document.getElementById(this.id).style.backgroundPosition=`-${x}px -${y}px`;
    document.getElementById(this.id).style.backgroundClip="border-box";
    document.getElementById(this.id).style.outline="1 solid trasparent";

}