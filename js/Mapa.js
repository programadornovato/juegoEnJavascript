function Mapa(objetoJson){
    this.posicion=new Punto(0,0);
    this.posicionActualizada=new Punto(0,0);

    this.anchoMedidoEnTiles=objetoJson.width;
    this.altoMedidoEnTiles=objetoJson.height;

    this.anchoDeLosTiles=objetoJson.tilewidth;
    this.altoDeLosTiles=objetoJson.tileheight;

    this.paletasSprites=[];
    this.iniciaPaletasSprites(objetoJson.tilesets);

    this.capasTiles=[];
    this.iniciaCapasTiles(objetoJson.layers);
}
Mapa.prototype.iniciaPaletasSprites=function(tilesets){
    for (let i = 0; i < tilesets.length; i++) {
        this.paletasSprites.push(tilesets[i]);
    }
}
Mapa.prototype.iniciaCapasTiles=function(layers){
    for (let i = 0; i < layers.length; i++) {
        switch (layers[i].type) {
            case "tilelayer":
                this.capasTiles.push(
                    new CapaMapa(layers[i],i,this.anchoDeLosTiles,this.altoDeLosTiles,this.paletasSprites)
                );
                break;
            case "objectgroup":
                
                break;
        
        }
    }
}
Mapa.prototype.inciarRejilla=function(){
    var anchoMapaPx=this.anchoMedidoEnTiles*this.anchoDeLosTiles;
    var altoMapaPx=this.altoMedidoEnTiles*this.altoDeLosTiles;

    var html="";
    for (let ct = 0; ct < this.capasTiles.length; ct++) {
        for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
            if(this.capasTiles[ct].tiles[t]==null){
                continue;
            }
            var tileActual=this.capasTiles[ct].tiles[t];
            html=html+tileActual.html;
        }
    }
    document.getElementById("mapa").innerHTML=html;
    for (let ct = 0; ct < this.capasTiles.length; ct++) {
        for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
            if(this.capasTiles[ct].tiles[t]==null){
                continue;
            }
            var tileActual=this.capasTiles[ct].tiles[t];
            tileActual.aplicarEstilos();
        }
    }
    document.getElementsByTagName('body')[0].style.overflow="hidden";

}
Mapa.prototype.actualizar=function () {
    
}
Mapa.prototype.dibujar=function () {
    
}