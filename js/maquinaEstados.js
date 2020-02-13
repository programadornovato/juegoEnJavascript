var maquinaEstados={
    estadoActual:null,
    iniciar:function () {

    },
    cambiarEstado:function (nuevoEstado) {
        switch (nuevoEstado) {
            case listaEstados.CARGANDO:
                //metodo CARGANDO
                break;
            case listaEstados.MENU_INICIAL:
                //metodo MENU_INICIAL
                break;
            case listaEstados.MAPAMUNDI:
                //metodo MAPAMUNDI
                break;
            case listaEstados.NIVEL:
                //metodo NIVEL
                break;
            default:
                break;
        }
    },
    actualizar:function () {
        maquinaEstados.estadoActual.actualizar();
    },
    dibujar:function () {
        maquinaEstados.estadoActual.dibujar();
    }
}