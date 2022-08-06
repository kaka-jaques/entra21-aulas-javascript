function add(){

    var object = {
        nome: $("nome".valueOf()),
        endereco:$("endereco".valueOf()),
        aniversario: $("aniversario".valueOf()),
        enderecoPrincipal: 1
    }

    $.ajax({
        type: "POST",
        url: "http://192.168.2.108:8080/mgr/add",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        dataType: "json",
        data: JSON.stringify(object),
        success: function (response) {
            $("#text").append(JSON.stringify(response))
        },
        error: function(wrong){
            $("#text").append(JSON.stringify(wrong))
        }
    });
}