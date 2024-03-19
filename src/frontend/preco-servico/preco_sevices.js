const agendar = document.querySelectorAll('.agendar');



agendar.forEach(function(botao){
    botao.addEventListener('click', function(){
        const elementoH1 = this.parentElement.querySelector('h1').textContent;
        const servico = elementoH1.split('......')[0].trim();
        const urlDestino = `../agenda/agenda.html?texto=${encodeURIComponent(servico)}`;
        window.location.href = urlDestino;
    });
});