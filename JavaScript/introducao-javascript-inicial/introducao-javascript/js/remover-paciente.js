var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paidoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paidoAlvo.remove();
});

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });