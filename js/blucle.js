var bucleInfinito={
    id:null,
    fin:0,//Fin del ciclo
    aps:0,//Actualizaciones por segundo
    fps:0,//Frames por segundo
    bucle:function(tiempo){
        bucleInfinito.id=window.requestAnimationFrame(bucleInfinito.bucle);
        var diferencia=tiempo-bucleInfinito.fin;
        if( diferencia > 999 ){
            console.log(`
            fin=${bucleInfinito.fin}\n
            tiempo=${tiempo}\n
            diferencia=${diferencia}\n
            `);
            bucleInfinito.fin=tiempo;
        }
    }
}