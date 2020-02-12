function Paleta(tilesets) {
    this.image=tilesets.image;
    
    this.imageheight= parseInt(tilesets.imageheight);
    this.imagewidth = parseInt(tilesets.imagewidth);

    this.tileheight= parseInt(tilesets.tileheight);
    this.tilewidth= parseInt(tilesets.tilewidth);

    this.firstgidSobreUno=parseInt(tilesets.firstgid);

    this.altoImagenEnTiles=this.imageheight/this.tileheight;//432/48=9
    this.anchoImagenEnTiles=this.imagewidth/this.imagewidth;//816/48=17

    this.totalDeTiles=this.altoImagenEnTiles*this.anchoImagenEnTiles;//9*17=153

    this.sprites=[];

    for (let index = 0; index < totalDeTiles; index++) {
        var idSobreZero=this.firstgidSobreUno-1+index;
        var posHoja=this.posXY(idSobreZero);
        this.sprites.push(new Sprite(this.image,idSobreZero,posHoja))
    }
}
Paleta.prototype.posXY=function (idSobreZero) {
    var x=idSobreZero % this.anchoImagenEnTiles;
    var y=Math.floor(idSobreZero/this.anchoImagenEnTiles);//18/16=1.125
    return new Punto(x*this.tilewidth,y*this.tileheight);
}