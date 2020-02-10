
document.addEventListener('DOMContentLoaded',function(){
    console.log("Inicia juego");
    var a1=new Area(0,30,100,100);
    var a2=new Area(100,30,100,100);
    medidas.tomaMedida();
    medidas.dibujarTiles();
    teclas.iniciar();
    ajax.carga("img/juego48.json");
});

var start=document.getElementById("start");
start.addEventListener('click',function(){
    bucleInfinito.bucle();
});
var start=document.getElementById("mostrar");
start.addEventListener('click',function(){
    teclas.mostrarTeclas();
});
window.addEventListener('resize',function () {
    medidas.dibujarTiles();
});