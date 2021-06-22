var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente do form
    var paciente = obtemPacientedoFormulario(form);
    
    // Cria a tr e a td do paciente 
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensdeErro(erros);
        return;
    }
    
    // adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente);

    //reseta o formulario
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensdeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";
    
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
        
    
}



function obtemPacientedoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente) {

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser nulo");
        alert("O nome não pode ser nulo")
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é Inválido");
    }    
    if(!ValidaAltura(paciente.altura)) {
        erros.push("Altura é invalida !");
    }


    if(paciente.gordura.length == 0){
        erros.push("A Gordura não pode ser nula");
    }

    if(paciente.peso.length == 0) {
        erros.push("O Peso não pode ser nulo");
    }

    if(paciente.altura.length == 0) {
        erros.push("A Altura não pode ser nulo");
    }
    return erros;
}


var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
     
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");


    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = ValidaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso Inválido !");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido !";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura Inválida !");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida !";
        paciente.classList.add("paciente-invalido");
    }


    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }else {
        return false;
    }
}

function ValidaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;

    }else {
        return false;
    }
}


function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}