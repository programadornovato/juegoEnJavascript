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
Mapa.prototype.actualizar=function () {
    
}
Mapa.prototype.dibujar=function () {
    
}