var tabela = document.querySelector("table");

// Parent Node = Pai de nó do HTML
// Event.target = o cara que foi clicado, o nosso alvo
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    // Definir o tempo para fazer algo
    setTimeout(function(){
        event.target.parentNode.remove(); 
    },500);
});