var medidas={
    ancho:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    tilesTam:100,
    tilesEscala:1,//1=100% ejem: 0.50=50%
    tomaMedida:function(){
        window.addEventListener('resize',function(){
            medidas.ancho=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            medidas.alto=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log(`
            ancho:${medidas.ancho}\n
            alto:${medidas.alto}\n

            `);
        });
    },
    getNumTilesAncho:function () { 
        var nuevaMedidaTiles=medidas.tilesTam*medidas.tilesEscala;
        return Math.ceil((medidas.ancho-nuevaMedidaTiles)/nuevaMedidaTiles);
        //772-100=672/100=ceil(6.72)=7
    },
    getNumTilesAlto:function () { 
        var nuevaMedidaTiles=medidas.tilesTam*medidas.tilesEscala;
        return Math.ceil((medidas.alto-nuevaMedidaTiles)/nuevaMedidaTiles);
    },
    getNumTilesTotal:function () {
        return medidas.getNumTilesAncho*medidas.getNumTilesAlto;
    },
    dibujarTiles:function(){
        var nuevaMedidaTiles=medidas.tilesTam*medidas.tilesEscala;
        for (var y = 0; y < medidas.getNumTilesAlto(); y++) {
            for (var x = 0; x < medidas.getNumTilesAncho(); x++) {
                Area(x*nuevaMedidaTiles,y*nuevaMedidaTiles,nuevaMedidaTiles,nuevaMedidaTiles);
            }
        }
    }

}