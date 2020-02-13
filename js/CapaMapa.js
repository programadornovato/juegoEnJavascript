function CapaMapa(datosCapa,indiceZ,anchoTilesPx,altoTilesPx,paletas) {
    this.anchoEnTiles=datosCapa.width;
    this.altoEnTiles=datosCapa.height;

    this.x=parseInt(datosCapa.x);
    this.y=parseInt(datosCapa.y);
    this.z=indiceZ;

    this.tiles=[];

    for (let x = 0; x < this.anchoEnTiles; x++) {
        for (let y = 0; y < this.altoEnTiles; y++) {
            var idSpriteActualSobreUno=datosCapa[x+(y*this.anchoEnTiles)];
            if(idSpriteActualSobreUno==0){
                this.tiles.push(null);
            }
            else{
                var spriteActual=this.encontrarSpriteEnLaPaleta(idSpriteActualSobreUno-1,paletas);
                this.tiles.push(new Tile(x,y,indiceZ,anchoTilesPx,altoTilesPx,spriteActual));
            }
            
        }
        
    }
}
CapaMapa.prototype.encontrarSpriteEnLaPaleta=function (idSpriteActualSobreZero,paletas) {
    for (let p = 0; p < paletas.length; p++) {
        if(
            idSpriteActualSobreZero>=paletas[p].firstgidSobreUno-1  && 
            idSpriteActualSobreZero < ( paletas[p].totalDeTiles + paletas[p].firstgidSobreUno+1+idSpriteActualSobreZero )
        ){
            return paletas[p].sprites[ Math.abs(paletas[p].firstgidSobreUno-1-idSpriteActualSobreZero)];
        }
        
    }
}