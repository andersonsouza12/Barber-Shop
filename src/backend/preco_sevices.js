const agendar = document.querySelectorAll('.agendar');



agendar.forEach(function(agenda){
    agenda.addEventListener('click', function(){
        window.location.href = '../agenda/agenda.html';
    });
});