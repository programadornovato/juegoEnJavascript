var ajax={
    carga:function (ruta) {
        fetch(ruta)
        .then(function (respusta) {
            return respusta.text();
        }).then(function (data) {
            console.log(JSON.parse(data));
        }).catch(function (err) {
            console.error(err);
        });
    }
}
