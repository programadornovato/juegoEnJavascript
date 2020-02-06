
document.addEventListener('DOMContentLoaded',function(){
    console.log("Inicia juego");
    var a1=new Area(0,30,100,100);
    var a2=new Area(100,30,100,100);
    medidas.tomaMedida();
});

var start=document.getElementById("start");
start.addEventListener('click',function(){
    bucleInfinito.bucle();
});
