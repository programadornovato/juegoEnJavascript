var teclas={
    arregloTeclas:new Array(),
    iniciar:function () {
        document.onkeydown=teclas.guardaTeclas;
    },
    guardaTeclas:function (e) {
        teclas.arregloTeclas.push(e.key);
        console.log(e.key);
    },
    teclaPulsada:function (codLetra){
        return (teclas.arregloTeclas.indexOf(codLetra))?true:false;
    },
    borrarTeclas:function () {
        teclas.arregloTeclas=new Array();
    },
    mostrarTeclas:function () {
        console.log(teclas.arregloTeclas);
    }
}