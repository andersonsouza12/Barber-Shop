document.addEventListener('DOMContentLoaded', function(){
    const params = new URLSearchParams(window.location.search);
    const elementoH1 = params.get('texto');

    const exibirelementoH1 = document.querySelector('.selected-service');
    exibirelementoH1.textContent = `Serviço selecionado: ${elementoH1}`;
});








const card = document.querySelector('card');


card.addEventListener('click', function(){
    
});