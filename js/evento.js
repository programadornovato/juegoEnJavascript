
document.addEventListener('DOMContentLoaded',function(){
    console.log("Inicia juego");
    //console.log("tomamos medidas");
    medidas.tomaMedida();
});

var start=document.getElementById("start");
start.addEventListener('click',function(){
    bucleInfinito.bucle();
});
