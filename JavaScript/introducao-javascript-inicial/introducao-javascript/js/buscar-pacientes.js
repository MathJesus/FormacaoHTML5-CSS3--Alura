var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes..");

    // XMLHttpRequqest Objeto do Javascript responsavel por fazer requisições HTTP
    var xhr = new XMLHttpRequest();

    // "open, função que abre a conexão com o endereço que a gente quer fazer"
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //"Load" evento pra escutar se a resposta ja foi carregada
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
        //"JSON.parse pode passar um texto em JSON e ele vai te devolver um texto Javascript"
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function (paciente) {
            adicionaPacienteNaTabela(paciente)
            
        });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel")
        }
        
    })

    //"send pega a requisição que acabamos de criar e envia ela"
    xhr.send();
})